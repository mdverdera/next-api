import { useState } from "react";

type CommentModel = {
  id: number;
  text: string;
};

const Comments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment: CommentModel) => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.id} {comment.text}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
