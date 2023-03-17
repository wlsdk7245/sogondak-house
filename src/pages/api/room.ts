// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  images: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    images: [
      'https://velog.velcdn.com/images/wlsdk0313/post/7ceaa03b-448c-492a-8cd2-273265cd9e30/image.jpg',
    ],
  });
}
