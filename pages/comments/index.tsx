import { useState } from "react";

type CommentModel = {
  id: number;
  text: string;
};

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
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
