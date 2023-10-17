import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Input } from '../../../ui/Input/Input';
import { Button } from '../../../ui/Button/Button';
import { FormNote } from '../../../ui/FormNote/FormNote';

const Form = styled.form`
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CenteredNote = styled(FormNote)`
    text-align: center;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #172234;
`;

export const SignUpForm = (): ReactNode => {
    console.log(Form)

    return (
        <Form>
            <Title>Registration</Title>
            <Input label='Email' type='email' placeholder='Email'/>
            <Input label='Password' type='password' placeholder='Password'/>
            <Button>Sign up</Button>
            <CenteredNote note='Already have an account?' hrefNote='Log in here' to='/sign-in' />
        </Form>
    );
};
