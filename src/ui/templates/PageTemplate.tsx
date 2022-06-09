import * as React from 'react';

import { Layout } from 'antd';

interface IPageTemplate {
  content: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
}

export const PageTemplate: React.FC<IPageTemplate> = ({ content, footer, header }) => (
  <Layout>
    <Layout.Header>{header}</Layout.Header>
    <Layout.Content>{content}</Layout.Content>
    <Layout.Footer>{footer}</Layout.Footer>
  </Layout>
);
