import Minister from 'modules/product/components/Minister';

import Box from '@components/Box';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import { Course } from '@models/Product';

import PreviewPlayer from '@product/components/CoursePreviewPlayer';

export interface Props {
  course: Course;
}

export default function Header({ course }: Props) {
  const oneHourInMinutes = 60;
  const durationInHours = course.duration / oneHourInMinutes;

  return (
    <Box paddingY={{ default: 8, lg: 13 }} backgroundColor="brand.default">
      <Box
        display="flex"
        justifyContent={{ default: 'center', lg: 'space-between' }}
        maxWidth={1170}
        paddingX={DEFAULT_PADDING_X}
        flexWrap={{ default: 'wrap', lg: 'nowrap' }}
        marginX="auto"
      >
        <Box width="100%" maxWidth={570} marginRight={{ default: 0, lg: 5 }}>
          <Box marginBottom={6}>
            <Typography
              color="neutral.white"
              fontWeight="bold"
              fontSize={{ default: 'h2', lg: 56 }}
              fontFamily="headline"
              textAlign={{ default: 'center', lg: 'left' }}
            >
              {course.title}
            </Typography>
          </Box>
          <Box marginBottom={9}>
            <Typography
              fontSize="m"
              color="neutral.200"
              textAlign={{ default: 'center', lg: 'left' }}
            >
              <Box dangerouslySetInnerHTML={{ __html: course.description }} />
            </Typography>
          </Box>
          <Box display={{ default: 'none', lg: 'flex' }} alignItems="center">
            <Box marginRight={13}>
              {course.partner && (
                <Minister
                  src={course.partner.avatar}
                  name={course.partner.full_name}
                />
              )}
            </Box>
            <Box>
              <Box marginBottom={1}>
                <Typography
                  fontSize={12}
                  color="neutral.200"
                  textTransform="uppercase"
                >
                  Duração:
                </Typography>
              </Box>
              <Typography fontSize={18} color="neutral.white">
                {durationInHours} horas
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box width="100%" maxWidth={480} marginBottom={{ default: 8, lg: 0 }}>
          <PreviewPlayer
            thumbnail={course.thumbnail}
            preview={course.preview}
            preview_provider={course.preview_provider}
          />
        </Box>
        <Box
          width="100%"
          maxWidth={480}
          display={{ default: 'flex', lg: 'none' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box marginRight={6}>
            {course.partner && (
              <Minister
                src={course.partner.avatar}
                name={course.partner.full_name}
              />
            )}
          </Box>
          <Box>
            <Box marginBottom={1}>
              <Typography
                fontSize={12}
                color="neutral.200"
                textTransform="uppercase"
              >
                Duração:
              </Typography>
            </Box>
            <Typography fontSize={18} color="neutral.white">
              {durationInHours} horas
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
