import React from 'react'
import { BitneuronTokenComponent, BitneuronTokenParagraph, BitneuronTokenTitle } from './bitneuronTokenApi.styles'

export default function BitneuronTokenApi({bitneuronToken}) {
  return (
    <BitneuronTokenComponent>
        {bitneuronToken.title && <BitneuronTokenTitle>{bitneuronToken.title}</BitneuronTokenTitle>}
        {bitneuronToken.firstParagraph && <BitneuronTokenParagraph color='var(--color-gray)'>{bitneuronToken.firstParagraph}</BitneuronTokenParagraph>}
        {bitneuronToken.logo && <img src={bitneuronToken.logo} alt=''/>}
        {bitneuronToken.secondParagraph && <BitneuronTokenParagraph color='var(--color-gray)'>{bitneuronToken.secondParagraph}</BitneuronTokenParagraph>}
    </BitneuronTokenComponent>
  )
}
