import { FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import CheckboxMaterial, { CheckboxProps } from '@material-ui/core/Checkbox';
import React, { ReactNode } from 'react';

import colors from '@themes/colors';

const CheckboxStyled = withStyles({
  root: {
    color: colors.brand.default,
    '&$checked': {
      color: colors.brand.default,
    },
  },
  checked: {
    color: colors.brand.default,
    '&$checked': {
      color: colors.brand.default,
    },
  },
})(props => <CheckboxMaterial color="default" {...props} />);

interface NewCheckboxProps extends CheckboxProps {
  label: ReactNode;
}

const Checkbox = ({ label, ...props }: NewCheckboxProps) => {
  return <FormControlLabel control={<CheckboxStyled {...props} />} label={label} />;
};

export default Checkbox;
