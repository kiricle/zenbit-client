import type { ReactNode } from 'react';
import { FormPageLayout } from '../../shared/FormPageLayout/FormPageLayout';
import { SignInForm } from './ui/SignInForm';

export const SignInPage = (): ReactNode => {
    return <FormPageLayout form={<SignInForm />} />
};
