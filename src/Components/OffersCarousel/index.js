import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/offers.png'
import api from '../../services/api'
import {
  Container,
  CategoryImg,
  ContainerzItems,
  Image,
  Button
} from './styles'

function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer)

      setOffers(onlyOffers)
    }

    loadCategory()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt="logo da home" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(products => (
            <ContainerzItems key={products.id}>
              <Image src={products.url} alt="foto da categoria" />
              <p>{products.name}</p>
              <p>{products.price}</p>
              <Button>Peça agora</Button>
            </ContainerzItems>
          ))}
      </Carousel>
    </Container>
  )
}

export default OffersCarousel
