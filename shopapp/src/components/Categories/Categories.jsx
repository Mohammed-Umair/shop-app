import React from "react";
import { CateogryData } from "../../data/categoryData";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { mobile } from "../../responsive";

const Container = styled.div`
  padding: 10px;
  justify-content: space-between;
  align-item: center;
  display: flex;
  flex: wrap;
 
`;

const Categories = () => {
  return (
    <Grid container>
      <Container>
        {CateogryData.map((item) => {
          return <CategoryItem item={item} key={item.id} />;
        })}
      </Container>
    </Grid>
  );
};

export default Categories;
