import styled from 'styled-components';
import aichangeBg from '../../assets/images/aichange-bg.png'

export const AIChangeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-image: url(${aichangeBg});


  @media(max-width: 800px) {
    min-height: auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media(max-width: 450px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

`;

export const ContainerOwl = styled.div`
  width: 100%;
`;

export const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 3rem;
  padding: 32px 0;
`;
