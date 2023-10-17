import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const MyButton = styled.button`
    background-color: #b29f7e;
    padding: 11px;
    border-radius: 5px;
    border: none;

    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px

    cursor: pointer;
`;

export const Button = ({
    className,
    children,
    ...props
}: ButtonProps): ReactNode => {
    return (
        <MyButton
            className={className}
            {...props}
        >
            {children}
        </MyButton>
    );
};
