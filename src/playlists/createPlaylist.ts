import fetch from 'cross-fetch';

export const createPlaylist = (
  authToken: string,
  userId: string,
  body?: { name?: string; public?: boolean; collaborative?: boolean; description?: string },
): Promise<Response> => {
  return fetch(`/v1/users/${userId}/tracks`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
};
