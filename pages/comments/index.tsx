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
    // fetchComments();
  };

  const deleteComment = async (commentId: number) => {
    console.log(commentId);
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });

    const data = await response.json();

    fetchComments();
  };

  const updateComment = async (commentId: number, comment: string) => {
    console.log(comment);
    fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        fetchComments();
        console.log(data);
      });
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
      {comments.map((cm: CommentModel) => {
        return (
          <div key={cm.id}>
            <h2>
              {cm.id} {cm.text}
            </h2>

            <button onClick={() => updateComment(cm.id, comment)}>
              Update
            </button>
            <button onClick={() => deleteComment(cm.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
