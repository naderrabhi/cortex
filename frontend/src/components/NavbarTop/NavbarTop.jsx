import React from 'react'
import { NavbarTopContainer, NavbarTopMobileContainer } from './navbarTop.styles'
import NavbarTopStat from '../NavbarTopStat/NavbarTopStat'
import SocialLinksList from '../SocialLinksList/SocialLinksList'
import NavbarTopBtn from '../NavbarTopBtn/NavbarTopBtn'

export default function NavbarTop({windowWidth}) {
  return (
    // <NavbarTopContainer windowWidth={windowWidth}>
    //   <NavbarTopStat windowWidth={windowWidth} />
    //   <SocialLinksList />
    //   <NavbarTopBtn windowWidth={windowWidth} />
    // </NavbarTopContainer>

    windowWidth <= 1030 ? (
        <NavbarTopMobileContainer>
          <NavbarTopStat windowWidth={windowWidth} />
          <SocialLinksList />
          <NavbarTopBtn windowWidth={windowWidth} />
        </NavbarTopMobileContainer>
      ) : (
        <NavbarTopContainer>
          <NavbarTopStat windowWidth={windowWidth} />
          <SocialLinksList />
          <NavbarTopBtn windowWidth={windowWidth} />
        </NavbarTopContainer>
      )

  )
}
