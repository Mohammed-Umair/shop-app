import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  @media only screen and (max-width: 660px) {
    height: 20vh;
    margin-top: -500px;
  }
  @media (min-width: 680px) and (max-width: 920px) {
    height: 40vh;
    margin-top: -400px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  @media only screen and (max-width: 660px) {
    font-size: 19px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: teal;
  cursor: pointer;
  font-weight: 600;
  color: white;
`;
const CategoryItem = ({ item }) => {
  //   console.log("item", item);
  return (
    <Container key={item.id}>
    <Link to={`/products/${item.cat}`}>
    <Image src={item.image} />
    <Info>
    <Title> {item.title} </Title>
    <Button  >SHOP NOW</Button>
    </Info>
    </Link>
    </Container>
  );
};

export default CategoryItem;
