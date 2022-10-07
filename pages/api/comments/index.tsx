import comments from "@data/comments";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    console.log(comments);
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;

    const newComment = {
      id: 4,
      text: comment,
    };
    comments.push(newComment);
    console.log(comments);
    res.status(201).json(newComment);
  }
};
