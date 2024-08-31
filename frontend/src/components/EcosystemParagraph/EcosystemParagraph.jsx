import React from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Paragraph, ParagraphTitle, SeperatorLine } from '../../styles/style';
import { EcosystemText } from './ecosystemParagraph.styles';

export default function EcosystemParagraph({ecosystem}) {
    const { myRef, isVisible } = useScrollAnimation();

  return (
    <EcosystemText
      id='ecosystem-text'
      ref={myRef}
      className='ecosystem-text'
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <ParagraphTitle>{ecosystem.title}</ParagraphTitle>
      <SeperatorLine />
      {ecosystem.paragraphs.map((el, index) => (
        <Paragraph className="" key={index}>
          {el.a && (
            <a href={el.a} target="_blank" rel="noopener noreferrer" style={{ textTransform: 'lowercase', display: 'inline', fontWeight: 'normal' }}>
              {el.a.replace('https://', '')}
            </a>
          )}
          {el.p}
        </Paragraph>
      ))}
    </EcosystemText>
  )
}
