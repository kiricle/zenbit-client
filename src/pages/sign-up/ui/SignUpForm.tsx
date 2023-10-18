import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Input } from '../../../ui/Input/Input';
import { Button } from '../../../ui/Button/Button';
import { FormNote } from '../../../ui/FormNote/FormNote';
import { useState, useContext } from 'react';
import { Context } from '../../../main';

const Form = styled.form`
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CenteredNote = styled(FormNote)`
    text-align: center;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #172234;
`;

export const SignUpForm = (): ReactNode => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { store } = useContext(Context);

    return (
        <Form>
            <Title>Registration</Title>
            <Input
                label="Email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <Input
                label="Password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    store.signUp(email, password);
                }}
            >
                Sign up
            </Button>
            <CenteredNote
                note="Already have an account?"
                hrefNote="Log in here"
                to="/sign-in"
            />
        </Form>
    );
};
