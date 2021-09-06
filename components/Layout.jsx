import { Fragment } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styled from "styled-components";

export const Layout = ({ children }) => {
  const Content = styled.main`
    flex: 1 0 auto;
  `;

  return (
    <Fragment>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  );
};
