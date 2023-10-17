import type { ReactNode } from 'react';
import { FormPageLayout } from '../../shared/FormPageLayout/FormPageLayout';
import { SignUpForm } from './ui/SignUpForm';

export const SignUpPage = (): ReactNode => {
    return <FormPageLayout form={<SignUpForm />} />
};
