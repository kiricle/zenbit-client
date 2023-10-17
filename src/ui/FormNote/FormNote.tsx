import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Note = styled.p`
    font-family: Lato, sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: #172234;
    font-weight: 700;
`;

const NoteLink = styled(Link)`
    color: #B29F7E;
`

export const FormNote = ({
    hrefNote,
    note,
    to,
    className
}: {
    note?: string;
    hrefNote: string;
    to: string;
    className?: string;
}): ReactNode => {
    return <Note className={className}>{note && note} <NoteLink to={to}>{hrefNote}</NoteLink></Note>;
};
