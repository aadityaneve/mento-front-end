import React, { useState, useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { setProfile, removeProfile } from '../../features/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../Context/AuthContext';

const clientId =
    '138806710425-q200r0khjheck91qftgeevq3v907dsr2.apps.googleusercontent.com';

export function Glogin() {
    const { Token, setToken } = useContext(AuthContext);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const onLoginSuccess = (res) => {
        // console.log('Login Success:', res.profileObj);
        dispatch(setProfile(res.profileObj));
        setToken(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        className='flex text-white items-center font-semibold text-lg h-12 pr-5 pl-3 border border-black bg-[#EB4242] hover:bg-[#bb2828] rounded-md'
                    >
                        <TiSocialGooglePlus className='w-10 h-10 mr-2' />
                        GOOGLE
                    </button>
                )}
            />
        </>
    );
}

export function Glogout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Token, setToken } = useContext(AuthContext);

    const onSignoutSuccess = () => {
        alert('Signout Successfully');
        dispatch(removeProfile(null));
        setToken(false);
        navigate(`mento-front-end/`);
    };

    return (
        <>
            <GoogleLogout
                clientId={clientId}
                onLogoutSuccess={onSignoutSuccess}
                icon={false}
                render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        className='hover:text-orange-600'
                    >
                        Log Out
                    </button>
                )}
            ></GoogleLogout>
        </>
    );
}
