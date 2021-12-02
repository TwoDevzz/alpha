export const datePad = (d: number) => (String(d).length === 1 ? `0${d}` : `${d}`);

export const formatDateCard = (month: number, year: number) => {
  return `${datePad(month)}/${String(year).slice(-2)}`;
};
