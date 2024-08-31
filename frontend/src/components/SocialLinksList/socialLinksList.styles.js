import styled from 'styled-components';

export const SocialLinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  list-style: none;
  color: white;
`;

export const SocialLinkItem = styled.li`
  margin: 0 10px;
`;

export const SocialLinkAnchor = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #1da1f2; /* Example hover color */
  }
`;
