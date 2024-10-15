import React from 'react';
import { popularProducts } from '../data/data';
import styled from 'styled-components';
import ProductsItem from './ProductsItem';


const Container = styled.div`
display:flex; 
padding:20px;
flex-wrap:wrap;
align-items:center;

`

const Products = () => {
  return (
   <Container>
    {popularProducts.map((popularData)=>(
        <ProductsItem productData = {popularData} key={popularData.id} />
    ))}
   </Container>
  )
}

export default Products
