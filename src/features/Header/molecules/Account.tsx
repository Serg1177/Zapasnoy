import * as React from 'react';

import { BellOutlined, DownOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Dropdown, Row, Space, Typography } from 'antd';
import styled from 'styled-components';

import { AccountMenu } from './AccountMenu';

const StyledBadge = styled(Badge)`
  position: relative;
  top: ${(props) => props.theme.spacing(0.25)};
  margin-right: ${(props) => props.theme.spacing(1)};;
`;

const StyledBellOutlined = styled(BellOutlined)`
  color: ${(props) => props.theme.palette.disabledText};
  font-size: ${(props) => props.theme.typography.fontSize(9)};
`;

const StyledLink = styled(Typography.Link)`
  &&& {
    color: ${(props) => props.theme.palette.defaultText};
  }
`;

const StyledRow = styled(Row)`
  &&& {
    line-height: ${(props) => props.theme.spacing(5)};
  }
`;

interface IAccount {
  notificationsCount: number;
  userAvatar: string;
  userName: string;
}

export const Account: React.FC<IAccount> = ({ notificationsCount, userAvatar, userName }) => (
  <StyledRow justify='center' gutter={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12, xxl: 12, }}>
    <Col><StyledBadge count={notificationsCount} size='small'><StyledBellOutlined /></StyledBadge></Col>
    <Col><Avatar size={32} src={userAvatar} /></Col>
    <Col>
      <Dropdown overlay={<AccountMenu />} placement='bottomRight' trigger={['click']}>
        <StyledLink onClick={(e) => e.preventDefault()}>
          <Space align='center'>
            {userName}
            <DownOutlined />
          </Space>
        </StyledLink>
      </Dropdown>
    </Col>
  </StyledRow>
);
