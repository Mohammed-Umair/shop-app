import React from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  @media only screen and (max-width: 660px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? " black" : "transparent"};

  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  @media only screen and (max-width: 660px) {
    display: none;
  }
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 660px) {
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 660px) {
    flex-direction: column;
  }
`;
const ProductDeatil = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColur = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};

  border-radius: 50%;
`;
const ProductSize = styled.span``;

const PriceDeatil = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: 660px) {
    margin: 5px 15px;
  }
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media only screen and (max-width: 660px) {
    margin-bottom: 20px;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  const navigate = useNavigate();
  const handleOpenRazorPay = (data) => {
    const options = {
      key: "rzp_test_SvsBsCg2rCpsbG",
      amount: Number(data.amount),
      currency: data.currency,
      order_id: data.id,
      name: "G G Shop",
      description: "XYZ",
      image:
        "https://www.shutterstock.com/image-vector/gg-logo-unique-different-projects-260nw-1972527140.jpg",
      handler: function (response) {
        console.log("response", response);
        axios
          .post("http://localhost:5000/verify", { response: response })
          .then((res) => {
            console.log(res, "37");
          })
          .catch((err) => console.log(err));
      },
      prefill: {
        email: "umair@gmail.com",
        contact: 7218952819,
      },
      notes: {
        address: "Nanded India",
      },
      theme: {
        color: "#008080",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    navigate("/success",{state:data});
  };

  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios
      .post("http://localhost:5000/order", _data)
      .then((res) => {
        console.log("payment", res.data);

        handleOpenRazorPay(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BEG</Title>

        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart?.products?.map((product) => {
              return (
                <>
                  <Product>
                    <ProductDeatil>
                      <Image src={product.img} />

                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductColur color={product.color} />
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDeatil>
                    <PriceDeatil>
                      <ProductAmountContainer>
                        <Add />

                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove />
                      </ProductAmountContainer>

                      <ProductPrice>
                        ${product.price * product.quantity}
                      </ProductPrice>
                    </PriceDeatil>
                  </Product>
                  <Hr />
                </>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>

            <Button onClick={() => handlePayment(cart.total)}>
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
