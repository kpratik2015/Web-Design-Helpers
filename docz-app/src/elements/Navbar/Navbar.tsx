import React from "react";
import styled, { css } from "styled-components/macro";
import LOGO from "../../../public/icon-192x192.png";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";

const NCWrapper = styled.nav`
  font-size: 14px;
  color: #0a0a0a;
  text-transform: uppercase;
  max-width: 1405px;
  padding-left: 30px;
  padding-right: 30px;
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
  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
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
`;

const LogoBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MainMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  li {
    display: inline-block;
    a {
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 12px;
      padding-right: 12px;
      height: 100%;
      display: flex;
      align-items: center;
      transition: 0.2s all;
      position: relative;
      &:before {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate3d(0, 5px, 0);
        content: "";
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid transparent;
        opacity: 0;
        transition: 0.2s all;
        margin-left: -7px;
        border-bottom-color: #111;
        opacity: 0;
        visibility: hidden;
      }
      &:hover {
        & + div {
          opacity: 1;
          visibility: visible;
        }
        &:before {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }
      }
    }
    &.active {
      a {
        &:before {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
`;

const SubMenu = styled.div`
  transition: 0.2s all;
  color: #fff;
  position: absolute;
  z-index: 10;
  width: 100%;
  left: 0;
  top: 100%;
  opacity: 0;
  visibility: hidden;
  padding: 0;
  &:hover {
    opacity: 1;
    visibility: visible;
  }
`;

const RightMenu = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  justify-content: flex-end;
  text-align: right;
  align-items: stretch;
  li {
    display: inline-block;
    a {
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 12px;
      padding-right: 12px;
      height: 100%;
      display: flex;
      align-items: center;
      transition: 0.2s all;
      position: relative;
      &:before {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate3d(0, 5px, 0);
        content: "";
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid transparent;
        opacity: 0;
        transition: 0.2s all;
        margin-left: -7px;
        border-bottom-color: #111;
        opacity: 0;
        visibility: hidden;
      }
      &:hover {
        & + ${SubMenu} {
          opacity: 1;
          visibility: visible;
        }
        &:before {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }
        &.no-sub-menu::before {
          opacity: 0;
          visibility: hidden;
          transform: translate3d(0, 5px, 0);
        }
      }
    }
    &.active {
      a {
        &:before {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
`;

const SubMenuWrapper = styled.div`
  background: #252627;
  flex-direction: row-reverse;
  display: flex;
`;

const SMWContainer = styled.div`
  width: 100%;
  padding: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Tooltip = styled.div`
  margin-top: 15px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  position: fixed;
  z-index: 103;
  box-shadow: -5px -5px 15px rgba(62, 62, 62, 0.25);
  opacity: 0;
  transform: translate3d(0, 10px, 0);
  &.visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .inner {
    font-size: 10px;
    margin: 0;
    padding: 10px 15px;
    color: #fff;
    position: relative;
    white-space: nowrap;
    font-weight: 700;
    background: #111;
    border-radius: 3px;
  }
  .detail {
    border-right: 3px solid transparent;
    border-bottom: 3px solid #111;
    border-left: 3px solid transparent;
    top: -3px;
    left: calc(50% - 3px);
    display: block;
    position: absolute;
  }
`;

const NavbarCulturist: React.FC = (props) => {
  const [activeMenu, setActiveMenu] = React.useState("");
  const [dataTitle, setDataTitle] = React.useState("");
  const [tooltipCoords, setTooltipCoords] = React.useState({
    left: "-9999px",
    top: "-9999px",
  });

  const createTip = (e: any) => {
    const label =
      e.target.attributes["data-title"] &&
      e.target.attributes["data-title"].value;
    if (label) {
      setDataTitle(e.target.ariaLabel);
      setTooltipCoords({
        left: `${e.clientX - (e.target.clientWidth + 16) / 2}px`,
        top: `${e.clientY + 12}px`,
      });
    }
  };

  const cancelTip = () => {
    setDataTitle("");
    setTooltipCoords({
      left: "-9999px",
      top: "-9999px",
    });
  };

  React.useEffect(() => {
    const links = document.links;
    for (let i = 0; i < links.length; i++) {
      const a: any = links[i];
      if (
        a.attributes["data-title"] &&
        a.attributes["data-title"].value !== ""
      ) {
        console.log(a);
        a.addEventListener("mousemove", createTip);
        a.addEventListener("mouseleave", cancelTip);
      }
      //  console.log(a);
    }
  }, []);
  return (
    <React.Fragment>
      <NCWrapper>
        <RelativeBox>
          <FlexBox>
            <LogoBox>
              <img alt="logo" src={LOGO} height="54" />
            </LogoBox>
            <MainMenu>
              <li
                id="menu-item-1"
                onMouseOver={() => setActiveMenu("1")}
                onMouseLeave={() => setActiveMenu("")}
                className={activeMenu === "1" ? "active" : ""}
              >
                <a href="#M1">M1</a>
                <SubMenu>
                  <SubMenuWrapper>
                    <SMWContainer>M1 SubMenu</SMWContainer>
                  </SubMenuWrapper>
                </SubMenu>
              </li>
              <li
                id="menu-item-2"
                onMouseOver={() => setActiveMenu("2")}
                onMouseLeave={() => setActiveMenu("")}
                className={activeMenu === "2" ? "active" : ""}
              >
                <a href="#M2">M2</a>
                <SubMenu>
                  <SubMenuWrapper>
                    <SMWContainer>M2 SubMenu</SMWContainer>
                  </SubMenuWrapper>
                </SubMenu>
              </li>
              <li
                id="menu-item-3"
                onMouseOver={() => setActiveMenu("3")}
                onMouseLeave={() => setActiveMenu("")}
                className={activeMenu === "3" ? "active" : ""}
              >
                <a href="#M3">M3</a>
                <SubMenu>
                  <SubMenuWrapper>
                    <SMWContainer>M3 SubMenu</SMWContainer>
                  </SubMenuWrapper>
                </SubMenu>
              </li>
            </MainMenu>
            <RightMenu>
              <li
                id="rmenu-item-1"
                onMouseOver={() => setActiveMenu("r1")}
                onMouseLeave={() => setActiveMenu("")}
                className={activeMenu === "r1" ? "active" : ""}
              >
                <a href="#RM1">RM1</a>
                <SubMenu>
                  <SubMenuWrapper>
                    <SMWContainer>RM1 SubMenu</SMWContainer>
                  </SubMenuWrapper>
                </SubMenu>
              </li>
              <li>
                <a
                  className="no-sub-menu"
                  href="https://www.facebook.com/pratik.kataria"
                  data-title="Facebook"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </a>
              </li>
            </RightMenu>
          </FlexBox>
        </RelativeBox>
      </NCWrapper>
      <Tooltip style={tooltipCoords} className={dataTitle ? "visible" : ""}>
        <div className="inner">{dataTitle}</div>
        <div className="detail"></div>
      </Tooltip>
    </React.Fragment>
  );
};

interface IProps {
  navType?: string;
}

const Navbar: React.FC<IProps> = (props) => {
  const { navType = "1" } = props;
  switch (navType) {
    case "1":
      return <NavbarCulturist {...props} />;
    default:
      return <NavbarCulturist {...props} />;
  }
};

export default Navbar;
