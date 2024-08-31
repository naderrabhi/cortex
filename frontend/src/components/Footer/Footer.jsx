import React from 'react'
import { FooterContainer, FooterIcons, FooterLinksPages, FooterContact, FooterSection, InnerFooterContainer, FooterLogo, FooterForm, FooterIconsSecurity, FooterIconsList, FooterSeparator } from './footer.styles'
import { Button, Paragraph } from '../../styles/style'
import Logo from '../Logo/Logo'
import separator from '../../assets/images/separator.png'
import SocialLinksList from '../SocialLinksList/SocialLinksList'

export default function Footer() {
  return (
    <FooterSection>
      <FooterContainer>

        <FooterContact>
          <FooterLogo>
            <Logo />
            <Paragraph>This product was created to run GPU services on the Bittensor network.</Paragraph>
          </FooterLogo>
          <FooterForm>
            <input type="text" placeholder='Enter your email'/>
            <Button href="">
              Subscribe
            </Button>
          </FooterForm> 
        </FooterContact>

        <FooterLinksPages>
          <li>Home</li>
          <li>Products</li>
          <li>Serverless</li>
          <li>Pricing</li>
          <li>Endpoints</li>
          <li>Docs</li>
        </FooterLinksPages>

        <FooterSeparator src={separator} alt=''/>

        <FooterIcons>
          <FooterIconsSecurity>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </FooterIconsSecurity>
          <SocialLinksList />
        </FooterIcons>

      </FooterContainer>
    </FooterSection>
  )
}
