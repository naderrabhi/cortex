import React from 'react'
import { SocialLinkAnchor, SocialLinkItem, SocialLinkList } from './socialLinksList.styles'
import { facebookIcon, linkedinIcon, twitterIcon } from '../../constants/icons';

export default function SocialLinksList() {
    const socialLinks = [twitterIcon, linkedinIcon, facebookIcon];
  return (
    <SocialLinkList>
      {socialLinks.map((link) => (
        <SocialLinkItem key={link.alt}>
          <SocialLinkAnchor href={link.path} aria-label={link.alt}>
            {link.icon}
          </SocialLinkAnchor>
        </SocialLinkItem>
      ))}
    </SocialLinkList>
  )
}
