
import querystring from 'node:querystring';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

type Artist = {
  name: string;
};

type NowPlayingSpotifyResponse = {
  progress_ms: number;
  item: {
    album: {
      images: Array<{
        width: number;
        height: number;
        url: string;
      }>;
      name: string;
    };
    artists: Artist[];
    name: string;
    duration_ms: number;
  };
  is_playing: boolean;
};

export type NowPlaying = {
  title: string;
  artists: string;
  album: string;
  albumImage: string;
  progress: number;
  duration: number;
};

async function getAccessToken(): Promise<{ access_token: string }> {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${BASIC}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });

  return response.json();
}

export async function getNowPlaying(): Promise<NowPlaying | null> {
  const { access_token } = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  const data = await response.json() as NowPlayingSpotifyResponse;

  if (!data.is_playing) {
    return null;
  }

  return {
    title: data.item.name,
    artists: data.item.artists.map(artist => artist.name).join('\n'),
    album: data.item.album.name,
    albumImage: data.item.album.images[0].url,
    progress: data.progress_ms,
    duration: data.item.duration_ms,
  };
}
