import { ReactNode, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from '../ui/Link/Link';
import { Header } from './Header/Header';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';

const Main = styled.main`
    height: calc(100% - 80px);
`;

export const Layout = observer(
    ({
        withActions = false,
        withHeader = false,
        page,
    }: {
        withActions?: boolean;
        withHeader?: boolean;
        page: ReactNode;
    }): ReactNode => {
        const { store } = useContext(Context);

        useEffect(() => {
            if (localStorage.getItem('token')) {
                store.checkAuth();
            }
        });

        const actions =
            withActions && !store.isAuth
                ? [
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
                  ]
                : undefined;

        return (
            <>
                {withHeader && <Header actions={actions} />}
                <Main>{page}</Main>
            </>
        );
    }
);
