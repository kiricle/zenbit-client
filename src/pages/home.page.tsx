import { ReactNode } from 'react';
import styled from 'styled-components';
import Back from '../assets/back.png';
import { Link } from '../ui/Link/Link';

const Box = styled.div`
    background-image: url(${Back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;

    display: grid;
    place-content: center;

    &::before {
        content: '';
        background-color: #172234;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        pointer-events: none;
        z-index: 0;
    }
`;

const Heading = styled.h1`
    color: white;
    font-size: 64px;
    line-height: 80px;
    font-weight: 700;
`;

const SubHeading = styled.p`
    color: white;
    font-size: 24px;
    line-height: 32px;
    width: 75%;
    font-family: Lato, sans-serif;
`;

const HeadingContainer = styled.section`
    max-width: 1085px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
`;

export const HomePage = (): ReactNode => {
    return (
        <Box>
            <HeadingContainer>
                <Heading>The chemical negatively charged</Heading>
                <SubHeading>
                    Numerous calculations predict, and experiments confirm, that
                    the force field reflects the beam, while the mass defect is
                    not formed. The chemical compound is negatively charged.
                    While the mass defect is
                </SubHeading>
                <Link
                    appearance="outlined-white"
                    to="/sign-up"
                >
                    Get Started
                </Link>
            </HeadingContainer>
        </Box>
    );
};
