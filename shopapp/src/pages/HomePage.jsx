import React from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Slider from "../components/FeatureCarousal/Slider";
import Categories from "../components/Categories/Categories";
import Product from "../components/Products/Product";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      
      <Product />
      
      
      <NewsLetter />
  
      <Footer/>
    </div>
  );
};

export default HomePage;
