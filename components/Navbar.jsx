import styled from "styled-components";
import { FaGlobeAmericas } from "@react-icons/all-files/fa/FaGlobeAmericas";
import Link from "next/link";

export const Navbar = () => {
  const Nav = styled.nav`
    background-color: var(--blue);
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex: 1;
      align-items: center;
      margin: 1rem 2rem;
      font-size: 2rem;

      h1 {
        font-weight: 700;
        margin: 0 0.25rem;
      }
    }

    ul {
      display: flex;

      li {
        list-style: none;
        margin: 1rem 2rem;
        font-size: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      ul {
        display: none;
      }
    }
  `;

  const StyledLink = styled(Link)`
    color: red;
    background: blue;
  `;

  return (
    <Nav>
      <div>
        <FaGlobeAmericas />
        <h1>Motherlands</h1>
      </div>
      <ul>
        <li>
          <StyledLink passHref href="/africa">
            Africa
          </StyledLink>
        </li>
        <li>
          <StyledLink passHref href="/americas">
            America
          </StyledLink>
        </li>
        <li>
          <StyledLink passHref href="/asia">
            Asia
          </StyledLink>
        </li>
        <li>
          <StyledLink passHref href="/europe">
            Europe
          </StyledLink>
        </li>
        <li>
          <StyledLink passHref href="/oceania">
            Oceania
          </StyledLink>
        </li>
      </ul>
    </Nav>
  );
};
