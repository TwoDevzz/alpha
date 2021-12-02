import styled, { css } from 'styled-components';
import {
  color,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  system,
  textAlign,
  TextAlignProps,
  TextColorProps,
  TextStyleProps,
  variant,
} from 'styled-system';

export const variants = {
  h1: {
    fontFamily: 'headline',
    fontSize: ['h2', 'h2', 'h1'],
    lineHeight: 'm',
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: 'headline',
    fontSize: ['xl', 'xl', 'h2'],
    lineHeight: 'm',
    fontWeight: 'bold',
  },
  h3: {
    fontFamily: 'headline',
    fontSize: ['m', 'l', 'xl'],
    lineHeight: 'm',
    fontWeight: 'bold',
  },
  h4: {
    fontFamily: 'headline',
    fontSize: ['s', 's', 'sm'],
    lineHeight: 'm',
    fontWeight: 'bold',
  },
  large: {
    fontFamily: 'body',
    fontSize: 'l',
    lineHeight: 'xxl',
    fontWeight: 'regular',
  },
  regular: {
    fontFamily: 'body',
    fontSize: ['xs'],
    lineHeight: 's',
    fontWeight: 'regular',
  },
  regular2: {
    fontFamily: 'body',
    fontSize: ['s'],
    lineHeight: 'sm',
    fontWeight: 'regular',
  },
  regular3: {
    fontFamily: 'body',
    fontSize: ['sm'],
    lineHeight: 'm',
    fontWeight: 'regular',
  },
  small: {
    fontFamily: 'body',
    fontSize: 12,
    lineHeight: 'sm',
    fontWeight: 'regular',
  },
  medium1: {
    fontFamily: 'body',
    fontSize: ['s', 's', 'm'],
    lineHeight: 'xxl',
    fontWeight: 'regular',
  },
  medium2: {
    fontFamily: 'body',
    fontSize: ['s', 's', 'm'],
    lineHeight: 'xxl',
    fontWeight: 'bold',
  },
  action1: {
    fontFamily: 'body',
    fontSize: 'm',
    lineHeight: 's',
    fontWeight: 'bold',
  },
  action2: {
    fontFamily: 'body',
    fontSize: 'xs',
    lineHeight: 's',
    fontWeight: 'bold',
  },
  action3: {
    fontSize: 'xs',
    lineHeight: 's',
  },
};

type Variants = typeof variants;

type StyledSystemProps = TextColorProps &
  FontFamilyProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps &
  FontStyleProps;

export interface Props extends StyledSystemProps {
  variant?: keyof Variants;
  textTransform?: TextStyleProps['textStyle'];
}

const Typography = styled.p<Props>`
  margin: 0;

  ${color}
  ${textAlign}
  
  ${system({
    textTransform: {
      property: 'textTransform',
    },
  })}

  ${props => {
    if (props.variant) {
      return variant({
        variants,
      });
    }

    return css`
      ${fontFamily}
      ${fontSize}
      ${lineHeight}
      ${fontWeight}
      ${fontStyle}
    `;
  }}
`;

Typography.defaultProps = {
  color: 'neutral.900',
  variant: undefined,
  fontFamily: variants.medium1.fontFamily,
  fontSize: variants.medium1.fontSize,
  fontWeight: variants.medium1.fontWeight,
  lineHeight: variants.medium1.lineHeight,
};

export default Typography;
