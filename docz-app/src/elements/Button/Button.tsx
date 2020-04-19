import React, { cloneElement } from "react";
import styled, { css } from "styled-components/macro";

/*
// Skeleton:
const ButtonType2 = styled.button``;

interface IButtonCulturist {}

const ButtonCulturist: React.FC<IButtonCulturist> = (props) => {
  const { children } = props;
  return <ButtonType2>{children}</ButtonType2>;
};
*/

const ButtonType3 = styled.button`
  border-radius: 4px;
  padding: 1rem 2.4rem;
  border: 0;
  cursor: pointer;
  /* For Neumorphism Effect */
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px hsla(216, 23%, 71%, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  /* For Neumorphism Effect */
  text-transform: uppercase;
  font-weight: 700;
  color: #999;
  &:hover {
    color: #5ab9ea;
    box-shadow: inset 9px 9px 16px 0 hsla(216, 23%, 71%, 0.6),
      inset -9px -9px 16px 0 rgba(255, 255, 255, 0.5);
  }
`;

interface IButtonNeomorphic {}

const ButtonNeomorphic: React.FC<IButtonNeomorphic> = (props) => {
  const { children } = props;
  return <ButtonType3>{children}</ButtonType3>;
};

interface IButtonCulturist {
  rounded?: boolean;
  gradient?: string;
  bgColor?: string;
  animatedIcon?: React.ReactElement;
}

const ButtonType2 = styled.button<IButtonCulturist>`
  display: inline-block;
  border-radius: ${({ rounded }) => (rounded ? "180px" : "2px")};
  padding: 0 20px;
  color: #fff;
  ${({ gradient, bgColor }) =>
    gradient
      ? css`
          background-image: ${gradient};
        `
      : css`
          background: ${bgColor};
          border: 2px solid transparent;
        `}
  outline: 0;
  font-size: 11px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  font-weight: 700;
  border: 0;
  height: 44px;
  line-height: 40px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  position: relative;
  &.arrow {
    padding-left: 30px;
    padding-right: 30px;
  }
  span {
    transition: 0.2s ease-out all;
    display: inline-block;
  }
  svg {
    display: inline-block;
    height: 100%;
    line-height: 40px;
    transition: 0.2s ease-out all;
    font-size: 1em;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate3d(-10px, -50%, 0);
  }
  &:hover {
    span {
      transform: translate3d(-10px, 0, 0);
    }
    svg {
      transform: translate3d(0, -50%, 0);
      opacity: 1;
    }
  }
`;

const ButtonCulturist: React.FC<IButtonCulturist> = (props) => {
  const {
    children,
    rounded = false,
    gradient,
    bgColor = "#4cbfb3",
    animatedIcon,
  } = props;
  return (
    <ButtonType2
      rounded={rounded}
      gradient={gradient}
      bgColor={bgColor}
      className={animatedIcon ? "arrow" : ""}
    >
      {animatedIcon ? (
        <React.Fragment>
          <span>{children}</span>
          {animatedIcon}
        </React.Fragment>
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </ButtonType2>
  );
};

interface IButtonSafeGold {
  bgColor?: string;
  postIcon?: React.ReactElement;
}

const ButtonType1 = styled.button<IButtonSafeGold>`
  color: #fff;
  background: ${({ bgColor }) => bgColor};
  border-radius: 4px;
  border: 1px solid ${({ bgColor }) => bgColor};
  padding: 1rem 2.4rem;
  box-shadow: 0px 10px 30px -12px ${({ bgColor }) => `${bgColor}99`};
  font-size: 15px;
  font-weight: 500;
  transition: box-shadow 0.3s;
  &:not(:disabled) {
    cursor: pointer;
  }
  &:hover,
  &:active {
    box-shadow: 0px 10px 30px -12px ${({ bgColor }) => bgColor};
  }
`;

const ButtonSafeGold: React.FC<IButtonSafeGold> = (props) => {
  const { bgColor, postIcon, children } = props;
  return (
    <ButtonType1 bgColor={bgColor}>
      {children}
      {postIcon && cloneElement(postIcon, { style: { marginLeft: "0.5rem" } })}
    </ButtonType1>
  );
};

interface IProps {
  btnType?: string;
}

const Button: React.FC<IProps> = (props) => {
  const { btnType = "1" } = props;
  switch (btnType) {
    case "1":
      return <ButtonSafeGold {...props} />;
    case "2":
      return <ButtonCulturist {...props} />;
    case "3":
      return <ButtonNeomorphic {...props} />;
    default:
      return <ButtonSafeGold {...props} />;
  }
};

export default Button;
