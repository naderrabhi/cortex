import styled from 'styled-components';

export const NavbarTopButtons = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
  z-index: 9999;

  button {
    text-decoration: none;
    margin: ${props => props.isMobile ? '10px 0' : '0 10px'};
  }

  @media (max-width: 1031px) {
    width: 100%;
  }

`;

export const NavbarTopButtonLink = styled.a`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  background: ${({ background }) => background || 'linear-gradient(to right, #4d57df, #8149df)'};
  color: ${({ color }) => color || 'var(--color-white)'};
  font-size: 13px;


  &:hover {
    background-color: #f0f0f0;
  }
`;