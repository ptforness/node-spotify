import querystring from 'node:querystring';
import fetch from 'cross-fetch';

export const getCurrentUsersPlaylists = (
  authToken: string,
  query?: { limit?: number; offset?: number },
): Promise<Response> => {
  return fetch(`/v1/me/playlists${query && `?${querystring.stringify(query)}`}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
};
