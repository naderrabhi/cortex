import React from 'react'
import { ButtonBorder, CortexParagraph, CortexTitle, Paragraph, Title } from '../../styles/style'
import { CortextTextComponent } from './cortextText.styles'

export default function CortextText({cortext}) {
    console.log(cortext)
  return (
    <CortextTextComponent>
        {cortext.title && <CortexTitle>{cortext.title}</CortexTitle>}
        {cortext.paragraph && <CortexParagraph color='var(--color-gray)'>{cortext.paragraph}</CortexParagraph>}
        {cortext.buttonText && 
            <ButtonBorder background={cortext.buttonColor} href="">
                {cortext.buttonText}
            </ButtonBorder>
        }
    </CortextTextComponent>
  )
}
