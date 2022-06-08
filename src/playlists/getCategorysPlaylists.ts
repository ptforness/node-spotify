import querystring from 'node:querystring';
import fetch from 'cross-fetch';

export const getCategorysPlaylists = (
  authToken: string,
  categoryId: string,
  query?: { country?: string; limit?: number; offset?: number },
): Promise<Response> => {
  return fetch(`/v1/browse/categories/${categoryId}/playlists${query && `?${querystring.stringify(query)}`}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
};
