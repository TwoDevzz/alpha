import { withStyles } from '@material-ui/core';
import InputLabelMaterial, { InputLabelProps } from '@material-ui/core/InputLabel';

import colors from '@themes/colors';

const InputLabelStyled = withStyles({
  root: {
    fontSize: 14,
    color: colors.neutral[900],
  },
})((props: InputLabelProps) => <InputLabelMaterial {...props} />);

export default InputLabelStyled;
