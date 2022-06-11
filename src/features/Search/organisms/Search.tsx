import * as React from 'react';

import { AutoComplete, Button, Col, Row, Select } from 'antd';
import styled from 'styled-components';

const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];

const StyledAutoComplete = styled(AutoComplete)`
  &&& {
    width: 100%;
    & > div {
      border: none;
      background-color: transparent;
    }
  }
`;

const StyledButton = styled(Button)`
  border-radius: ${(props) => props.theme.spacing(0.5)};
  padding-left: ${(props) => props.theme.spacing(3.5)};
  padding-right: ${(props) => props.theme.spacing(3.5)};
`;

const StyledContainerRow = styled(Row)`
  height: 100%;
`;

const StyledInputRow = styled(Row)`
  border: ${(props) => `1px solid ${props.theme.palette.borders.default}`};
  border-radius: ${(props) => props.theme.spacing(0.5)};
  box-sizing: border-box;
  height: ${(props) => props.theme.spacing(5)};
`;

const StyledSelect = styled(Select)`
  &&& {
    width: 100%;
    & > div {
      border: none;
      background-color: transparent;
    }
  }
`;

export const Search: React.FC = () => {
  return (
    <StyledContainerRow align='middle' justify='center' gutter={{ xs: 8, sm: 8, md: 8, lg: 16, xl: 16, xxl: 16, }}>
      <Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10}>
        <StyledInputRow>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <StyledSelect defaultValue='Все модули' size='large'>
              <Select.Option value='Zhejiang'>Zhejiang</Select.Option>
              <Select.Option value='Jiangsu'>Jiangsu</Select.Option>
            </StyledSelect>
          </Col>
          <Col xs={21} sm={21} md={21} lg={21} xl={21} xxl={21}>
            <StyledAutoComplete
              options={options}
              placeholder='Введите запрос в это поле...'
              filterOption={true}
              size='large'
            />
          </Col>
        </StyledInputRow>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
        <StyledButton size='large' type='primary'>{'Найти'}</StyledButton>
      </Col>
    </StyledContainerRow>
  );
};
