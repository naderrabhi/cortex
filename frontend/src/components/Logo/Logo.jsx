// src/components/Logo.jsx
import React from 'react';
import logoImage from '../../assets/images/logo.png';
import { LogoContainer, LogoImage, LogoLink } from './logo.styles';

export default function Logo() {
  return (
    <LogoContainer>
      <LogoLink to="/">
        <LogoImage src={logoImage} alt="Logo" />
      </LogoLink>
    </LogoContainer>
  );
}
