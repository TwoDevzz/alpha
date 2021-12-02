import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Box from '@components/Box';

export interface OnChangeParams {
  expanded: boolean;
}

export interface Props {
  expandIcon?: React.ReactNode;
  hiddenIcon?: React.ReactNode;
  expanded?: boolean;
  onChange?: (params: OnChangeParams) => void;
  backgroundColor?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}

const AccordionContent = styled(Box)`
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow-y: hidden;
`;

const PADDING = 16;

export const useAccordions = (name: string | false) => {
  const [activeAccordion, setActiveAccordion] = useState<string | false>(name);

  const toogleAccordion =
    (name: string) =>
    ({ expanded }: OnChangeParams) =>
      setActiveAccordion(expanded ? false : name);

  return { activeAccordion, toogleAccordion };
};

export default function Accordion({
  expandIcon,
  hiddenIcon,
  expanded,
  title,
  children,
  onChange,
  backgroundColor,
}: Props) {
  const [isOpened, setOpenned] = useState<boolean>(!!expanded);
  const [contentHeight, setContentHeight] = useState(0);

  const accordionContent = useRef<HTMLDivElement>(null);

  const toogle = () => {
    if (!children) return;

    setOpenned(!isOpened);
    onChange?.({ expanded: isOpened });
  };

  useEffect(() => {
    if (accordionContent.current) {
      setContentHeight(accordionContent.current.scrollHeight + PADDING);
    }
  }, [accordionContent]);

  useEffect(() => {
    setOpenned(!!expanded);
  }, [expanded]);

  return (
    <Box height="100%" borderRadius={2} backgroundColor={backgroundColor}>
      <Box
        padding={5}
        onClick={toogle}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Box>{title}</Box>

        <Box onClick={toogle}>
          {isOpened && hiddenIcon && hiddenIcon}
          {!isOpened && expandIcon && expandIcon}
        </Box>
      </Box>
      <AccordionContent
        ref={accordionContent}
        height={isOpened ? contentHeight : 0}
        paddingY={isOpened ? 5 : 0}
        paddingX={5}
        paddingTop={0}
      >
        {children}
      </AccordionContent>
    </Box>
  );
}
