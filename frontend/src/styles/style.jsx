import styled from 'styled-components';

export const SectionContainer = styled.div`
  position: relative;
  margin-top: 5rem;
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

`;

export const ComponentTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: var(--color-blue);
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (max-width: 800px) {
    font-size: 18px;
    margin-bottom: 16px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
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

export const CortexTitle = styled.h1`
  font-size: 30px;
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

export const ParagraphTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.color || 'var(--color-white)'};

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
  
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: 300;
  color: ${(props) => props.color || 'var(--color-gray)'};

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 450px) {
    font-size: 13px;
  }

`;
export const CortexParagraph = styled.p`
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

export const SeperatorLine = styled.div`
  width: 10rem;
  height: 0.2rem;
  background: ${(props) => props.background || 'var(--color-white)'}
`;


export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  background: ${({ background }) => background || 'linear-gradient(to right, #0F5391, #177BD9)'};
  color: ${({ color }) => color || 'var(--color-white)'};
  font-size: 14px;
  cursor: pointer;


  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ButtonBorder = styled.button`
  padding: 0.8rem 4rem;
  border: 2px solid #177BD9;
  border-radius: 5px;
  transition: background-color 0.3s;
  background: ${({ background }) => background || 'linear-gradient(to right, #0F5391, #177BD9)'};
  color: ${({ color }) => color || 'var(--color-white)'};
  font-size: 14px;
  cursor: pointer;


  &:hover {
    background-color: #f0f0f0;
  }
`;
