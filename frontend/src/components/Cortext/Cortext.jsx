import React from 'react'
import CortextCluster from '../CortextCluster/CortextCluster'
import CortextValidator from '../CortextValidator/CortextValidator'
import { CortextSection } from './cortext.styles'

export default function Cortext() {
  return (
    <CortextSection>
        <CortextValidator />
        <CortextCluster />
    </CortextSection>
  )
}
