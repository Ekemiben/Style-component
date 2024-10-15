import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import { styled } from 'styled-components';


const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.9s ease;
`
const Image = styled.img`
height:45%;
z-index:2;
`

const Container = styled.div`
flex:1;
margin:5px;
height:350px;
min-width:280px;
display:flex;
align-items:center;
justify-content:center;
background:#f5fbfd;
position:relative;

&:hover ${Info}{
    opacity:1;
}
&:hover ${Image}{
    height:70%;
    width: 50%;
    transition:all 0.9s ease;
    transform:scale(1.1);
    
}
`
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background:#fff;
position:absolute;
`



const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background:#fff;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
&:hover{
    background:#e9f5f5f5;
    transform:scale(1.1);
    cursor:pointer;
}
`

const ProductsItem = ({productData}) => {
  return (
    <Container>
        <Circle />
        <Image src ={productData.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined /> 
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductsItem
