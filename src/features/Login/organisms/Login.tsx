import React, { useState } from 'react';

import { Row, Image, Typography } from 'antd';

import logo from '~/ui/images/logo.png';

import AuthLayout from './AuthLayout';
import RestorePassword from './RestorePassword';
import SignIn from './SignIn';

const { Title } = Typography;

type Props = {
  setUser: (user: boolean) => void;
};

export const Login: React.FC<Props> = ({ setUser }: Props) => {
  const [isUpdate, setUpdate] = useState(false);

  const handleSignIn = () => {
    setUser(true);
    setUpdate(true);
  };

  return (
    <AuthLayout>
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
            <SignIn onPress={handleSignIn} />
          ) : (
            <RestorePassword onPress={() => setUpdate(false)} />
          )}
        </div>
      </Row>
    </AuthLayout>
  );
};
