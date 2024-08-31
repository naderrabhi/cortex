// src/components/logo.styles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoContainer = styled.div`
  flex: 0 0 16.66%;
  height: auto;
  opacity: 1;
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export const LogoImage = styled.img`
  display: block;
  width: 150px;
  height: auto;
`;
