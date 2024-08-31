import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 471px; /* Default width */
  height: 556px; /* Default height */
  object-fit: cover;

  @media (max-width: 1300px) {
    width: 371px;
    height: 456px;
  }

  @media (max-width: 800px) {
    width: 271px;
    height: 356px;
  }

  @media (max-width: 450px) {
    width: 156px;
    height: 256px;
  }
`;
