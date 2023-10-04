import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://static.toiimg.com/thumb/msid-81524499,imgsize-364749,width-900,height-1200,resizemode-6/81524499.jpg
")
      center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;

  @media only screen and (max-width: 660px) {
    width: 75%;
  }
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;

  margin: 10px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled: {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);
 


  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>

          {error && <Error>Something Went Wrong...</Error>}
          <Link>FORGET PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
