import React, {FC, useCallback, useEffect, useState} from 'react';
import {Button,  Input,  List, notification} from 'antd';
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {UserInterface} from "../../user/userInterface";
import {useAsyncFn} from "react-use";

type NotificationType = 'success' | 'info' | 'warning' | 'error';
const openNotification = (message: string, type: NotificationType = 'info', cb?: any) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
    cb();
  };
interface SignInProps {
    onAuthorize: (user: UserInterface) => void
}

export const SignIn: FC<SignInProps> = ({onAuthorize}) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [passwordType, setPasswordType] = useState<'password' | 'text'>('password')
    const changePasswordType = useCallback(() => setPasswordType((type) => type === 'password' ? 'text' : 'password'), [setPasswordType])
    const [{loading, error, value}, auth] = useAsyncFn(async (username: string, password: string) => {
        if (!username || !password) {
            throw Error('Username and password are required')
        }
        const response = await fetch(process.env.REACT_APP_SIGN_IN_URL || 'https://uat.beacon-tech.net/login/user', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const {ok: errorCode, msg, ts, ...data} = await response.json();
        if (errorCode) {
            throw new Error(msg);
        }
        localStorage.clear();
        sessionStorage.clear();
        try {
            const response = await fetch(
                process.env.REACT_APP_PREFERENCE || 'https://www.beacon-tech.net/preferences/api/data/BeaconMobile/UAT',
                {
                    headers: {
                        'x-auth-token': data?.token || '',
                    }
                }
            );
            const resData = await response.json();
            if (resData?.layouts?.orderWindow) {
                localStorage.setItem('@@orderFields', JSON.stringify(resData.layouts.orderWindow));
            }
            if (resData?.layouts?.positionWindow) {
                localStorage.setItem('@@positionFields', JSON.stringify(resData.layouts.positionWindow));
            }
            if (resData?.layouts?.rollupPositionWindow) {
                localStorage.setItem('@@rollupFields', JSON.stringify(resData.layouts.rollupPositionWindow));
            }
            if (resData?.layouts?.rollupPositionWindow) {
                localStorage.setItem('@@positionSummaryFields', JSON.stringify(resData.layouts.positionSummaryWindow));
            }
        } catch (e) {
            console.log('Empty config')
        }
        return data;
    }, []);

    useEffect(() => {
        if (loading) {
            openNotification('Authorize...')
        } else {
            if (error) {
                openNotification(error.message, 'error',() => setPassword(''))
            }
            if (value) {
                onAuthorize(value);
            }
        }
    }, [loading, error, value, setPassword, onAuthorize])

    return (
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', flex: 1}} >
            <img src={'/assets/splash.png'} className={'block-page-content'} alt='splash'/>
            <List className={'block-page-content'}>
                <Input
                    placeholder='Username'
                    value={username}
                    // onChange={setUsername}
                />
                <Input
                    placeholder='Password'
                    type={passwordType}
                    value={password}
                    // onChange={setPassword}
                    // extra={passwordType === 'password' ? <EyeOutlined onClick={changePasswordType}/> :
                    //     <EyeInvisibleOutlined onClick={changePasswordType}/>}
                />
                <List.Item>
                    <Button type='primary' onClick={() => auth(username, password)}>Sign In</Button>
                </List.Item>
            </List>
        </div>
    )
}
