import React from 'react'
import { pagesLinks } from '../../constants/data'
import { NavLink } from 'react-router-dom'

export default function PagesLinksList({toggleSidebar}) {
  return (
    pagesLinks.map((link) => (
        <li key={link.text}>
            <NavLink onClick={toggleSidebar} to={link.path}>
            {link.text}
            </NavLink>
        </li>
    ))
  )
}
