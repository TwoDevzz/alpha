import { withStyles } from '@material-ui/core';
import TabMaterial, { TabProps } from '@material-ui/core/Tab';

import colors from '@themes/colors';

const Tab = withStyles({
  root: {
    color: colors.neutral[500],
    textTransform: 'none',
    padding: '14px 24px',
  },
  selected: {
    color: colors.brand.default,
    backgroundColor: colors.brand[50],
    fontWeight: 'bold',
  },
})((props: TabProps) => <TabMaterial color="default" {...props} />);

export default Tab;
