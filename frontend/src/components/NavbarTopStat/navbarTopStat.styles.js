import styled from 'styled-components';

export const NavbarTopStatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;

  .span-top-stat {
    margin: 0 10px;
  }

  .span-top-stat span {
    font-weight: bold;
  }
`;

export const NavbarTopStatMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  color: white;
  gap:16px;


  .span-top-stat {
    margin: 5px 0;
  }

  .span-top-stat span {
    font-weight: bold;
  }
`;

export const SpanTopStat = styled.span`
  margin: 0 10px;

  span {
    font-weight: bold;
  }
`;
