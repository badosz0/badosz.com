import { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '../../lib/spotify';

export default async (_: NextApiRequest, response: NextApiResponse): Promise<void> => {
  const nowPlaying = await getNowPlaying();

  if (!nowPlaying) {
    return response.status(200).send({});
  }

  return response.status(200).send(nowPlaying);
};
