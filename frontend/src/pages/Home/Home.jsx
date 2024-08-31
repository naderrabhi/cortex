import React from 'react'
import { HomeContainer } from './home.styles'
import Introduction from '../../components/Introduction/Introduction'
import CortextCluster from '../../components/CortextCluster/CortextCluster'
import BitneuronToken from '../../components/BitneuronToken/BitneuronToken'
import Benefits from '../../components/Benefits/Benefits'
import Stake from '../../components/Stake/Stake'
import AIChange from '../../components/AIChange/AIChange'
import Cortext from '../../components/Cortext/Cortext'

export default function Home() {
  console.log("first")
  return (
    <HomeContainer>
        <Introduction />
        <Cortext />
        <BitneuronToken />
        <AIChange />
        <Benefits />
        <Stake />
    </HomeContainer>
  )
}
