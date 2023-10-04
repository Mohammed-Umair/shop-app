import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! free shipping in orders over $50</Container>;
};

export default Announcement;
