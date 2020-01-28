import React from 'react';
import styled from 'styled-components/macro';
import { Copy } from 'styled-icons/feather/Copy';
import { copyToClipboard } from '../../utils/utils';
import { Check } from 'styled-icons/feather/Check';

const Wrapper = styled.div`
  flex: 1 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.radii[1]};
  overflow: hidden;
  margin-bottom: ${props => props.theme.space[1]};
  box-shadow: 0 0.125rem 0.125rem 0 rgba(32, 47, 71, 0.1),
    0 0 0.25rem 0 rgba(32, 47, 71, 0.05), 0 0 0 0.0625rem rgba(32, 47, 71, 0.03);
  min-height: 13.75rem;
`;

const ColorContainer = styled.div`
  width: 100%;
  padding: ${props => `${props.theme.space[1]} ${props.theme.space[2]}`};
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  cursor: pointer;
  svg:first-child {
    align-self: flex-start;
    margin-left: auto;
    opacity: 0.2;
  }
  &:hover {
    svg:first-child {
      opacity: 1;
    }
  }
`;

const ColorNameContainer = styled.div`
  font-size: ${props => props.theme.fontSizes[2]};
  color: ${props => props.theme.text.secondary};
  background-color: ${props => props.theme.bg.secondary};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: auto;
  padding: ${props => `${props.theme.space[1]} ${props.theme.space[2]}`};
`;

interface IProps {
  colorName: string;
  color: string;
}

const ColorCard: React.FC<IProps> = props => {
  const { colorName, color } = props;
  const [isCopied, setIsCopied] = React.useState(false);
  const colorContainerClick = () => {
    const didItCopy = copyToClipboard(color);
    setIsCopied(didItCopy);
  };
  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 1000);
    }
  }, [isCopied]);
  return (
    <Wrapper>
      <Container>
        <ColorContainer
          style={{ backgroundColor: color }}
          onClick={colorContainerClick}
          onKeyPress={colorContainerClick}
        >
          {isCopied ? <Check size={24} /> : <Copy size={24} />}
        </ColorContainer>
        <ColorNameContainer>{colorName}</ColorNameContainer>
      </Container>
    </Wrapper>
  );
};

export default React.memo(ColorCard);
