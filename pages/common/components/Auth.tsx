import React, { useCallback } from 'react';

const Auth = (): JSX.Element => {
    const CLIENT_ID: string = '7600733c0c5ed7849ce6';
    const REDIRECT_URL: string = 'http://localhost:3000'

    const onClick = useCallback((): void => {
        const url: string = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;

        window.open(url);
    }, []);

    return (
        <button onClick={onClick}>Github Login</button>
    );
};

export default Auth;