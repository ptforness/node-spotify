import querystring from 'node:querystring';
import fetch from 'cross-fetch';

export const getFeaturedPlaylists = (
  authToken: string,
  query?: { country?: string; limit?: number; locale?: string; offset?: number; timestamp: string },
): Promise<Response> => {
  return fetch(`/v1/browse/featured-playlists${query && `?${querystring.stringify(query)}`}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
};
