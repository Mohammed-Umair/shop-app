import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 660px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  @media only screen and (max-width: 660px) {
    height: 40vh;
  }
`;
const InfoContainer = styled.div`
  flex: 1;

  padding: 0px 50px;

  @media only screen and (max-width: 660px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  @media only screen and (max-width: 660px) {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  margin: 0 5px;
  cursor: pointer;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  @media only screen and (max-width: 660px) {
    width: 100%;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const location = useLocation();

  const dispatch = useDispatch();

  // console.log("location", location.pathname.split("/")[2]);
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClickAddToCart = () => {
    //update our cart
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color?.map((item) => {
                return (
                  <FilterColor
                    color={item}
                    key={item}
                    onClick={() => setColor(item)}
                  />
                );
              })}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product?.size?.map((item) => {
                  return <FilterSizeOption key={item}>{item}</FilterSizeOption>;
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("decrease")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("increase")} />
            </AmountContainer>
            <Button onClick={handleClickAddToCart}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
