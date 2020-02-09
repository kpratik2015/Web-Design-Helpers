import styled, { css } from 'styled-components/macro';

const StyledGrid = styled.div<{
  fraction?: number;
  verticalStretch?: boolean;
  auto?: boolean;
  autoFill?: boolean;
  jStart?: boolean;
  jCenter?: boolean;
  jEnd?: boolean;
  jBetween?: boolean;
  jAround?: boolean;
  aTop?: boolean;
  aCenter?: boolean;
  aEnd?: boolean;
  gutter?: string;
  fractionWithBp?: string[];
  noWrap?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  ${({ noWrap }) =>
    noWrap &&
    css`
      flex-wrap: nowrap;
    `}
  ${({ gutter = 'md', theme: { gutter: tgutter } }) => {
    const tgutterUnsafe = tgutter as { [key: string]: any };
    return gutter === 'none'
      ? ''
      : css`
          margin-left: -${tgutterUnsafe[gutter]}rem;
          margin-top: -${tgutterUnsafe[gutter] / 2}rem;
          margin-bottom: -${tgutterUnsafe[gutter] / 2}rem;
        `;
  }}
  ${({ verticalStretch }) =>
    verticalStretch
      ? css`
          align-items: stretch;
        `
      : ''}
  ${({ jStart, jCenter, jEnd, jBetween, jAround }) =>
    jStart
      ? css`
          justify-content: flex-start;
        `
      : jCenter
      ? css`
          justify-content: center;
        `
      : jEnd
      ? css`
          justify-content: flex-end;
        `
      : jBetween
      ? css`
          justify-content: space-between;
        `
      : jAround
      ? css`
          justify-content: space-around;
        `
      : ''}
  ${({ aTop, aCenter, aEnd }) =>
    aTop
      ? css`
          align-items: flex-start;
        `
      : aCenter
      ? css`
          align-items: center;
        `
      : aEnd
      ? css`
          align-items: flex-end;
        `
      : ''}
  & > * {
    flex: 0 1 auto;
    min-width: 0;
    ${({ gutter = 'md', theme: { gutter: tgutter } }) => {
      const tgutterUnsafe = tgutter as { [key: string]: any };
      return gutter === 'none'
        ? ''
        : css`
            padding-left: ${tgutterUnsafe[gutter]}rem;
            padding-top: ${tgutterUnsafe[gutter] / 2}rem;
            padding-bottom: ${tgutterUnsafe[gutter] / 2}rem;
          `;
    }}
    ${({ fraction = 1 }) =>
      css`
        max-width: ${100 * fraction}%;
        flex-basis: ${100 * fraction}%;
      `}
    ${({ verticalStretch }) =>
      verticalStretch &&
      css`
        display: flex;
        flex-direction: column;
        & > * {
          flex: 1 0 auto;
        }
      `}
    ${({ auto }) =>
      auto &&
      css`
        flex-grow: 0;
        max-width: none;
        flex-basis: auto;
      `}
    ${({ autoFill }) =>
      autoFill &&
      css`
        flex-grow: 1;
        max-width: none;
        flex-basis: auto;
      `}
    ${({ fractionWithBp, theme: { qBreakpoints } }) =>
      fractionWithBp &&
      fractionWithBp.map(x => {
        const [fraction = '1/1', bp] = x.split('@');
        const fractionalBits = fraction.split('/');
        const fNumber =
          parseInt(fractionalBits[0], 10) / parseInt(fractionalBits[1], 10);
        return css`
          @media ${qBreakpoints[bp]} {
            max-width: ${100 * fNumber}%;
            flex-basis: ${100 * fNumber}%;
          }
        `;
      })}
  }
`;

enum EPositions {
  first = 'first',
  last = 'last'
}

const GridItem = styled.div<{
  fraction?: number;
  fractionWithBp?: string[];
  aTop?: boolean;
  aCenter?: boolean;
  aEnd?: boolean;
  position?: EPositions;
  pull?: boolean;
  push?: boolean;
}>`
  ${({ fraction }) =>
    fraction &&
    css`
      max-width: ${100 * fraction}%;
      flex-basis: ${100 * fraction}%;
    `}
  ${({ fractionWithBp, theme: { qBreakpoints } }) =>
    fractionWithBp &&
    fractionWithBp.map(x => {
      const [fraction = '1/1', bp] = x.split('@');
      const fractionalBits = fraction.split('/');
      const fNumber =
        parseInt(fractionalBits[0], 10) / parseInt(fractionalBits[1], 10);
      return css`
        @media ${qBreakpoints[bp]} {
          max-width: ${100 * fNumber}%;
          flex-basis: ${100 * fNumber}%;
        }
      `;
    })}
  ${({ aTop, aCenter, aEnd }) =>
    aTop
      ? css`
          align-self: flex-start;
        `
      : aCenter
      ? css`
          align-self: center;
        `
      : aEnd
      ? css`
          align-self: flex-end;
        `
      : ''}
  ${({ position, fraction = 1 }) =>
    position === EPositions.first
      ? css`
          order: -${100 / (fraction * 100)};
        `
      : position === EPositions.last
      ? css`
          order: ${100 / (fraction * 100) + 1};
        `
      : ''}
  ${({ push, pull }) =>
    push
      ? css`
          order: 11;
          margin-left: auto;
          flex: none;
        `
      : pull
      ? css`
          order: -1;
          margin-right: auto;
          flex: none;
        `
      : ''}
  .demo {
    color: #253c5b;
    background: #e7eef9;
    padding: 0.625rem 0.9375rem;
    font-size: 0.76562rem;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.1);
  }
`;

export { GridItem };
export default StyledGrid;
