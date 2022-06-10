import * as React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

import { BREAK_POINTS } from '~/ui/styles';

const StyledHeader = styled(Layout.Header)`
  background-color: ${(props) => props.theme.palette.background};
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
  background-color: ${(props) => props.theme.palette.background};
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

interface IPageTemplate {
  content: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
}

export const PageTemplate: React.FC<IPageTemplate> = ({ content, footer, header }) => (
  <Layout>
    <StyledHeader>{header}</StyledHeader>
    <Layout.Content>{content}</Layout.Content>
    <StyledFooter>{footer}</StyledFooter>
  </Layout>
);
