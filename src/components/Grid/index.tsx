import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import Box from '@components/Box';

const SPACING_UNIT = 4;

type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props {
  spacing?: GridSpacing;
  container?: boolean;
  xl?: boolean | GridSize;
  lg?: boolean | GridSize;
  md?: boolean | GridSize;
  sm?: boolean | GridSize;
  xs?: boolean | GridSize;
  children: React.ReactNode;
}

const OverrideComponent = styled(Box)<Props>``;

const Item = styled.div``;

const Container = styled(Box)<Pick<Props, 'spacing'>>`
  display: flex;
  flex-wrap: wrap;

  ${({ spacing }) => {
    const margin = spacing ? spacing * SPACING_UNIT : 0;

    return css`
      width: calc(100% + ${2 * margin}px);
      margin: -${margin}px;

      ${Item} {
        padding: ${margin}px;
      }
    `;
  }}
`;

const generateWidth = (
  cols: Props['xl'],
  valueIfItGrows: string,
): string | number | undefined => {
  if (!cols) return undefined;

  if (typeof cols === 'boolean' && cols) {
    return valueIfItGrows;
  }

  return cols !== 'auto' ? `${(cols / 12) * 100}%` : '100%';
};

const generateFlexgrow = (cols: Props['xl']): number | undefined => {
  if (!cols) return undefined;

  if (typeof cols === 'boolean' && cols) {
    return 1;
  }

  return 0;
};

const Grid = ({ container, spacing = 2, xs, sm, md, lg, xl, children }: Props) => {
  const itemFlexBasis = useMemo(() => {
    if (container) {
      return undefined;
    }

    return {
      default: generateWidth(xs, '0'),
      sm: generateWidth(sm, '0'),
      md: generateWidth(md, '0'),
      lg: generateWidth(lg, '0'),
      xl: generateWidth(xl, '0'),
    };
  }, [container, xs, sm, md, lg, xl]);

  const itemMaxWidth = useMemo(() => {
    if (container) {
      return undefined;
    }

    return {
      default: generateWidth(xs, '100%'),
      sm: generateWidth(sm, '100%'),
      md: generateWidth(md, '100%'),
      lg: generateWidth(lg, '100%'),
      xl: generateWidth(xl, '100%'),
    };
  }, [container, xs, sm, md, lg, xl]);

  const itemFlexGrow = useMemo(() => {
    if (container) {
      return undefined;
    }

    return {
      default: generateFlexgrow(xs),
      sm: generateFlexgrow(sm),
      md: generateFlexgrow(md),
      lg: generateFlexgrow(lg),
      xl: generateFlexgrow(xl),
    };
  }, [container, xs, sm, md, lg, xl]);

  return (
    <OverrideComponent
      as={container ? Container : Item}
      spacing={spacing}
      flexBasis={itemFlexBasis}
      flexGrow={itemFlexGrow}
      maxWidth={itemMaxWidth}
    >
      {children}
    </OverrideComponent>
  );
};

export default Grid;
