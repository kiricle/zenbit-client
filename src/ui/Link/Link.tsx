import type { ReactNode } from 'react';
import { Link as RouterLink, type To } from 'react-router-dom';
import styled from 'styled-components';

type Appearance = 'primary' | 'outlined-primary' | 'outlined-white';

type LinkProps = {
    children: ReactNode;
    to: To;
    appearance: Appearance;
};

export const Link = ({ appearance, children, to }: LinkProps): ReactNode => {
    const Link = styled(RouterLink)`
        min-width: 160px;
        padding: 11px 0;
        border: 1px solid;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        transition: background-color .3s;
    `;

    const PrimaryLink = styled(Link)`
        color: white;
        background-color: #b29f7e;
        border-color: transparent;  

        &:hover {
            background-color: white;
            color: #b29f7e;
        }
    `;

    const OutlinedPrimaryLink = styled(Link)`
        border-color: #b29f7e;
        color: #b29f7e;

        &:hover {
            background-color: #b29f7e;
            color: white;
        }
    `;

    const OutlinedWhiteLink = styled(Link)`
        border-color: white;
        color: white;

        &:hover {
            color: black;
            background-color: white;
        }
    `;

    const links: Record<Appearance, ReactNode> = {
        primary: <PrimaryLink to={to}>{children}</PrimaryLink>,
        'outlined-primary': (
            <OutlinedPrimaryLink to={to}>{children}</OutlinedPrimaryLink>
        ),
        'outlined-white': (
            <OutlinedWhiteLink to={to}>{children}</OutlinedWhiteLink>
        ),
    };

    return links[appearance];
};
