import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarousel from '../../Components/CategoryCarousel'
import OffersCarousel from '../../Components/OffersCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
