import styled from 'styled-components'
import Annoncement from '../Annoncement/Annoncement'
import Footer from '../Footer/Footer'
import { Add, RemoveCircleOutlineOutlined } from '@mui/icons-material'

const Container = styled.div``
const Wrapper =styled.div`
padding:20px;

`
const Title = styled.h1`
font-weight:300
text-align:center;
justify-content:center;
display:flex;
margin:auto;`

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between
`


const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props => props.type ==="filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props =>props.type === "filled" && "white"};

`

const TopTexts = styled.div``

const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin: 0 10px;`

const Button = styled.div`
display:flex;
justify-content:space-between;`

const Info =styled.div`
flex:3;`

const Product = styled.div``
const ProductDetails = styled.div`
display:flex;
flex:2;
`

const Image = styled.img`
width:300px;`

const Details = styled.span`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-between;`

const ProductName = styled.span``

const ProductColor = styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color: ${(props) => props.color}`

const ProductId = styled.span``
const ProductSize = styled.span``

const PriceDetails = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-item:center;
justify-content:center;
`

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin:20px;`
const ProductAmount = styled.div`
font-size: 24px;
margin:5px;`
const ProductPrice = styled.div`
font-size: 30px;
font-weight:200;`

const Hr = styled.hr `
// background:none;
height:4px;`

const Summary = styled.div`
border: 0.5px solid lightgray;
border-radius:10px;
flex:1;
padding:28px;
height:50vh;
`

const SummaryTitle =styled.h1`
font-weight:200;`

const SummaryItem =styled.div`
margin:30px 0;
display:flex;
justify-content:space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "25px"};`

const SummaryItemText =styled.span``
const SummaryItemPrice =styled.span``

const SummaryButton =styled.button` 
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
cursor:pointer;`

const Cart = () => {
  return (
    <Container>
    <Annoncement />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(2)</TopText>
            </TopTexts>
            <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Button>
            <Info>
                <Product>
                <ProductDetails >
                    <Image src='' />
                    <Details>
                        <ProductName><b>Product:</b>Jessie Thunder Shoes</ProductName>
                        <ProductId><b>ID:</b>Jessie Thunder Shoes</ProductId>
                        <ProductColor color = "black" />
                        <ProductSize><b>Size:</b>Sizes</ProductSize>
                    </Details>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <RemoveCircleOutlineOutlined />
                            
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetails>
                </ProductDetails>
                <Hr/>
                <ProductDetails >
                    <Image src='' />
                    <Details>
                        <ProductName><b>Product:</b>Jessie Thunder Shoes</ProductName>
                        <ProductId><b>ID:</b>Jessie Thunder Shoes</ProductId>
                        <ProductColor color = "gray" />
                        <ProductSize><b>Size:</b>M</ProductSize>
                    </Details>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <RemoveCircleOutlineOutlined />
                            
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetails>
                </ProductDetails>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText type = "total">Total</SummaryItemText>
                    <SummaryItemPrice>$150</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton >Checkout Now</SummaryButton>
            </Summary>
           

            </Button>
        </Wrapper>
    <Footer />

    </Container>
  )
}

export default Cart
