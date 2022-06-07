import {createContext, Dispatch, SetStateAction} from "react";
import {UserInterface} from "./userInterface";

export interface UserContextInterface {
    isUserRegisterOnDevice: boolean;
    userSignIn: (pass: string, user: string) => void;
    userSignOut: () => void;
    user: UserInterface | undefined;
    setUser: Dispatch<SetStateAction<UserInterface | undefined>>
    setScreen: (screen: string | undefined) => void;
}

export const UserContext = createContext<UserContextInterface>({
    isUserRegisterOnDevice: false,
    userSignIn: (pass: string, user: any) => {
    },
    userSignOut: () => {
    },
    user: undefined,
    setUser: value => {
    },
    setScreen: (screen: string | undefined) => {}
})
