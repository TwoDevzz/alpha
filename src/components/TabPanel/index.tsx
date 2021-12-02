import Box from '@components/Box';

interface TabPanelProps {
  value: number;
  index: number;
}
const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      paddingY={8}
      {...other}
    >
      {value === index && children}
    </Box>
  );
};

export default TabPanel;
