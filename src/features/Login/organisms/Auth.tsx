import React, { useState } from 'react';

import { Button, Checkbox, Col, Form, Input, Row, Typography, Image } from 'antd';
import styled from 'styled-components';

import background from '~/ui/images/background.png';
import logo from '~/ui/images/logo.png';

import RestorePassword from './RestorePassword';

const { Title, Text } = Typography;


const LoginImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 55%;
  min-height: 100vh;
  padding: 53% 43% 1% 8%;
  font-size: 5rem;
`;

// todo thake color from global theme
const StyledTitle = styled.h2`
  margin: 1;
  font-weight: 640;
  font-size: 2.7rem;
  line-height: 2.7rem;
  border-left-style: solid;
  border-color: #20a4f3;
  color: white;
  border-width: 4px;
  padding-left: 1rem;
`;


const initValues = {
  remember: false,
  username: '',
  password: '',
};


interface SingInProps  {
  onSubmit: () => void;
  onRestore: () => void;
}

const SignIn = ({ onSubmit, onRestore }: SingInProps) => {
  const onFinish = (values: object) => {
    console.log('Success:', values);
    onSubmit();
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Text>Добро пожаловать</Text>
      <Title style={{ margin: 0, marginBottom: 10 }} level={5}>
        Войдите в ваш аккаунт
      </Title>
      <Form
        name='basic'
        initialValues={initValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='on'
      >
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          style={{ marginBottom: 12 }}
        >
          <Input placeholder={'Введите ваш емайл'} />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          style={{ marginBottom: 6 }}
        >
          <Input.Password placeholder={'Ваш пароль'} />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          style={{ marginBottom: 12 }}
        >
          <Checkbox>Доверять этому устройству</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button  
            style={{ width: '100%', borderRadius: 4 }}
            type='primary'
            htmlType='submit'
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
      <Row align={'middle'}>
        <Text style={{ margin: 0 }}>Не получается войти?</Text>
        <Button onClick={onRestore} style={{ margin: 0 }} type='link'>
          Восстановить пароль
        </Button>
      </Row>
    </div>
  );
};

interface IProps {
  setUser: (user: boolean) => void;
}

export const Auth: React.FC<IProps> = ({ setUser }: IProps) => {
  const [isUpdate, setUpdate] = useState(false);

  const handleSignIn = () => {
    setUser(true);
  };

  const hanldeRestoreClick = () => {
    setUpdate(true);
  };

  return (
    <Row>
      <Col span={14}>
        <LoginImage >
          <StyledTitle  >
            Единая Информационная Система
          </StyledTitle>
        </LoginImage>
      </Col>
      <Col span={10}>
      <Row justify='center' align='middle' style={{ height: '100%' }}>
        <div>
          <Row align={'middle'} style={{ marginBottom: 10 }}>
            <Image src={logo} width={'35px'} preview={false} />
            <Title
              style={{ margin: 0, marginLeft: 10, textAlign: 'center' }}
              level={2}
            >
              Инфопрофиль
            </Title>
          </Row>
          {!isUpdate ? (
            <SignIn onSubmit={handleSignIn} onRestore={hanldeRestoreClick} />
          ) : (
            <RestorePassword onPress={() => setUpdate(false)} />
          )}
        </div>
        <Text style={{ position: 'absolute', bottom: 10, color: '#A0A5B1' }}>
          ООО «Всевидящее око» | Все права защищиены.
        </Text>
      </Row>
      </Col>
    </Row>
  );
};

