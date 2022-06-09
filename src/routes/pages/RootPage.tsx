import * as React from 'react';

import { Footer } from '~/features/Footer';
import { Header } from '~/features/Header';
import { Search } from '~/features/Search';
import { PageTemplate } from '~/ui/templates';

export const RootPage: React.FC = () => (
  <PageTemplate
    content={<Search />}
    footer={<Footer />}
    header={<Header />}
  />
);
