import * as React from 'react';

import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

const StyledParagraph = styled(Typography.Paragraph)`
  color: ${(props) => props.theme.palette.disabledText};
`;

export const Footer: React.FC = () => (
  <Row justify='center'>
    <Col>
      <StyledParagraph>{'«Инфопрофиль» | Все права защищены.'}</StyledParagraph>
    </Col>
  </Row>
);
