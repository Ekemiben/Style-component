import { Height } from '@mui/icons-material';
import styled from 'styled-components';

const Container =styled.div`
width:100vw;
height:100vh;
background-image: linear-gradient(rgba(255, 255,255, 0.5), rgba(255, 255, 255, 0.5)), url("https://png.pngtree.com/thumb_back/fh260/background/20201024/pngtree-minimal-cylinder-podium-scene-with-geometrical-forms-image_435987.jpg");
display:flex;
align-items:center;
justify-content:center;
background-repeat:no-repeat;
background-size: cover;
`
const Wrapper = styled.div`
padding:20px;
width:40%;
background:white;
`

const Title = styled.h1`
font-size:24px;
font-weight:300;`

const Form = styled.form`
display:flex;
flex-wrap: wrap;`

const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0 0;
height: 32px;
padding-left: 10px;
`


const Agreement = styled.span`
font-size:12px;
margin:20px 0;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
cursor:pointer;
background:teal;
color:white;

`

const Registration = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder = "name" />
                <Input placeholder = "last name" />
                <Input placeholder = "username" />
                <Input placeholder = "email" />
                <Input placeholder = "password" />
                <Input placeholder = "confirm password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREAT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Registration
