import styled from 'styled-components';

export const NavbarBottomContainer = styled.nav`
  ${(props) =>
    props.windowWidth <= 1030
      ? `
    width: 100%;
    background-color: #333;
  `
      : `
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
  `}
`;

export const NavbarPagesLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;

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
`;

export const NavbarPagesLinksMobile = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin-top: 24px;

  li {
    margin: 10px 0;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  }
`;
