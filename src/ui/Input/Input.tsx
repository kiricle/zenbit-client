import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

type InputProps = {
    label: string;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const MyInput = styled.input`
    padding: 14px 20px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 5px;

    font-size: 14px;
    line-height: 22px;
    font-family: Lato, sans-serif;
    color: #172234;
    width: 100%;

    &::placeholder {
        color: #172234;
        opacity: 0.5;
        line-height: 22px;
    }
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: baseline;
`;

export const Input = ({ className, label, ...props }: InputProps) => {
    return (
        <Label>
            {label}:
            <MyInput
                className={className}
                {...props}
            />
        </Label>
    );
};
