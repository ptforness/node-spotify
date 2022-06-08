import querystring from 'node:querystring';
import fetch from 'cross-fetch';

export const addItemsToPlaylist = (
  authToken: string,
  playlistId: string,
  query?: { position?: number; uris?: string },
  body?: { position?: number; uris?: string[] },
): Promise<Response> => {
  return fetch(`/v1/playlists/${playlistId}/tracks${query && `?${querystring.stringify(query)}`}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
};
