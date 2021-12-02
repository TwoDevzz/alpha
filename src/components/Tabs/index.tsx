import { withStyles } from '@material-ui/core';
import TabsMaterial, { TabsProps } from '@material-ui/core/Tabs';

import colors from '@themes/colors';

const Tabs = withStyles({
  indicator: {
    backgroundColor: colors.brand.default,
  },
})(TabsMaterial);

export default Tabs;
