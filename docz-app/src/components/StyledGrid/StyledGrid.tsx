import styled, { css } from "styled-components/macro";

type TBreakpoints =
  | "mobileS"
  | "mobileM"
  | "mobileL"
  | "tablet"
  | "laptop"
  | "laptopL"
  | "desktop";

type TGutter = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "none";

interface IStyledGrid {
  /** fraction: flex-basis % */
  fraction?: number;
  verticalStretch?: boolean | TBreakpoints;
  /** auto: flex-basis */
  auto?: boolean | TBreakpoints;
  /** autoFill: flex-grow */
  autoFill?: boolean | TBreakpoints;
  jStart?: boolean | TBreakpoints;
  jCenter?: boolean | TBreakpoints;
  jEnd?: boolean | TBreakpoints;
  jBetween?: boolean | TBreakpoints;
  jAround?: boolean | TBreakpoints;
  aTop?: boolean | TBreakpoints;
  aCenter?: boolean | TBreakpoints;
  aEnd?: boolean | TBreakpoints;
  gutter?: TGutter;
  fractionWithBp?: string[];
  noWrap?: boolean | string;
}

const StyledGrid = styled.div<IStyledGrid>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  ${({ noWrap, theme: { qBreakpoints } }) =>
    noWrap
      ? typeof noWrap === "string"
        ? css`
            @media ${qBreakpoints[noWrap]} {
              flex-wrap: nowrap;
            }
          `
        : css`
            flex-wrap: nowrap;
          `
      : ""}
  ${({ gutter = "md", theme: { gutter: tgutter } }) => {
    const tgutterUnsafe = tgutter as { [key: string]: any };
    return gutter === "none"
      ? ""
      : css`
          margin-left: -${tgutterUnsafe[gutter]}rem;
          margin-top: -${tgutterUnsafe[gutter] / 2}rem;
          margin-bottom: -${tgutterUnsafe[gutter] / 2}rem;
        `;
  }}
  ${({ verticalStretch, theme: { qBreakpoints } }) =>
    verticalStretch
      ? typeof verticalStretch === "string"
        ? css`
            @media ${qBreakpoints[verticalStretch]} {
              align-items: stretch;
            }
          `
        : css`
            align-items: stretch;
          `
      : ""}
  ${({ jStart, theme: { qBreakpoints } }) =>
    jStart
      ? typeof jStart === "string"
        ? css`
            @media ${qBreakpoints[jStart]} {
              justify-content: flex-start;
            }
          `
        : css`
            justify-content: flex-start;
          `
      : ""}
  ${({ jCenter, theme: { qBreakpoints } }) =>
    jCenter
      ? typeof jCenter === "string"
        ? css`
            @media ${qBreakpoints[jCenter]} {
              justify-content: center;
            }
          `
        : css`
            justify-content: center;
          `
      : ""}
  ${({ jEnd, theme: { qBreakpoints } }) =>
    jEnd
      ? typeof jEnd === "string"
        ? css`
            @media ${qBreakpoints[jEnd]} {
              justify-content: flex-end;
            }
          `
        : css`
            justify-content: flex-end;
          `
      : ""}
  ${({ jBetween, theme: { qBreakpoints } }) =>
    jBetween
      ? typeof jBetween === "string"
        ? css`
            @media ${qBreakpoints[jBetween]} {
              justify-content: space-between;
            }
          `
        : css`
            justify-content: space-between;
          `
      : ""}
  ${({ jAround, theme: { qBreakpoints } }) =>
    jAround
      ? typeof jAround === "string"
        ? css`
            @media ${qBreakpoints[jAround]} {
              justify-content: space-around;
            }
          `
        : css`
            justify-content: space-around;
          `
      : ""}
  ${({ aTop, theme: { qBreakpoints } }) =>
    aTop
      ? typeof aTop === "string"
        ? css`
            @media ${qBreakpoints[aTop]} {
              align-items: flex-start;
            }
          `
        : css`
            align-items: flex-start;
          `
      : ""}
  ${({ aCenter, theme: { qBreakpoints } }) =>
    aCenter
      ? typeof aCenter === "string"
        ? css`
            @media ${qBreakpoints[aCenter]} {
              align-items: center;
            }
          `
        : css`
            align-items: center;
          `
      : ""}
  ${({ aEnd, theme: { qBreakpoints } }) =>
    aEnd
      ? typeof aEnd === "string"
        ? css`
            @media ${qBreakpoints[aEnd]} {
              align-items: flex-end;
            }
          `
        : css`
            align-items: flex-end;
          `
      : ""}
  & > * {
    flex: 0 1 auto;
    min-width: 0;
    ${({ gutter = "md", theme: { gutter: tgutter } }) => {
      const tgutterUnsafe = tgutter as { [key: string]: any };
      return gutter === "none"
        ? ""
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
    ${({ verticalStretch, theme: { qBreakpoints } }) =>
      verticalStretch && typeof verticalStretch === "string"
        ? css`
            @media ${qBreakpoints[verticalStretch]} {
              display: flex;
              flex-direction: column;
              & > * {
                flex: 1 0 auto;
              }
            }
          `
        : css`
            display: flex;
            flex-direction: column;
            & > * {
              flex: 1 0 auto;
            }
          `}
    ${({ auto, theme: { qBreakpoints } }) =>
      auto
        ? typeof auto === "string"
          ? css`
              @media ${qBreakpoints[auto]} {
                flex-grow: 0;
                max-width: none;
                flex-basis: auto;
              }
            `
          : css`
              flex-grow: 0;
              max-width: none;
              flex-basis: auto;
            `
        : ""}
    ${({ autoFill, theme: { qBreakpoints } }) =>
      autoFill
        ? typeof autoFill === "string"
          ? css`
              @media ${qBreakpoints[autoFill]} {
                flex-grow: 1;
                max-width: none;
                flex-basis: auto;
              }
            `
          : css`
              flex-grow: 1;
              max-width: none;
              flex-basis: auto;
            `
        : ""}
    ${({ fractionWithBp, theme: { qBreakpoints } }) =>
      fractionWithBp &&
      fractionWithBp.map((x) => {
        const [fraction = "1/1", bp] = x.split("@");
        const fractionalBits = fraction.split("/");
        const fNumber =
          parseFloat(fractionalBits[0]) / parseFloat(fractionalBits[1]);
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
  first = "first",
  last = "last",
}

interface IGridItem {
  fraction?: number;
  fractionWithBp?: string[];
  aTop?: boolean | TBreakpoints;
  aCenter?: boolean | TBreakpoints;
  aEnd?: boolean | TBreakpoints;
  position?: EPositions;
  pull?: boolean | TBreakpoints;
  push?: boolean | TBreakpoints;
}

const GridItem = styled.div<IGridItem>`
  ${({ fraction }) =>
    fraction &&
    css`
      max-width: ${100 * fraction}%;
      flex-basis: ${100 * fraction}%;
    `}
  ${({ fractionWithBp, theme: { qBreakpoints } }) =>
    fractionWithBp &&
    fractionWithBp.map((x) => {
      const [fraction = "1/1", bp] = x.split("@");
      const fractionalBits = fraction.split("/");
      const fNumber =
        parseFloat(fractionalBits[0]) / parseFloat(fractionalBits[1]);
      return css`
        @media ${qBreakpoints[bp]} {
          max-width: ${100 * fNumber}%;
          flex-basis: ${100 * fNumber}%;
        }
      `;
    })}
  ${({ aTop, theme: { qBreakpoints } }) =>
    aTop
      ? typeof aTop === "string"
        ? css`
            @media ${qBreakpoints[aTop]} {
              align-self: flex-start;
            }
          `
        : css`
            align-self: flex-start;
          `
      : ""}
  ${({ aCenter, theme: { qBreakpoints } }) =>
    aCenter
      ? typeof aCenter === "string"
        ? css`
            @media ${qBreakpoints[aCenter]} {
              align-self: center;
            }
          `
        : css`
            align-self: center;
          `
      : ""}
  ${({ aEnd, theme: { qBreakpoints } }) =>
    aEnd
      ? typeof aEnd === "string"
        ? css`
            @media ${qBreakpoints[aEnd]} {
              align-self: flex-end;
            }
          `
        : css`
            align-self: flex-end;
          `
      : ""}
  ${({ position, fraction = 1 }) =>
    position === EPositions.first
      ? css`
          order: -${100 / (fraction * 100)};
        `
      : position === EPositions.last
      ? css`
          order: ${100 / (fraction * 100) + 1};
        `
      : ""}
  ${({ push, pull, theme: { qBreakpoints } }) =>
    push
      ? typeof push === "string"
        ? css`
            @media ${qBreakpoints[push]} {
              order: 11;
              margin-left: auto;
              flex: none;
            }
          `
        : css`
            order: 11;
            margin-left: auto;
            flex: none;
          `
      : pull
      ? typeof pull === "string"
        ? css`
            @media ${qBreakpoints[pull]} {
              order: -1;
              margin-right: auto;
              flex: none;
            }
          `
        : css`
            order: -1;
            margin-right: auto;
            flex: none;
          `
      : ""}
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
