import React, { useState } from 'react';

import { Col, Image, Row, Typography } from 'antd';
import styled from 'styled-components';

import background from '~/ui/images/background.png';
import logo from '~/ui/images/logo.png';

import RestorePassword from './RestorePassword';
import { SignInForm } from './SignInForm';


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
            <SignInForm onSubmit={handleSignIn} onRestore={hanldeRestoreClick} />
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

