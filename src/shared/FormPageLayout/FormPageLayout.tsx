import type { ReactNode } from 'react';
import styled from 'styled-components';
import Img from '../../assets/formPageImage.jpg';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    @media(max-width: 985px) {
        justify-content: center
    }
`;

const Image = styled.img`
    flex-grow: 1;
    flex-shrink: 1;
    object-fit: cover;
    height: 100%;
    max-width: calc(100% - 38%);
    
    @media(max-width: 985px) {
        display: none;
    }
`;

const FormContainer = styled.div`
    width: 38%;
    display: grid;
    place-content: center;
`;

export const FormPageLayout = ({ form }: { form: ReactNode }): ReactNode => {
    return (
        <Wrapper>
            <Image
                src={Img}
                alt="Image of the city"
            />
            <FormContainer>{form}</FormContainer>
        </Wrapper>
    );
};
