import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const params = req.query.params;
  console.log(params);
  res.status(200).json(params);
};
