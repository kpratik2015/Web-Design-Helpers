import React from 'react';
import styled from 'styled-components/macro';
import { FileCopy } from 'styled-icons/remix-line/FileCopy';

const Wrapper = styled.div`
  flex: 1 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 0.5625rem;
  box-shadow: 0 0.125rem 0.125rem 0 rgba(32, 47, 71, 0.1),
    0 0 0.25rem 0 rgba(32, 47, 71, 0.05), 0 0 0 0.0625rem rgba(32, 47, 71, 0.03);
  min-height: 13.75rem;
  background-color: white;
`;

const ColorContainer = styled.div`
  width: 100%;
  padding: 0.5625rem 1rem;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const ColorNameContainer = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: auto;
  padding: 0.5625rem 1rem;
`;

interface IProps {
  colorName: string;
  color: string;
}

const ColorCard: React.FC<IProps> = props => {
  const { colorName, color } = props;
  return (
    <Wrapper>
      <Container>
        <ColorContainer style={{ backgroundColor: color }}>
          <FileCopy
            size={24}
            style={{
              alignSelf: 'flex-start',
              marginLeft: 'auto',
              opacity: 0.1
            }}
          />
        </ColorContainer>
        <ColorNameContainer>{colorName}</ColorNameContainer>
      </Container>
    </Wrapper>
  );
};

export default ColorCard;
