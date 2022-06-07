import React, {FC, useLayoutEffect, useMemo, useState} from 'react';
import {useAsync, useAsyncFn} from "react-use";
import {UserContext} from './userContext';
import {UserInterface} from "./userInterface";

interface UserProps {
    children: (isUserRegisterOnDevice: boolean) => React.ReactNode
}

export const UserContextComponent: FC<UserProps> = ({children}) => {
    const [isUserRegisterOnDevice, setIsUserRegisterOnDevice] = useState(!!localStorage.getItem('@@_userRegisterOnDevice'));
    const [user, setUser] = useState<UserInterface | undefined>(undefined);
    const [appId, setAppId] = useState<string | null>(null);
    const [screen, setScreen] = useState<string| undefined>(undefined);

    useLayoutEffect(() => {
        if (user) {
            setAppId(localStorage.getItem('@@_appId'))
        } else {
            setAppId(null)
        }
    }, [user, setAppId])

    const userContext = useMemo(() => ({
        isUserRegisterOnDevice,
        userSignIn: (pass: string, user: any) => {
            
        },
        userSignOut: async () => {
            
        },
        user,
        setUser,
        setScreen: (screen: string| undefined) => setScreen(screen)
    }), [isUserRegisterOnDevice, setIsUserRegisterOnDevice, user, setUser, setScreen]);

    const content = useMemo(() => children(isUserRegisterOnDevice), [children, isUserRegisterOnDevice]);

    return (
        <UserContext.Provider value={userContext}>
            {content}
        </UserContext.Provider>
    )
}
