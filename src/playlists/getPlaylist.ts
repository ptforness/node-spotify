import querystring from 'node:querystring';
import fetch from 'cross-fetch';

/**
 * @param authToken Spotify authentication token required by the endpoint
 * @param playlistId
 * @param query
 * @throws 401: Bad or expired token. This can happen if the user revoked a token or the access token has expired. You should re-authenticate the user.
 * @throws 403: Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...). Unfortunately, re-authenticating the user won't help here.
 * @throws 429: The app has exceeded its rate limits.
 */
export const getPlaylist = (
  authToken: string,
  playlistId: string,
  query?: { additional_types?: string; fields?: string; market?: string },
): Promise<Response> => {
  return fetch(`/v1/playlists/${playlistId}${query && `?${querystring.stringify(query)}`}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
};
