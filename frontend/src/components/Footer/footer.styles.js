import styled from "styled-components";
import footerBg from '../../assets/images/footer-bg.png'

export const FooterSection = styled.div`
    background-image: url(${footerBg});
    padding: 2rem 0;

    p {
        display: inline-block;
    }
  
    a {
        display: inline-block;
    }

    @media (max-width: 800px) {
    padding: 1rem 0;
        gap: 1rem;
    }

    @media (max-width: 450px) {
        padding: 0.5rem 0;
        gap: 0.5rem;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const FooterContact = styled.div`
    display: flex;
    justify-content: space-around;

`
export const FooterLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
`
export const FooterForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    input {
        background: transparent;
        border: 1px solid #177BD9;
        width: 200px;
        height: 35px;
        border-radius: 8px;
        padding: 0.5rem;
    }
`

export const FooterLinksPages = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    color: white;
    width: 50%;
    margin-left: 8%;

    li {
        margin: 0 10px;

        a {
        color: white;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
        }
    }
`
export const FooterSeparator = styled.img`

`
export const FooterIconsSecurity = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    color: white;
    width: 50%;
    

    li {
        margin: 0 10px;

        a {
        color: white;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
        }
    }
`

export const FooterIcons = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 11rem;
`
export const FooterIconsList = styled.div`

`