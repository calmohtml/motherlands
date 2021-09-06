import styled from "styled-components";

export const Footer = () => {
  const year = new Date().getFullYear();

  const Footer = styled.footer`
    text-align: center;
    padding-bottom: 2rem;
    font-size: 1.3rem;
  `;

  return (
    <Footer>
      <p>
        Copyright © {year} - Created and designed by{" "}
        <a href="https://calmohtml.github.io/">@calmohtml</a>
      </p>
    </Footer>
  );
};
