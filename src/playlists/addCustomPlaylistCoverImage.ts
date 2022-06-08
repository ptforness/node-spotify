import fetch from 'cross-fetch';

export const addCustomPlaylistCoverImage = (authToken: string, playlistId: string): Promise<Response> => {
  return fetch(`/v1/playlists/${playlistId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
};
