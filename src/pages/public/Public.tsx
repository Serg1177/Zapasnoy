import React, { FC, useCallback, useContext, useState } from 'react';


import { UserContext } from '../../user/userContext';
import { UserInterface } from '../../user/userInterface';

import { SignIn } from './SignIn';

export const Public: FC = () => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState<UserInterface | undefined>(undefined);

  const onAuthorize = useCallback(
    (user: UserInterface) => {
      setUser(user);
    },
    [setUser]
  );
  const onAbortPinCode = useCallback(() => {
    setUser(undefined);
  }, [setUser]);

  return !user ? <SignIn onAuthorize={onAuthorize} /> : <div></div>;
};
