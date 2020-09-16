import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import People from "../views/People";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
export default () => {
  return (
    <>
      <Layout>
        <header>
          <MainHeader />
        </header>
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/people" exact component={People} />
        </div>
        <footer>
          <Footer />
        </footer>
      </Layout>
    </>
  );
};
