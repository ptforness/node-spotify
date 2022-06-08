import fetch from 'cross-fetch';

export const removePlaylistItems = (
  authToken: string,
  playlistId: string,
  body?: { tracks?: { uri: string }[]; snapshot_id?: string },
): Promise<Response> => {
  return fetch(`/v1/playlists/${playlistId}/tracks`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
};
