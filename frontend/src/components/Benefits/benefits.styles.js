import {styled} from 'styled-components'
import benefitsBg from '../../assets/images/benefits-bg.png'


export const BenefitsSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-image: url(${benefitsBg});
`

export const BenefitsCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 70%;
    margin-top: 5rem;
`
export const BenefitsCardsText = styled.div`
    display: flex;
    width: 70%;
    margin-top: 5rem;
    
`

export const BenefitsCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    background-color: var(--color-green);

    
`
export const BenefitsImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.5rem 2rem;

    box-shadow: -webkit-box-shadow: inset 0px 0px 30px 1px rgba(23,123,217,0.36);
    -moz-box-shadow: inset 0px 0px 30px 1px rgba(23,123,217,0.36);
    box-shadow: inset 0px 0px 30px 1px rgba(23,123,217,0.36);
    border-radius: 15px;

    img {
        width: 400px;
        height: 200px;
    }

`

export const BenefitsWrapper = styled.div`
    margin-top: 1rem;
    padding: 32px 0
`

export const BenefitsText = styled.div`
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 800px){
        gap: 1rem;
    }

    @media (max-width: 450px){
        gap: 0.5rem;
    }
`

export const BenefitsTitle = styled.h6`
    font-size: 48px;
    font-weight: 600;
    margin-top: 5rem;
    background: ${({ background }) => background || 'linear-gradient(to right, white, #177BD9)'};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-align: center;
    width: 100%;

    @media (max-width: 800px) {
        font-size: 32px;
    }

    @media (max-width: 450px) {
        font-size: 24px;
    }
`;

export const BenefitsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
`;