import React, { useState } from "react";
import "./Slider.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import styled from "styled-components";
import { SliderItem } from "../../data/featureCaroualData";
import { Grid } from "@mui/material";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;

  position: relative;
  ${mobile({  height: "30vh" })};
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media only screen and (max-width: 660px) {
    position: absolute;
    top: -550px;

    left: ${(props) => props.direction === "left" && "0px"};
    right: ${(props) => props.direction === "right" && "0px"};
  }

  @media (min-width: 680px) and (max-width: 920px) {
    position: absolute;
    top: -400px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  // @media only screen and (max-width: 660px) {
  //   position: relative;
  // }
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
  @media only screen and (max-width: 660px) {
    height: 30%;
    width: 50vw;
  }
  @media (min-width: 680px) and (max-width: 920px) {
    height: 60%;
    width: 40vw;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media only screen and (max-width: 660px) {
    width: 50vw;

    position: absolute;
    top: 0;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 660px) {
    font-size: 22px;
    position: absolute;
    top: 50px;
    left: 250px;
  }
  @media (min-width: 680px) and (max-width: 920px) {
    font-size: 30px;
    position: absolute;
    top: 260px;
  }
`;
const Description = styled.p`
  font-size: 20px;
  margin: 50px 0px;
  width: 50vw;
  font-weight: 500;
  letter-spacing: 3px;

  @media only screen and (max-width: 660px) {
    font-size: 13px;
    font-weight: none;
  width: 40vw;
margin-left:20px;
    letter-spacing: 0px;
    color: gray;
    position: absolute;
    top: 80px;
    left: 200px;
    text-transform: capitalize;
  }
  @media (min-width: 680px) and (max-width: 920px) {
    font-size: 22px;
    position: absolute;
    top: 260px;
    color: gray;
  width: 40vw;
  



  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid teal;
  @media only screen and (max-width: 660px) {
    position: absolute;
    top: 200px;
    left: 235px;
    font-size: 16px;
    width: 120px;
    padding: 4px;
  }
  @media (min-width: 680px) and (max-width: 920px) {
   
    position: absolute;
    top: 410px;



  }
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Container>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon />
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {SliderItem.map((item) => {
              return (
                <Slide bg={item.bg} key={item.id}>
                  <ImageContainer>
                    <Image src={item.image}></Image>
                  </ImageContainer>
                  <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button>SHOW MORE</Button>
                  </InfoContainer>
                </Slide>
              );
            })}
          </Wrapper>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon />
          </Arrow>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Slider;
