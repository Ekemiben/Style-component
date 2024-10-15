import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRightRounded, ArrowLeftOutlined, ArrowCircleRightOutlined} from '@mui/icons-material';
import  {sliderData} from '../data/data'
import {mobile} from "../Responsiveness/Responsive"


const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({display:"none"})};
`

const Arrow = styled.div `
width:50px;
height:50px;
display:flex;
aligned-items:center;
justify-contents:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left: ${props => props.direction === "left" && "10px"};;

right: ${props => props.direction === "right" && "10px"};
cursor:pointer;
opacity:0.5;
border:1px solid red;
justify-content:cneter;
align-items:center;
z-index:2;

`

const Wrapper = styled.div`
height:100%;
display:flex;
transform:translateX(${(props)=>props.slideIndex *-100}vw);
transition: all 1.5s ease;
`

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:${props=>props.bg}
`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const Image = styled.img`
height:80%;

`
const InfoContainer = styled.div`
flex:1;
`
const Title = styled.h1`
font-size: 30px;
font-weight: 500;
margin:50px 10px;

`
const Desc = styled.p`
margin:50px 10px;
font-size:20px;
font-weight:500;
letter-spacing:3px;

`
const Button = styled.button`
border-radius:20px;
width:100px;
height:40px;
cursor:pointer;
/* border:none; */
background-color:transparent;
font-size:20px;
margin:4px 50px;
`




const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  function handleClick (direction){
    if(direction === "left"){
     setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }

    
   }
  return (
    <Container>
    <Arrow direction='left' onClick={()=>handleClick("left")}>
    <ArrowLeftOutlined/>
    </Arrow>

    <Wrapper slideIndex ={slideIndex}>
      {sliderData.map((item =>(
      
      
        <Slide bg={item.bg} key={item.id}>
        <ImgContainer>
        <Image src = {item.image} />
        </ImgContainer>
        <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>Shop Now</Button>
        </InfoContainer>
        </Slide> 
      
      )))}
    </Wrapper>

    <Arrow direction = 'right' onClick={()=>handleClick("right")} >
    <ArrowCircleRightOutlined />
    </Arrow>
    </Container>
  )
}

export default Slider
