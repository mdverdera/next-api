import comments from "@data/comments";

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { commentId } = req.query;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  res.status(200).json(comment);
};
