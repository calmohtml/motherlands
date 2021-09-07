import { useState, useEffect } from "react";
import Link from "next/link";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  const Wrapper = styled.div`
    border: 1px solid red;

    @media (min-width: 640px) {
      display: none;
    }
  `;

  const WrapperBackdrop = styled.div`
    background: rgba(72, 67, 79, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 9000;
  `;

  const WrapperOverlay = styled.div`
    font: 18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol" !important;
    background: $white;
    color: #454a53;
    position: fixed;
    width: 100%;
    max-width: 60%;
    min-width: 320px;
    max-height: 90%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 7px 19px 11px,
      rgba(71, 63, 79, 0.08) 0px 2px 4px;
    border-radius: 0.5rem;
    display: inline-flex;
    flex-direction: column;
    z-index: 10000;
  `;

  const NavbarMobileLinks = styled.ul`
    list-style: none;
  `;

  const modalContent = show ? (
    <Wrapper>
      <WrapperBackdrop></WrapperBackdrop>
      <WrapperOverlay>
        <NavbarMobileLinks>
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
        </NavbarMobileLinks>
        <button onClick={handleClose}>Close</button>
      </WrapperOverlay>
    </Wrapper>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("navbar__modal")
    );
  } else {
    return null;
  }
};

export default Modal;
