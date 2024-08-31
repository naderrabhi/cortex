import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faDiscord, faTelegram, faGitter, faMixer, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const chevronUpIcon = {
  icon: <FiChevronUp />,
  alt: 'Chevron Up',
  path: '',  // Add a URL if needed
};

const chevronDownIcon = {
  icon: <FiChevronDown />,
  alt: 'Chevron Down',
  path: '',  // Add a URL if needed
};

const facebookIcon = {
  icon: <FontAwesomeIcon icon={faFacebook} />,
  alt: 'Facebook',
  path: 'www.facebook.com',
};

const twitterIcon = {
  icon: <FontAwesomeIcon icon={faXTwitter} />,
  alt: 'Twitter',
  path: 'www.twitter.com',
};

const instagramIcon = {
  icon: <FontAwesomeIcon icon={faInstagram} />,
  alt: 'Instagram',
  path: 'www.instagram.com',
};

const discordIcon = {
    icon: <FontAwesomeIcon icon={faDiscord} />,
    alt: 'Discord',
    path: 'https://discord.com',
  };
  
const telegramIcon = {
  icon: <FontAwesomeIcon icon={faTelegram} />,
  alt: 'Telegram',
  path: 'https://telegram.org',
};
  
const linkedinIcon = {
  icon: <FontAwesomeIcon icon={faLinkedin} />,
  alt: 'Linkedin',
  path: 'https://telegram.org',
};
  
const openNavIcon = {
  icon: <FontAwesomeIcon icon={faGitter} />,
  alt: '',
  path: '',
};
  
const closeNavIcon = {
  icon: <FontAwesomeIcon icon={faMixer} />,
  alt: '',
  path: '',
};

export { linkedinIcon, facebookIcon, twitterIcon, instagramIcon, discordIcon, telegramIcon, openNavIcon, closeNavIcon, chevronUpIcon, chevronDownIcon };