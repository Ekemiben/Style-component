import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Annoncement from '../../components/Annoncement/Annoncement'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Category/Categories'
import Products from '../../components/Products/Products'
import NewLetter from '../../components/NewsLetter/NewLetter'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Annoncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewLetter />
      <Footer />
    </div>
  )
}

export default Home
