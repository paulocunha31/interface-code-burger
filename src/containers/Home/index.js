import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarousel from '../../Components/CategoryCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home
