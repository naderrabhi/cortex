import React from 'react'
import { CortextClusterSection } from './cortextCluster.styles'
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { cortextCluster } from '../../constants/data';
import CortextText from '../CortextText/CortextText';

export default function CortextCluster() {
  const { myRef, isVisible } = useScrollAnimation('cortex-cluster');
  return (
    <CortextClusterSection
      as={motion.div}
      id='cortex-cluster'
        ref={myRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
    >
        <CortextText cortext={cortextCluster}/>
    </CortextClusterSection>
  )
}
