import querystring from 'node:querystring';
import fetch from 'cross-fetch';

export const getUsersPlaylists = (
  authToken: string,
  userId: string,
  query?: { limit?: number; offset?: number },
): Promise<Response> => {
  return fetch(`/v1/users/${userId}/playlists${query && `?${querystring.stringify(query)}`}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
};
