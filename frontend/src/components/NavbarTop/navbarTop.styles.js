// import styled from 'styled-components';

// export const NavbarTopContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #333;
//   color: white;

//   ${(props) =>
//     props.windowWidth <= 1030 &&
//     `
//       flex-direction: column;
//       align-items: flex-start;
//       padding: 10px;
//     `}
// `;

import styled from 'styled-components';

export const NavbarTopContainer = styled.div`
  display: inherit-flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  color: white;
`;

export const NavbarTopMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: white;
  gap:16px;
`;
