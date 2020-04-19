import React from "react";
import styled from "styled-components/macro";
import LOGO from "../../../public/icon-192x192.png";
import { Search } from "@styled-icons/heroicons-outline/Search";
import { MenuAlt1 } from "@styled-icons/heroicons-outline/MenuAlt1";
import { Close } from "@styled-icons/material/Close";

const NCWrapper = styled.nav`
  font-size: 14px;
  color: #0a0a0a;
  text-transform: uppercase;
  max-width: 1405px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  height: 64px;
  margin-right: auto;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 12;
  background: #f2f2f2;
  border-bottom: 1px #f2f2f2 solid;
  display: flex;
  align-items: center;
  transition: all 1s cubic-bezier(0.2, 1, 0.3, 1);
  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }
  &.aside {
    /* transform: translate3d(calc(60px - 100vw), 0, 0); for real */
    transform: translate3d(calc(60px - 100%), 0, 0); /* for dummy */
    & ~ .site-inner {
      opacity: 0.2;
      pointer-events: none;
      background-color: #fff;
      transform: translate3d(calc(60px - 100%), 0, 0);
    }
  }
  & ~ .site-inner {
    opacity: 1;
    height: 100%;
    transition: all 1s cubic-bezier(0.2, 1, 0.3, 1);
  }
`;

const RelativeBox = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s transform;
  transform-style: preserve-3d;
  > * {
    position: relative;
    z-index: 11;
  }
`;

const MenuLeft = styled.ul`
  text-align: left;
  flex: 1;
  margin-left: -7px;
  display: flex;
  align-items: center;
  li {
    display: flex;
    color: #111;
    a {
      padding: 20px 7px;
    }
  }
`;

const MenuLogo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MenuRight = styled.ul`
  flex: 1;
  margin-right: -7px;
  margin-left: auto;
  text-align: right;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  li {
    display: flex;
    color: #111;
    a {
      padding: 20px 7px;
    }
  }
`;

const HiddenMenu = styled.div`
  transition: transform 1s cubic-bezier(0.2, 1, 0.3, 1), visibility 0s;
  visibility: hidden;
  left: auto;
  right: 0;
  width: calc(100% - 60px);
  z-index: 1;
  text-align: center;
  /* position: fixed; for real */
  position: absolute; /* for dummy */
  height: 100%;
  top: 0;
  bottom: 0;
  font-size: 18px;
  transform: translate3d(50%, 0, 0);
  &.visible {
    transform: translate3d(0%, 0, 0);
    visibility: visible;
  }
`;

const MenuContent = styled.div`
  height: 100%;
  padding: 30px 45px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`;

const Background = styled.div`
  opacity: 0.61;
  z-index: 0;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://images.pexels.com/photos/1884306/pexels-photo-1884306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
`;

const NavbarCulturistMobile: React.FC = (props) => {
  const [isMenuTapped, setIsMenuTapped] = React.useState(false);
  React.useEffect(() => {
    if (isMenuTapped) {
      const mockBody = document.getElementById("mock-body");
      console.log(mockBody);
    }
  }, [isMenuTapped]);
  return (
    <React.Fragment>
      <NCWrapper className={isMenuTapped ? "aside" : ""}>
        <RelativeBox>
          <FlexBox>
            <MenuLeft>
              <li>
                <a href="#Search">
                  <Search size={24} />
                </a>
              </li>
            </MenuLeft>
            <MenuLogo>
              <img alt="logo" src={LOGO} height="54" />
            </MenuLogo>
            <MenuRight>
              <li>
                <a
                  href="#Menu"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuTapped(!isMenuTapped);
                  }}
                  aria-pressed={isMenuTapped}
                >
                  {isMenuTapped ? <Close size={24} /> : <MenuAlt1 size={24} />}
                </a>
              </li>
            </MenuRight>
          </FlexBox>{" "}
        </RelativeBox>
      </NCWrapper>
      <HiddenMenu className={isMenuTapped ? "visible" : ""}>
        <RelativeBox>
          <MenuContent>Hi</MenuContent>
        </RelativeBox>
        <Background />
      </HiddenMenu>
    </React.Fragment>
  );
};

export default NavbarCulturistMobile;
