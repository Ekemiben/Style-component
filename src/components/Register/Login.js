import styled from 'styled-components';


const Container =styled.div`
width:100vw;
height:100vh;
background-image: linear-gradient(rgba(255, 255,255, 0.5), rgba(255, 255, 255, 0.5)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-C7j9ylVE5k0diLmjkZDVU5WT60V7zG-Tj_5bY4aj-g&s");
/* background-image: conic-gradient(red, yellow, green, pink); */
display:flex;
align-items:center;
justify-content:center;
background-repeat:no-repeat;
background-size: cover;
`
const Wrapper = styled.div`
padding:20px;
width:25%;
background:white;
`

const Title = styled.h1`
font-size:24px;
font-weight:300;`

const Form = styled.form`
display:flex;
flex-direction:column;
`

const Input = styled.input`
flex:1;
min-width:40%;
margin:  10px 0 ;
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
const Link = styled.a`
margin:5px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>Sign UP</Title>
        <Form>
          
            <Input placeholder = "email" />
            <Input placeholder = "password" />
            <Button>Login</Button>
            <Link> DON NOT REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login
