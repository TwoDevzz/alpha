import { useCallback, useEffect, useState } from 'react';
import { BackgroundColorProps, MaxWidthProps } from 'styled-system';

import Box from '@components/Box';
import Icon from '@components/Icon';

interface Props {
  children?: React.ReactNode;
  backgroundColor?: BackgroundColorProps['backgroundColor'];
  maxWidth?: MaxWidthProps['maxWidth'];
  open?: boolean;
  onClose: () => void;
  showIconClose?: boolean;
}

export const useDialog = (open: boolean) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(open);
  }, [open]);

  const toggleDialog = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  const closeDialog = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  const openDialog = useCallback(() => {
    setOpened(true);
  }, [setOpened]);

  return { opened, toggleDialog, closeDialog, openDialog };
};

function Dialog({
  children,
  backgroundColor,
  maxWidth,
  onClose,
  open = false,
  showIconClose,
}: Props) {
  const [opened, setOpened] = useState(false);

  const closeDialog = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const { target, currentTarget } = event;

    if (target === currentTarget) {
      setOpened(false);
      onClose();
    }
  };

  const onCloseESC = useCallback(
    (event: KeyboardEvent) => {
      if (opened && event.key === 'Escape') {
        setOpened(false);
        onClose();
      }
    },
    [opened],
  );

  /* Check prop to set dialog open */
  useEffect(() => {
    setOpened(open);
  }, [open]);

  /* Set focus to dialog */
  useEffect(() => {
    window.addEventListener('keydown', onCloseESC);

    return () => {
      window.removeEventListener('keydown', onCloseESC);
    };
  }, [onCloseESC]);

  if (!opened) {
    return null;
  }

  return (
    <Box
      width="100%"
      height="100%"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      className="backdrop"
      position="fixed"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={10000}
      top={0}
      left={0}
      paddingX={5}
      onClick={closeDialog}
    >
      <Box
        padding={{ default: 7, lg: 10 }}
        position="relative"
        width={maxWidth ? '100%' : 'initial'}
        maxWidth={maxWidth}
        backgroundColor={backgroundColor}
        borderRadius={5}
      >
        {showIconClose && (
          <Box onClick={closeDialog} position="absolute" top="15px" right="20px">
            <Icon size="xs" name="Close" />
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
}

Dialog.defaultProps = {
  backgroundColor: 'neutral.white',
  opened: false,
};

export default Dialog;
