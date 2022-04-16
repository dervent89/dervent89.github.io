import { NextApiRequest, NextApiResponse } from 'next';

const callback = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req', res);
  //res.status(400).json('');
  res.status(200).redirect('/').json(req.body);
};

export default callback;
