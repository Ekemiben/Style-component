import {styled} from "styled-components";

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;

`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;`



const Info = styled.div`
position:absolute;
top:20%;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center
justify-content:center;
background:transparents;


`
const Title= styled.h1`
color:white
margin-bottom:20px;
background:white;
background-color:transparent;
color:white;
`
const Button = styled.button`
padding:5px;
border:none;
background:white;
color:gray;
cursor:pointer; 
 `

const CategoryItems = ({cat}) => {
    
  return (
    <Container>
       <Image src= {cat.img} />
       <Info>
        <div>
        <Title>{cat.title}</Title>
        <Button>SHOP NOW</Button>
        </div>
       </Info>
    </Container>
  )
}

export default CategoryItems
