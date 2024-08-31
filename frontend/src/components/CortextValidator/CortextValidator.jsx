import React from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { CortextValidatorDiv, CortextValidatorSection } from './cortextValidator.styles';
import CortextText from '../CortextText/CortextText';
import { cortextValidator } from '../../constants/data';
import { Paragraph, ParagraphTitle } from '../../styles/style';
import valid from '../../assets/images/valid.png'

export default function CortextValidator() {
  const { myRef, isVisible } = useScrollAnimation('cortex-cluster');
  return (
    <CortextValidatorSection
      as={motion.div}
      id='cortex-cluster'
        ref={myRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
    >
        <CortextText cortext={cortextValidator}/>
        <img src={valid} alt="Panel Details" />
    </CortextValidatorSection>
  )
}
