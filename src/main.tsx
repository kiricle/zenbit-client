/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
:root {
    font-family: 'Merriweather', serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

#root {
    height: 100%;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    height: 100%;
}

body{
    height: 100%;
    background-color: #F2F2F2;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Global />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
