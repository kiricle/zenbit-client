/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../pages/home.page';
import { SignUpPage } from '../pages/sign-up/sign-up.page';
import { SignInPage } from '../pages/sign-in/sign-in.page';
import { DealsPage } from '../pages/deals/deals.page';
import { observer } from 'mobx-react-lite';

function App(): ReactNode {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <Layout
                                page={<HomePage />}
                                withActions
                                withHeader
                            />
                        }
                    />
                    <Route
                        path="sign-up"
                        element={
                            <Layout
                                withHeader
                                page={<SignUpPage />}
                            />
                        }
                    />
                    <Route
                        path="sign-in"
                        element={
                            <Layout
                                withHeader
                                withActions
                                page={<SignInPage />}
                            />
                        }
                    />
                    <Route
                        path="deals"
                        element={<DealsPage />}
                    />
                    <Route
                        path="*"
                        element={<h1>Not Found!</h1>}
                    ></Route>
                </Route>
            </Routes>
        </>
    );
}

export default observer(App);
