import * as React from 'react';

import { Menu as AntdMenu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MENU_ITEMS } from '../model';

const StyledMenu = styled(AntdMenu)`
  &&& {
    border-bottom: none;
    justify-content: center;
    line-height: ${(props) => props.theme.spacing(3)};
  }
  &&& > li {
    padding-left: ${(props) => props.theme.spacing(1.5)};
    padding-right: ${(props) => props.theme.spacing(1.5)};
  }
`;

export const Menu: React.FC = () => {
  const items = React.useMemo(() => MENU_ITEMS.map(({ key, label, path }) => ({
    key,
    label: <Link to={path}>{label}</Link>,
  })), []);

  return <StyledMenu mode='horizontal' items={items} />;
};
