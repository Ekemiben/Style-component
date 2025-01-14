import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
`
const Description = styled.div`
font-size:24px;
font-weight:500px;
margin-bottom:10px;
`

const InputContainer = styled.div`
width:50%;
height:40px;
background:white;
display:flex;
justify-content:space-between
border:1px lighgray solid`

const Input =styled.input`
border:none;
flex:8;
padding-left:20px;
`
const Button =styled.button`
flex:1;
cursor:pointer;
border:none;
color:white;
background:#f3b5f3;
`

const NewLetter = () => {
  return (
    <Container>
        <Title>News Letter</Title>
        <Description>Get your timely updates from your favourite ProductionQuantityLimitsSharp.</Description>
        <InputContainer>
        <Input placeholder='Your emaill'/>
        <Button >
          <Send />
        </Button>
        </InputContainer>
    </Container>
  )
}

export default NewLetter
