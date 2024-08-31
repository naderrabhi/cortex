import React from 'react'
import { NavbarTopButtons } from './navbarTopBtn.styles'
import { statButtonData } from '../../constants/data'
import { Button } from '../../styles/style'

export default function NavbarTopBtn({windowWidth}) {
  return (
    <NavbarTopButtons isMobile={windowWidth <= 1030}>
    {statButtonData.map((button) => (
      <Button background={button.id === 2 && button.background} color={button.id === 2 && button.color} key={button.id} href={button.href}>
        {button.text}
      </Button>
    ))}
  </NavbarTopButtons>
  )
}
