import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../pages/home.page';

function App(): ReactNode {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={<HomePage />}
                    />
                    <Route
                        path="sign-up"
                        element={<h1>Sign-up</h1>}
                    />
                    <Route
                        path="sign-in"
                        element={<h1>Sign-in</h1>}
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
