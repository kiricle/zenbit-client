import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '../../../ui/Button/Button';
import { FormNote } from '../../../ui/FormNote/FormNote';
import { Input } from '../../../ui/Input/Input';

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
    return (
        <Form>
            <Title>Login</Title>
            <Input
                label="Email"
                type="email"
                placeholder="Email"
            />
            <Input
                label="Password"
                type="password"
                placeholder="Password"
            />
            <RightNote hrefNote='Forgot password?' to='#' />
            <Button>Sign in</Button>
            <CenteredNote
                note="Don't have account?"
                hrefNote="Sign Up"
                to="/sign-up"
            />
        </Form>
    );
};
