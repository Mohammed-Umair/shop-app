import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Products from "./Products";
import { PopularProduct } from "../../data/productData";
import { mobile } from "../../responsive";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-item: center;
  @media only screen and (max-width: 660px) {
    margin-left: 30px;

    margin-top: -350px;
  }
`;
const Product = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );

        setProducts(res?.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          );
        })
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts?.map((item) => {
            return <Products item={item} key={item.id} />;
          })
        : products?.slice(0, 8).map((item) => {
            return <Products item={item} key={item.id} />;
          })}
    </Container>
  );
};

export default Product;
