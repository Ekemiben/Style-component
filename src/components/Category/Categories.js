import React from 'react'
import { styled } from 'styled-components';
import {categoryData} from '../data/data'
import CategoryItems from './CategoryItems';
import { mobile } from '../Responsiveness/Responsive';



const Container = styled.div`
display:flex;
padding:20px;
${mobile({padding:"0", flexDirection:"column"})};
`


const Categories = () => {
  return (
    <Container>
      {categoryData.map((catData)=>(
        <CategoryItems cat = {catData} key={catData.id} />
      ))}
    </Container>
  )
}

export default Categories
