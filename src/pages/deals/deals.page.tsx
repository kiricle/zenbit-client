import type { ReactNode } from 'react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../../main';
import { Deal } from '../../models/deal';
import { DealsService } from '../../services/deals-service';
import { DealCard } from './ui/DealCard';

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
    width: 100%;
    padding: 0 5px;

    @media (max-width: 1315px) {
        justify-content: center;
    }
`;

export const DealsPage = (): ReactNode => {
    const { store } = useContext(Context);
    const navigate = useNavigate();
    const [deals, setDeals] = useState<Deal[]>([]);

    if (store.isAuth === false) {
        navigate('/sign-in');
    }

    useEffect(() => {
        getDeals();
    }, []);

    async function getDeals() {
        try {
            const response = await DealsService.getDeals();
            setDeals(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Title>Open Deals</Title>
            <DealsFlex>
                {deals.length &&
                    deals.map(
                        ({
                            id,
                            img,
                            name,
                            daysLeft,
                            price,
                            sold,
                            ticketPrice,
                            yield: yieldPercentage,
                        }) => (
                            <DealCard
                                key={id}
                                img={img}
                                name={name}
                                price={price}
                                daysLeft={daysLeft}
                                ticketPrice={ticketPrice}
                                sold={sold}
                                yieldPercentage={yieldPercentage}
                            />
                        )
                    )}
            </DealsFlex>
        </Container>
    );
};
