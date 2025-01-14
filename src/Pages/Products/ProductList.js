import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import  Announcement  from '../../components/Annoncement/Annoncement';
import styled from 'styled-components';
import Products from '../../components/Products/Products';
import NewLetter from '../../components/NewsLetter/NewLetter';
import Footer from '../../components/Footer/Footer';

const Container = styled.div``

const Title = styled.h1`
margin:20px;`

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;`

const Filter =styled.div`
margin:20px;`

const FilterText =styled.span`
font-size:20px;
font-weight:500;
margin-right:20px;
`
const Select = styled.select`
width:20vw;
margin-right:20px;`

const Option =styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter><FilterText>Filter Products:</FilterText>
            <Select>
              <Option disable selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disable selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              
            </Select>
          </Filter>
          <Filter><FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <NewLetter />
        <Footer />
    </Container>
  )
}

export default ProductList
