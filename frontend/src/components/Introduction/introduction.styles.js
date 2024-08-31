import styled from 'styled-components';
import introBg from '../../assets/images/intro.png'


export const IntroductionContainer = styled.div`
    position: relative;
    margin-top: 10rem;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 65%;


    @media (max-width: 1300px) {
        width: 70%;
        gap: 2.5rem;
    }

    @media (max-width: 800px) {
        width: 80%;
        left: 0%;
        margin: 0 auto;
        gap: 1.5rem;
        min-height: auto;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    @media (max-width: 450px) {
        width: 95%;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

export const IntroductionSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    text-align: center;
    background-image: url(${introBg})
`

export const IntroductionButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
`

export const IntroductionImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
`