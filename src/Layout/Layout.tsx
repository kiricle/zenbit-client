import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from '../ui/Link/Link';
import { Header } from './Header/Header';
import styled from 'styled-components';

const Main = styled.main`
    height: calc(100% - 80px);
`;

export const Layout = (): ReactNode => {
    const actions = [
        <Link
            key={1}
            appearance="outlined-white"
            to="/"
        >
            Home
        </Link>,
        <Link
            key={12}
            appearance="outlined-primary"
            to="/sign-up"
        >
            Sign up
        </Link>,
        <Link
            key={13}
            appearance="primary"
            to="/sign-in"
        >
            Sign in
        </Link>,
    ];

    return (
        <>
            <Header actions={actions} />

            <Main>{<Outlet />}</Main>
        </>
    );
};
