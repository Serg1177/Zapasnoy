import React, { ReactNode } from 'react';

import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

import background from '~/ui/images/background.png';

const { Title } = Typography;

const LoginImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 55%;
  min-height: 100vh;
  padding: 53% 43% 3px 8%;
  color: white;
  font-size: 5rem;
`;

const StyledTitle = styled(Title)`
  margin: 1;
  font-weight: 640;
  font-size: 2.7rem;
  line-height: 46px;
  color: white;
  border-left-style: solid;
  border-color: #20a4f3;
  border-width: 4px;
  padding-left: 15px;
`;

type Props = {
  children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Row>
      <Col span={14}>
        <LoginImage >
          <StyledTitle level={2} >
            Единая Информационная Система
          </StyledTitle>
        </LoginImage>
      </Col>
      <Col span={10}>{children}</Col>
    </Row>
  );
};

export default AuthLayout;
