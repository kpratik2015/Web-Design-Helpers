import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/macro";
import { Copy } from "@styled-icons/feather/Copy";
import {
  copyToClipboard,
  pickTextColorBasedOnBgColor,
  resolveFromObject,
} from "../../utils/utils";
import { Check } from "@styled-icons/feather/Check";
import { lightTheme, darkTheme } from "../../theme/theme";

const Wrapper = styled.div`
  flex: 1 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.radii[1]};
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.space[1]};
  box-shadow: 0 0.125rem 0.125rem 0 rgba(32, 47, 71, 0.1),
    0 0 0.25rem 0 rgba(32, 47, 71, 0.05), 0 0 0 0.0625rem rgba(32, 47, 71, 0.03);
  min-height: 12rem;
`;

const FooterContainer = styled.div`
  font-size: ${(props) => props.theme.fontSizes[2]};
  color: ${(props) => props.theme.text.secondary};
  background-color: ${(props) => props.theme.bg.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-top: auto;
  padding: ${(props) => `${props.theme.space[1]} ${props.theme.space[2]}`};
`;

const ColorBox = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: ${(props) => `${props.theme.space[1]} ${props.theme.space[2]}`};
  span {
    color: inherit;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: 0.65rem;
    font-family: ${(props) => props.theme.fontPrimary};
  }
  color: #fff;
  svg {
    align-self: center;
    margin-left: auto;
    opacity: 0.2;
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

interface IColors {
  name: string;
  color?: string;
  themeColor?: string;
}

interface IProps {
  palleteName: string;
  colors: IColors[];
}

const SingleColorCard: React.FC<any> = (props) => {
  const { color, name } = props;
  const [isCopied, setIsCopied] = React.useState(false);
  const backgroundColorLD = pickTextColorBasedOnBgColor(color);
  const txtColor =
    backgroundColorLD === "light"
      ? darkTheme.text.secondary
      : lightTheme.text.secondary;
  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 1000);
    }
  }, [isCopied]);

  const colorContainerClick = (): void => {
    const didItCopy = copyToClipboard(color as string);
    setIsCopied(didItCopy);
  };
  return (
    <ColorBox
      style={{ backgroundColor: color as string }}
      onClick={colorContainerClick}
      onKeyPress={colorContainerClick}
      role="button"
    >
      <span style={{ color: txtColor }}>{name}</span>
      {isCopied ? (
        <Check size={24} color={txtColor} />
      ) : (
        <Copy size={24} color={txtColor} />
      )}
    </ColorBox>
  );
};

const MultiColorCard: React.FC<IProps> = (props) => {
  const themeContext = useContext(ThemeContext);
  const { palleteName, colors } = props;

  return (
    <Wrapper>
      <Container>
        {colors.map(({ name, color, themeColor = "colors.primary" }, idx) => {
          const cc = color
            ? color
            : resolveFromObject(themeContext, themeColor);
          return <SingleColorCard key={idx} color={cc} name={name} />;
        })}
        <FooterContainer>{palleteName}</FooterContainer>
      </Container>
    </Wrapper>
  );
};

export default React.memo(MultiColorCard);
