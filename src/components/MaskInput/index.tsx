import { InputProps } from '@material-ui/core/Input';
import React from 'react';
import InputMask from 'react-input-mask';

import TextField from '../Textfield';

interface MaskInputProps extends InputProps {
  mask?: string;
  label?: string;
  helperText?: React.ReactNode;
  formatChars?: any;
  disabled?: boolean;
}

const MaskInput = (propsRoot: MaskInputProps) => {
  return (
    // @ts-ignore
    <InputMask {...propsRoot}>
      {(props: any) => <TextField {...props} disabled={propsRoot.disabled} />}
    </InputMask>
  );
};

export default MaskInput;
