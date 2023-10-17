/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ReactNode } from 'react';
import styled from 'styled-components';

const Article = styled.article<{ img: string }>`
    background-image: url(${(props) => props.img});
    max-width: 630px;
    // width: 100%;
    height: 400px;
`;

const Content = styled.div`
    margin-top: 290px;
    height: 83px;
    padding: 0 14px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 60px;
    row-gap: 5px;

    color: white;
`;

const Name = styled.h2`
    grid-column: span 3;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
`

const GridItem = styled.p`
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`

export const DealCard = ({
    img,
    name,
    price,
    ticketPrice,
    daysLeft,
    yieldPercentage,
    sold,
}: {
    img: string;
    name: string;
    price: number;
    ticketPrice: number;
    daysLeft: number;
    yieldPercentage: number;
    sold: number;
}): ReactNode => {
    return (
        <Article img={img}>
            <Content>
                <Name>{name}</Name>
                <GridItem>{price} Dhs</GridItem>
                <GridItem>Yield {yieldPercentage}%</GridItem>
                <GridItem>Sold {sold}%</GridItem>
                <GridItem>Ticket {ticketPrice} Dhs</GridItem>
                <GridItem>Days left {daysLeft}</GridItem>
            </Content>
        </Article>
    );
};
