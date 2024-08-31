import React from 'react'
import { ecosystemData } from '../../constants/data'
import { ComponentTitle } from '../../styles/style'
import EcosystemParagraph from '../../components/EcosystemParagraph/EcosystemParagraph'
import { EcosystemContainer, EcosystemDataContainer, EcosystemIntro, EcosystemTitle } from './ecosystem.styles'

export default function Ecosystem() {
  return (
    <EcosystemContainer>
        <EcosystemIntro>
            <EcosystemTitle
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                type: "tween",
                duration: 0.5,
                }}
            >
                <center><h1>Cortex Ecosystem</h1></center>
            </EcosystemTitle>
        </EcosystemIntro>
    

      <ComponentTitle>ECOSYSTEM</ComponentTitle>
      <EcosystemDataContainer>
        {
          ecosystemData.map(ecosystem => <EcosystemParagraph key={ecosystem.id} ecosystem={ecosystem}  />)
        }
      </EcosystemDataContainer>
    </EcosystemContainer>
  )
}
