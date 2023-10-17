import type { ReactNode } from 'react';
import styled from 'styled-components';
import { DealCard } from './ui/DealCard';
import CardImg from '../../assets/card1.jpg';

const Container = styled.div`
    padding-top: 50px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 12px;
    max-width: 1440px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-weight: 700;
    color: #b29f7e;
    font-size: 28px;
    line-height: 34px;
`;

const DealsFlex = styled.section`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    width:100%;
    padding: 0 5px;

    @media (max-width: 1315px) {
        justify-content: center;
    }
`;

export const DealsPage = (): ReactNode => {
    return (
        <Container>
            <Title>Open Deals</Title>
            <DealsFlex>
                <DealCard
                    img={CardImg}
                    name="The Marina Torch"
                    price={6_500_000}
                    daysLeft={150}
                    ticketPrice={60_000}
                    sold={75}
                    yieldPercentage={9.25}
                />
                <DealCard
                    img={CardImg}
                    name="The Marina Torch"
                    price={6_500_000}
                    daysLeft={150}
                    ticketPrice={60_000}
                    sold={75}
                    yieldPercentage={9.25}
                />
                <DealCard
                    img={CardImg}
                    name="The Marina Torch"
                    price={6_500_000}
                    daysLeft={150}
                    ticketPrice={60_000}
                    sold={75}
                    yieldPercentage={9.25}
                />
                <DealCard
                    img={CardImg}
                    name="The Marina Torch"
                    price={6_500_000}
                    daysLeft={150}
                    ticketPrice={60_000}
                    sold={75}
                    yieldPercentage={9.25}
                />
            </DealsFlex>
        </Container>
    );
};
