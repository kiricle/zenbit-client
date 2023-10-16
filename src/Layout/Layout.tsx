import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from '../ui/Link/Link';
import { Header } from './Header/Header';

export const Layout = (): ReactNode => {
    const actions = [
        <Link appearance='outlined-white' to="/">Home</Link>,
        <Link appearance='outlined-primary' to="/sign-up">Sign up</Link>,
        <Link appearance='primary' to="/sign-in">Sign in</Link>,
    ];

    return (
        <>
            <Header actions={actions} />

            <main>{<Outlet />}</main>
        </>
    );
};
