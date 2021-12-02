import { useEffect } from 'react';

import Accordion, { useAccordions } from '@components/Accordion';
import Box from '@components/Box';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import Loader from '@components/Loader';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import useFAQ from '@home/hooks/useFAQ';

const Accordions = () => {
  const { data, isLoading } = useFAQ();

  const { activeAccordion, toogleAccordion } = useAccordions(false);

  useEffect(() => {
    if (data?.length) {
      const faq = data[0];
      toogleAccordion(faq.id);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Loader />
      </Box>
    );
  }

  return (
    <>
      {data &&
        data.map(faq => (
          <Box key={faq.id} marginBottom={2}>
            <Accordion
              title={<Typography color="neutral.900">{faq.question}</Typography>}
              expandIcon={
                <Box
                  minWidth={6}
                  minHeight={6}
                  padding={1}
                  borderRadius="50%"
                  border="1px solid"
                  borderColor="neutral.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon fill="neutral.900" size="s" name="Add" />
                </Box>
              }
              hiddenIcon={
                <Box
                  minWidth={6}
                  minHeight={6}
                  padding={1}
                  borderRadius="50%"
                  backgroundColor="brand.default"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon fill="neutral.white" size="sm" name="Remove" />
                </Box>
              }
              expanded={activeAccordion === faq.id}
              onChange={toogleAccordion(faq.id)}
              backgroundColor="neutral.white"
            >
              <Typography color="neutral.300" fontSize="s">
                {faq.answer}
              </Typography>
            </Accordion>
            <Box width="100%" marginY={3} paddingX={5}>
              <Divider variant="horizontal" />
            </Box>
          </Box>
        ))}
    </>
  );
};

export default function FAQ() {
  return (
    <Box
      backgroundColor="neutral.white"
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      minHeight="100%"
      paddingX={DEFAULT_PADDING_X}
    >
      <Box
        width="100%"
        marginY={{ default: 56, lg: 112 }}
        maxWidth={770}
        marginX="auto"
      >
        <Box width="100%" marginBottom={{ default: 70, lg: 70 }}>
          <Typography textAlign="center" variant="h3" color="neutral.900">
            Perguntas frequentes
          </Typography>
        </Box>

        <Box width="100%">
          <Accordions />
        </Box>
      </Box>
    </Box>
  );
}
