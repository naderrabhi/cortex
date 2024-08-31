import React from 'react'
import { NavbarBottomContainer, NavbarPagesLinks, NavbarPagesLinksMobile } from './navbarBottom.styles'
import PagesLinksList from '../PagesLinksList/PagesLinksList'


export default function NavbarBottom({windowWidth, toggleSidebar}) {
  return (
    <NavbarBottomContainer windowWidth={windowWidth}>
        {windowWidth <= 1030 ? 
        <NavbarPagesLinksMobile>
            <PagesLinksList toggleSidebar={toggleSidebar}/>
        </NavbarPagesLinksMobile> : 
        <NavbarPagesLinks>
            <PagesLinksList toggleSidebar={toggleSidebar}/>
        </NavbarPagesLinks>}
    </NavbarBottomContainer>
  )
}
