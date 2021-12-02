import api from '@config/api';

const deleteCard = async (cardId: string) => {
  const { data } = await api.delete(`/cards/${cardId}`);
  return data;
};

export default { deleteCard };
