import comments from "@data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    console.log("delete");
    console.log(comments);

    comments.splice(index, 1);

    console.log(index);
    console.log(commentId);
    console.log(comments);
    console.log(deletedComment);

    res.status(200).json(deletedComment);
  } else if (req.method === "PATCH") {
    console.log(req.body);
    const comment = req.body.comment;
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    console.log(`test ${commentId} ${comment}`);
    comments[index].text = comment;
    console.log(comments);
    res.status(200).json(comments);
  }
};
