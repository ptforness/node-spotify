import querystring from 'node:querystring';
import fetch from 'cross-fetch';

export const getPlaylistItems = (
  authToken: string,
  playlistId: string,
  query?: { additional_types?: string; fields?: string; limit?: number; market?: string; offset?: number },
): Promise<Response> => {
  return fetch(`/v1/playlists/${playlistId}/tracks${query && `?${querystring.stringify(query)}`}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
};
