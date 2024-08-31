import React from 'react';
import { Paragraph, Title } from '../../styles/style';
import ImageCarousel from '../ImagesCarousel/ImagesCarousel';
import { AIChangeContainer, ContainerOwl, InnerContainer } from './aiChange.styles';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function AIChange() {
  const { myRef, isVisible } = useScrollAnimation("aichange");
  return (
    <AIChangeContainer
      as={motion.div}
      id='aichange'
      ref={myRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
    >
      <InnerContainer>
        <Title style={{textAlign: 'center'}}>It''s time to change the way you build with AI.</Title>
        <Paragraph color='var(--color-gray)' style={{textAlign: 'center', marginBottom: '5rem'}}>You have access to exclusive features and benefits. Below, you will find a list of these advantages, as well as a comparison between them.</Paragraph>
        <ContainerOwl>
          <ImageCarousel />
        </ContainerOwl>
      </InnerContainer>
    </AIChangeContainer>
  )
}
