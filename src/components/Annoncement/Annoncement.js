import React from 'react';
import Styled from "styled-components";

const Container =Styled.div`
height:30px;
background: teal;
color:white;
display:flex;
align-items: center;
justify-content:center;
font-size:14px;
font-weght:500;
`


const Annoncement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Annoncement
