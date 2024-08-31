import styled from "styled-components";
import cortexaiBg from '../../assets/images/cortexai-bg.png'

export const BitneuronTokenComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5em;
    padding: 1rem 1rem;
    background-color: var(--color-green);
    background-image: url(${cortexaiBg});
    box-shadow: -webkit-box-shadow: inset 0px 0px 30px 1px rgba(23,123,217,0.36);
    -moz-box-shadow: inset 0px 0px 30px 1px rgba(23,123,217,0.36);
    box-shadow: inset 0px 0px 30px 1px rgba(23,123,217,0.36);
    border-radius: 15px;


    img {
        margin: 5rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const BitneuronTokenParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.color || 'var(--color-gray)'};

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 450px) {
    font-size: 13px;
  }

`;

export const BitneuronTokenTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  background: ${({ background }) => background || 'linear-gradient(to right, white, #177BD9)'};
  -webkit-text-fill-color: transparent; 
            -webkit-background-clip: text;

  @media (max-width: 800px) {
    font-size: 32px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;