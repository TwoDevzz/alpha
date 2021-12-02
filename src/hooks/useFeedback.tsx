import { useSnackbar } from 'notistack';

interface UseFeedbackReturn {
  showErrorMessage: (message: string) => void;
  showSuccessMessage: (message: string) => void;
}

export const useFeedback = (): UseFeedbackReturn => {
  const { enqueueSnackbar } = useSnackbar();

  const zinabre: UseFeedbackReturn = {
    showErrorMessage: (message: string) => {
      enqueueSnackbar(message, { variant: 'error' });
    },
    showSuccessMessage: (message: string) => {
      enqueueSnackbar(message, { variant: 'success' });
    },
  };

  return zinabre;
};
