import { Padding, Search, ShoppingBasket } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import {mobile} from "../Responsiveness/Responsive"

const Container = styled.div`
height:60px;
${mobile({backgroundColor: "red"})};
`
const Wrapper = styled.div `
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
border:1px gray solid;
${mobile({Padding: "10px 0"})};
`
const Left = styled.div`
flex:1;
display:flex;
align-items :center;
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display: "none"})};
`
const SearchContainer =styled.div`
border: 1px solid lightgray;
display: flex; 
align-items:center;
padding: 5px;
margin-left: 25px;
`
const Input = styled.input`
border:none;
${mobile({width: "50px"})};
`

const Center = styled.div`
flex:1;
text-align:center;
`

const Logo = styled.h1`

`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2, justifyContent:"center"})};
`

const MenuItem = styled.div`
font-size:24px;
cursor:pointer;
margin-left:25px;
${mobile({
  fontSize: "12px",
  marginLeft:"10px"})};
`

const Navbar = () => {
  return (
   <Container >
    <Wrapper>
       <Left>
        <Language>EN</Language>
        <SearchContainer>
           <Input />
            <Search style={{color: "gray", fontSize: 20}} />
        </SearchContainer>
       </Left>
       <Center>
        <Logo>Logo</Logo>
       </Center>

       <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
          <ShoppingBasket color="action" />
          </Badge>
        </MenuItem>
       </Right>
       
    </Wrapper>
   
   </Container>
  )
}

export default Navbar
