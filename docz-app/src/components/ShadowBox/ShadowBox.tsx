import React from 'react';
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme
} from 'styled-components/macro';

const Wrapper = styled.div`
  flex: 1 0 auto;
`;

const SBox = styled.div<{
  boxShadow: string | FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  box-shadow: ${props => props.boxShadow};
  background: ${props => props.theme.bg.secondary};
  min-height: 5rem;
  width: 100%;
  border-radius: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1.5625rem;
  padding: ${props => props.theme.space[1]};
`;

const SName = styled.div`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: 700;
  margin-bottom: 1rem;
  & ~ div {
    margin-bottom: ${props => props.theme.space[1]};
  }
`;

const SLabel = styled.div`
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: uppercase;
  color: ${props => props.theme.colors.shades[1]};
  margin-bottom: 0.25rem;
  & ~ code {
    font-size: ${props => props.theme.fontSizes[1]};
  }
`;

const ShadowBox: React.FC<{
  title: string;
  variableName?: string;
  boxShadow: string;
}> = props => {
  const { title, variableName, boxShadow } = props;
  return (
    <Wrapper>
      <SBox
        boxShadow={
          variableName
            ? css`
                ${(props: { theme: { boxShadows: { [x: string]: string } } }) =>
                  props.theme.boxShadows[variableName]}
              `
            : boxShadow
        }
      >
        <SName>{title}</SName>
        {variableName && (
          <div
            css={`
              display: flex;
              flex-direction: column;
            `}
          >
            <SLabel>Theme Variable</SLabel>
            <code>{variableName}</code>
          </div>
        )}
      </SBox>
    </Wrapper>
  );
};

export default React.memo(ShadowBox);
