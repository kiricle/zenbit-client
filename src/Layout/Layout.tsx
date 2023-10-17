import { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from '../ui/Link/Link';
import { Header } from './Header/Header';

const Main = styled.main`
    height: calc(100% - 80px);
`;

export const Layout = ({
    withActions = false,
    withHeader = false,
    page
}: {
    withActions?: boolean;
    withHeader?: boolean;
    page: ReactNode
}): ReactNode => {
    const actions = withActions ? [
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
    ] : undefined;

    return (
        <>
            {withHeader && <Header actions={actions} />}

            <Main>{page}</Main>
        </>
    );
};
