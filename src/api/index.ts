import client from './client';

export const fetchGames = async (parameters: {
  search: string;
  page_size?: number;
  page: number;
}) => {
  const result = await client.fetch(`/search/games`, { page_size: 10, ...parameters });
  return result;
};
