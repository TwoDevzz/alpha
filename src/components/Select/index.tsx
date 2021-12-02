import { OutlinedInput, withStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SelectMaterial, { SelectProps } from '@material-ui/core/Select';

import InputLabelStyled from '@components/InputLabel';

import colors from '@themes/colors';

export const OutlinedInputStyled = withStyles(theme => ({
  root: {
    marginTop: 24,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${colors.neutral[300]} !important`,
    },
    '& .MuiOutlinedInput-notchedOutline legend': {
      color: colors.neutral[900],
      visibility: 'visible',
      width: 'auto',
    },
    '& .MuiOutlinedInput-notchedOutline legend > span': {
      minWidth: 1000,
    },
    '& .MuiInputLabel-shrink': {
      color: colors.neutral[900],
      transform: `translate(-14px, -17px)`,
    },
  },
  focused: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${colors.neutral[300]} !important`,
    },
    '& .MuiSelect-root': {
      background: 'none !important',
    },
  },
  notchedOutline: {
    border: `1px solid ${colors.neutral[200]} !important`,
  },
}))(OutlinedInput);

const Select = withStyles({})(({ label, ...props }: SelectProps) => (
  <SelectMaterial
    fullWidth={true}
    input={
      <OutlinedInputStyled
        label={<InputLabelStyled shrink>{label}</InputLabelStyled>}
        notched={false}
      />
    }
    {...props}
  />
));

export default Select;
