import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { TiSocialGooglePlus } from 'react-icons/ti';

import { setProfile, removeProfile } from '../../features/actions';
import { useDispatch, useSelector } from 'react-redux';

const clientId =
    '463581391042-osrs08iros3c7poe5270p6nti71e2qba.apps.googleusercontent.com';

export function Glogin() {
    const dispatch = useDispatch();

    const onLoginSuccess = (res) => {
        // console.log('Login Success:', res.profileObj);
        dispatch(setProfile(res.profileObj));
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
        dispatch(removeProfile(null));
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

    const onSignoutSuccess = () => {
        // alert('You have been logged out successfully');
        // console.clear();
        dispatch(removeProfile(null));
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
                        className='hover:text-orange-600 border'
                    >
                        Log Out
                    </button>
                )}
            ></GoogleLogout>
        </>
    );
}
