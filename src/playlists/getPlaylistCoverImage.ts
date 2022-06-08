import fetch from 'cross-fetch';

export const getPlaylistCoverImage = (authToken: string, playlistId: string): Promise<Response> => {
  return fetch(`/v1/playlists/${playlistId}/images`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
};
