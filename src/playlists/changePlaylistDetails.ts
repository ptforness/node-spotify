import fetch from 'cross-fetch';

export const changePlaylistDetails = (
  authToken: string,
  playlistId: string,
  body?: { name?: string; public?: boolean; collaborative?: boolean; description?: string },
): Promise<Response> => {
  return fetch(`/v1/playlists/${playlistId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
};
