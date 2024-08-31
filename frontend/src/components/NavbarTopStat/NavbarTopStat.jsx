import React from 'react'
import { NavbarTopStatContainer, NavbarTopStatMobileContainer, SpanTopStat } from './navbarTopStat.styles'
import { statsData } from '../../constants/data'

export default function NavbarTopStat({ windowWidth }) {
  return (
    windowWidth <= 1030 ? (
        <NavbarTopStatMobileContainer>
          {statsData.map((stat) => (
            <SpanTopStat key={stat.label}>
              {stat.label}{" "}
              <span style={{color: 'var(--color-purple)'}}>{stat.value}</span>{" "}
              {stat.percent && <span style={{color: 'var(--color-green)'}}>{stat.percent}</span>}
            </SpanTopStat>
          ))}
        </NavbarTopStatMobileContainer>
      ) : (
        <NavbarTopStatContainer>
          {statsData.map((stat) => (
            <SpanTopStat key={stat.label}>
              {stat.label}{" "}
              <span style={{color: 'var(--color-purple)'}}>{stat.value}</span>{" "}
              {stat.percent && <span style={{color: 'var(--color-green)'}}>{stat.percent}</span>}
            </SpanTopStat>
          ))}
        </NavbarTopStatContainer>
      )
  )
}
