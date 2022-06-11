import * as React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

import { BREAK_POINTS } from '~/ui/styles';


const StyledContent = styled(Layout.Content)`
  background-color: ${(props) => props.theme.palette.layout.background};
`;

const StyledHeader = styled(Layout.Header)`
  background-color: ${(props) => props.theme.palette.layout.background};
  height: auto;
  @media screen and ${BREAK_POINTS.xs} {
    padding-bottom: ${(props) => props.theme.spacing(2)};
    padding-top: ${(props) => props.theme.spacing(2)};
  }
  @media screen and ${BREAK_POINTS.md} {
    padding-bottom: ${(props) => props.theme.spacing(3)};
    padding-top: ${(props) => props.theme.spacing(3)};
  }
  @media screen and ${BREAK_POINTS.lg} {
    padding-bottom: ${(props) => props.theme.spacing(6)};
    padding-top: ${(props) => props.theme.spacing(6)};
  }
`;

const StyledFooter = styled(Layout.Footer)`
  background-color: ${(props) => props.theme.palette.layout.background};
  height: auto;
  @media screen and ${BREAK_POINTS.xs} {
    padding-bottom: ${(props) => props.theme.spacing(2)};
    padding-top: ${(props) => props.theme.spacing(2)};
  }
  @media screen and ${BREAK_POINTS.md} {
    padding-bottom: ${(props) => props.theme.spacing(3)};
    padding-top: ${(props) => props.theme.spacing(3)};
  }
`;

const StyledLayout = styled(Layout)`
  height: 100vh;
  justify-content: space-between;
`;

interface IPageTemplate {
  content: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
}

export const PageTemplate: React.FC<IPageTemplate> = ({ content, footer, header }) => (
  <StyledLayout>
    <StyledHeader>{header}</StyledHeader>
    <StyledContent>{content}</StyledContent>
    <StyledFooter>{footer}</StyledFooter>
  </StyledLayout>
);
