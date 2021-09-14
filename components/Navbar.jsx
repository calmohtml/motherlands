import styled from "styled-components";
import { FaGlobeAmericas } from "@react-icons/all-files/fa/FaGlobeAmericas";
import Modal from "./Modal";
import { Fragment, useState } from "react";
import Link from "next/link";
import { FiAlignJustify } from "@react-icons/all-files/fi/FiAlignJustify";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

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

    @media (max-width: 640px) {
      ul {
        display: none;
      }
    }
  `;

  const ModalButton = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--white-blue);

    @media (min-width: 640px) {
      display: none;
    }
  `;

  return (
    <Fragment>
      <Nav>
        <div>
          <FaGlobeAmericas />
          <h1>Motherlands</h1>
        </div>
        <ul>
          <li>
            <Link passHref href="/">
              Home
            </Link>
          </li>
          <li>
            <Link passHref href="/africa">
              Africa
            </Link>
          </li>
          <li>
            <Link passHref href="/americas">
              America
            </Link>
          </li>
          <li>
            <Link passHref href="/asia">
              Asia
            </Link>
          </li>
          <li>
            <Link passHref href="/europe">
              Europe
            </Link>
          </li>
          <li>
            <Link passHref href="/oceania">
              Oceania
            </Link>
          </li>
        </ul>
        <ModalButton onClick={() => setShowModal(true)}>
          <FiAlignJustify />
        </ModalButton>
      </Nav>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
};
