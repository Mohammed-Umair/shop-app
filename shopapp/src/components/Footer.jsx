import React from "react";
import styled from "styled-components";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import PaymentMethod from "../assets/paymentmethod.png";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
 
  @media only screen and (max-width: 660px) {
    flex-direction:column
   };

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 660px) {
   display:none
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 660px) {
    background-color:#fff8f;
   }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>G.G</Logo>
        <Desc>
          lorem is not just a normal snippet—it's actually a generator. Every
          time you expand it, it will generate a 30-words dummy text, splitted
          into a few sentences.
        </Desc>
        <SocialContainer>
          <SocialIcon color=" #3B5999">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color=" #55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color=" #E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Link</Title>

        <List>
          <ListItem>Home</ListItem>

          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <RoomIcon
            sx={{
              marginRight: "10px",
            }}
          />
          Nanded,Maharashtra,India
        </ContactItem>
        <ContactItem>
          {" "}
          <PhoneIcon
            sx={{
              marginRight: "10px",
            }}
          />{" "}
          +91 7219335584
        </ContactItem>
        <ContactItem>
          {" "}
          <EmailIcon
            sx={{
              marginRight: "10px",
            }}
          />{" "}
          contact@GGServices.info
        </ContactItem>
        <Payment src={PaymentMethod} />
      </Right>
    </Container>
  );
};

export default Footer;
