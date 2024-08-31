// import styled from 'styled-components';

// export const NavigationContainer = styled.nav`
//   display: flex;
//   flex-direction: column;
// `;

// export const NavigationMobileContainer = styled.nav`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   top: 0;
//   height: 100vh;
//   min-width: 180px;
//   background-color: #333333;
//   color: white;
//   padding: 20px;
//   transition: right 0.3s ease;
//   right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
// `;

// export const NavbarButtonContainer = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   z-index: 2000;
//   width: 50px;
//   height: 50px;
// `;


// import styled from 'styled-components';

// export const NavigationContainer = styled.nav`
//   display: flex;
//   flex-direction: column;
// `;

// export const NavigationMobileContainer = styled.nav`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   top: 0;
//   height: 100vh;
//   min-width: 180px;
//   background-color: #333333;
//   color: white;
//   padding: 20px;
//   transition: right 0.3s ease;
//   right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
// `;

// export const NavbarButtonContainer = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   z-index: 1000;
//   background-color: yellow; /* Added for debugging */
//   width: 50px;
//   height: 50px;
// `;


import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  
`;

export const NavigationMobileContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  top: 0;
  height: 100vh;
  min-width: 180px;
  background-color: #333333;
  color: white;
  padding: 20px;
  transition: right 0.3s ease;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  overflow: hidden;
`;

export const NavbarButtonContainer = styled.div`
  z-index: 1000;
  overflow: hidden;
  display: flex;

  button {
    justify-content: flex-end;
  }

  svg {
    font-size: 16px;
      color: var(--color-gray);
  }
`;
