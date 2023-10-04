import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";

import Announcement from "../components/Announcement";
import Product from "../components/Products/Product";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Filter = styled.div`
  margin: 20px;
  @media only screen and (max-width: 660px) {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media only screen and (max-width: 660px) {
    margin-right: 0;
  }
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media only screen and (max-width: 660px) {
    margin: 10px 0px;
  }
`;
const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const cat = location.pathname.split("/")[2];


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <NavBar />
      <Announcement />

      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>balck</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price Low</Option>
            <Option value="desc">Price High</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Box
        sx={{
          marginTop: { xs: 45, md: 0 },
        }}
      >
        <Product cat={cat} filters={filters} sort={sort} />
      </Box>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;