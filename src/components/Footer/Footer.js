import { FacebookOutlined, Instagram, Mail, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
display:flex;
`
const Left =styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1``

const Description  = styled.p`
margin:20px 0;`

const SocialContainer = styled.div`
display:flex;`

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50px;
color:white;
background:#${props =>props.color};
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
margin-right:20px;
`

const Center  = styled.div`
flex:1;
padding:20px;
`
const Title =styled.h2`
margin-bottom:30px;`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`

const ListItem = styled.li`
width:50%;
margin-bottom:5px;

`

const Right = styled.div`
flex:1;
padding:20px;`

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;`

const Payment =styled.img`

`

const Footer = () => {
  return (
    <Container>
        <Left >
            <Logo>Ekitech</Logo>
            <Description>
                There are many news you will hear from us on this platform. please visit us all the time so that you will not miss out the latest update and all the amazing offers. We love you and we will serve you best!
            </Description>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <FacebookOutlined  />
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Instagram  />
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title >Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}} />
                Contact Address Here
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}} />
                +23484775
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} />
                Contact email address here
            </ContactItem>
            <Payment src = ""/>
        </Right>
    </Container>
  )
}

export default Footer
