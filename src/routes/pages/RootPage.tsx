import React, { useState } from 'react';

import { Footer } from '~/features/Footer';
import { Header } from '~/features/Header';
import { Login } from '~/features/Login';
import { Search } from '~/features/Search';
import { PageTemplate } from '~/ui/templates';

export const RootPage: React.FC = () => {

  const [user, setUser] = useState(false);

  if(!user){
    return <Login setUser={setUser} />;
  }
  return <PageTemplate
    content={<Search />}
    footer={<Footer />}
    header={<Header />}
  />;
};
