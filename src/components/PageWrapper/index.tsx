import Box from '@components/Box';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

interface PageWrapperProps {
  contentProps?: unknown;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  contentProps,
  ...props
}) => (
  <Box
    display="flex"
    flexDirection="column"
    flex={1}
    width="100%"
    minHeight={`100vh`}
    paddingX={DEFAULT_PADDING_X}
    {...(props || {})}
  >
    <Box
      width="100%"
      maxWidth={1170}
      marginX="auto"
      marginY={56}
      {...(contentProps || {})}
    >
      {children}
    </Box>
  </Box>
);

export default PageWrapper;
