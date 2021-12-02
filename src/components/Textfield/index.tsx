import { withStyles } from '@material-ui/core';
import TextFieldMaterial, { TextFieldProps } from '@material-ui/core/TextField';
import React, { forwardRef } from 'react';

import colors from '@themes/colors';

const TextFieldMaterialStyled = withStyles<'root', {}, TextFieldProps>(() => ({
  root: {
    marginTop: props => (props?.label ? 24 : 0),
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 6,
    },
    '& label.Mui-focused': {
      color: colors.neutral[900],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.neutral[300],
    },
    '& .MuiFormLabel-root': {
      fontSize: 14,
    },
    '& .MuiFormHelperText-root': {
      marginLeft: 0,
    },
    '& .MuiInputLabel-shrink': {
      color: colors.neutral[900],
      transform: `translate(0px, -20px)`,
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      '& fieldset': {
        borderColor: colors.neutral[200],
      },
      '& fieldset legend': {
        width: 0,
      },
      '&:hover fieldset': {
        borderWidth: 1,
        borderColor: colors.neutral[200],
      },
      '&.Mui-focused fieldset': {
        borderWidth: 1,
        borderColor: colors.neutral[300],
      },
    },
  },
}))(TextFieldMaterial);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, _ref) => {
  return (
    <TextFieldMaterialStyled
      {...props}
      fullWidth={true}
      variant={'outlined'}
      InputLabelProps={{
        ...props.InputLabelProps,
        shrink: true,
      }}
    />
  );
});

TextField.displayName = 'TextField';

export default TextField;
