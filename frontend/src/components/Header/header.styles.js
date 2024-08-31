import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #030d17;
  box-shadow: 1px 1px 5px white;
  padding: 15px 35px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  opacity: 1;
  height: 8vh;

  

  @media (max-width: 1031px) {
    height: 6vh;
    justify-content: space-between;
    align-items: center;
  }
`;

