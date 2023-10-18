import type { ReactNode } from 'react';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../../../ui/Button/Button';
import { FormNote } from '../../../ui/FormNote/FormNote';
import { Input } from '../../../ui/Input/Input';
import { Context } from '../../../main';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RightNote = styled(FormNote)`
    text-align: right;
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

export const SignInForm = (): ReactNode => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { store } = useContext(Context);


    return (
        <Form>
            <Title>Login</Title>
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
            <RightNote
                hrefNote="Forgot password?"
                to="#"
            />
            <Button
                onClick={async (e) => {
                    e.preventDefault();
                    await store.signIn(email, password);
                    navigate('/deals');
                }}
            >
                Sign in
            </Button>
            <CenteredNote
                note="Don't have account?"
                hrefNote="Sign Up"
                to="/sign-up"
            />
        </Form>
    );
};
