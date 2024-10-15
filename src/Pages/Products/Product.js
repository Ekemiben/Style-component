import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Annoncement from '../../components/Annoncement/Annoncement';
import NewLetter from '../../components/NewsLetter/NewLetter';
import styled from "styled-components";
import Footer from '../../components/Footer/Footer';
import { Add, AddCircleOutlined, DeleteOutlined, Remove } from '@mui/icons-material';


const Container =styled.div`

`
const Wrapper = styled.div`
padding:50px;
display:flex;`

const ImageContainer =styled.div`
flex:1;
`
const Image =styled.img`
width:100%;
height:90vh;
object-fit:cover;`

const InfoContainer = styled.h1`
flex:1;
padding: 0 50px;`

const Title = styled.h1`
font-weight:200;`

const Description = styled.div`
margin:20px 0`

const Price = styled.span`
font-weight:200;
font-size:40px;`

const FilterContainer = styled.div`
width:50%;
margin:20px;
display:flex;
justify-content:space-between;`

const Filter = styled.div`
display:flex;
align-items:center;`

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color};
margin:0 5px;`

const FilterSize = styled.select`
margin-left:10px;
`

const FilterSizeOption = styled.option``

const AddContaner =styled.div`
display:flex;
width:80%;
align-items:center;
justify-content:space-between;
`
const DeleteContainer = styled.div`
color:red;
margin-right:20px;`
const AddContainer = styled.div`
color:green;
margin-left:20px;`

const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
// border:2px solid red;
width:70%;


&:hover ${DeleteContainer}{
    cursor:pointer;
}
&:hover ${AddContainer}{
    cursor:pointer;
}
`
const Amount = styled.span`
width:30px;
height:30px;
font-size:18px;
border: 1px solid teal;
align-items:center;
justify-content:center;
margin: 0 30px;
`
const Button = styled.button`
padding:10px;
border:2px solid teal;
background:white;
cursor:pointer;
font-weight:500;

&:hover{

}`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Annoncement />
        <Wrapper>
            <ImageContainer>
                <Image src = "" />
            </ImageContainer>
            <InfoContainer>
                <Title>Product Title</Title>
                <Description>
                    Randome text messages could be found here because it is like a dummy messages to cover up this very page. Note this will be replaced with the real messages when the owner of the website wants
                </Description>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color ="black" />
                        <FilterColor color ="darkblue" />
                        <FilterColor color ="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle> Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>

                       
                        
                    </Filter>
                </FilterContainer>
                <AddContaner>
                    <AmountContainer>
                        <DeleteContainer>
                            <DeleteOutlined />
                        </DeleteContainer>
                        
                        <Amount>1</Amount>
                       <AddContainer>
                            <AddCircleOutlined />
                       </AddContainer>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContaner>
                
            </InfoContainer>
        </Wrapper>
        <NewLetter />
        <Footer />
    </Container>
  )
}

export default Product
