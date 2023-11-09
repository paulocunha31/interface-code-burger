import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg } from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')
      console.log(data)
      setCategories(data)
    }

    loadCategory()
  }, [])
  return (
    <Container>
      <CategoryImg src={Category} alt="logo da home" />

      <Carousel itemsToShow={1}>
        {categories &&
          categories.map(category => (
            <div key={category.id}>
              <img src={category.url} alt="foto da categoria" />
              <button>{category.name}</button>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel
