import React from 'react'
import { MenuButton } from './navbarButton.styles'

export default function NavbarButton({icon, toggleSidebar}) {
  return (
    <MenuButton onClick={toggleSidebar}>
      {icon}
    </MenuButton> 
)
}
