import React from "react";
import Article from "../components/Article";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Landmark from "../components/Landmark";
import Main from "../components/Main";
import Wrap from "../components/Wrap";

const HomeView = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Article />
        <Main>
          <Brand></Brand>
          <Landmark></Landmark>
          <Gallery></Gallery>
        </Main>
        <Footer />
      </Wrap>
    </>
  );
};

export default HomeView;
