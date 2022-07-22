import type { NextApiRequest, NextApiResponse } from 'next';

import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery, FollowersQuery } from './../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;

    const query = singleUserQuery(id);
    const userVideosQuery = userCreatedPostsQuery(id);
    const userLikedVideosQuery = userLikedPostsQuery(id);
    const userFollowersQuery = FollowersQuery(id);
    
    const user = await client.fetch(query);
    const userVideos = await client.fetch(userVideosQuery);
    const userLikedVideos = await client.fetch(userLikedVideosQuery);
    const userFollowers = await client.fetch(userFollowersQuery);
    
    const data = { user: user[0], userVideos, userLikedVideos, userFollowers };
    
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { id } = req.query;
    const userFollowersQuery = FollowersQuery(id);

    client.fetch(userFollowersQuery).then((response) => {
      response.followers++
    })
  }
}
