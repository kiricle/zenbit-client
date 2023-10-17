import { ReactNode } from 'react';
import styled from 'styled-components';

const HeaderCon = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    height: 80px;
    background-color: #172234;
`;

const HeaderContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;

export const Header = ({ actions }: { actions?: ReactNode[] }) => {
    return (
        <HeaderCon>
            {actions && <HeaderContainer>{actions}</HeaderContainer>}
        </HeaderCon>
    );
};
