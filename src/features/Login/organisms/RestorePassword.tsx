import React, { useState } from 'react';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Row } from 'antd';
import { Typography } from 'antd';

import ModalOwn from '~/features/common/Modal';

const { Title, Text } = Typography;

const initValues = {
  email: ''
};

type Props = {
  onPress: () => void;
};

const RestorePassword = ({ onPress }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values: object) => {
    console.log('Success:', values);
    setIsModalVisible(true);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ marginTop: 50 }}>
      <Row>
        <ArrowLeftOutlined
          onClick={onPress}
          style={{
            fontSize: 20,
            marginTop: 3,
            color: '#20A4F3',
            margin: 0,
            marginRight: 10,
          }}
        />
        <Title style={{ margin: 0, marginBottom: 20 }} level={5}>
          Восстановление пароля
        </Title>
      </Row>
      <Form
        name='basic'
        initialValues={initValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Введите корректный емайл!',
            },
          ]}
          style={{ marginBottom: 12 }}
        >
          <Input placeholder={'Введите ваш емайл'} />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ width: '100%', borderRadius: 4 }}
            type='primary'
            htmlType='submit'
          >
            Восстановить пароль
          </Button>
        </Form.Item>
      </Form>
      <Row align={'middle'}>
        <Text style={{ margin: 0 }}>Не помните емайл?</Text>
        <Button style={{ margin: 0 }} type='link'>
          Служба поддержки
        </Button>
        <ModalOwn
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </Row>
    </div>
  );
};

export default RestorePassword;
