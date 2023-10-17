import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../pages/home.page';
import { SignUpPage } from '../pages/sign-up/sign-up.page';
import { SignInPage } from '../pages/sign-in/sign-in.page';
import { DealsPage } from '../pages/deals/deals.page';

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
                                withActions={false}
                                page={<SignUpPage />}
                            />
                        }
                    />
                    <Route
                        path="sign-in"
                        element={
                            <Layout
                                withHeader
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

export default App;
