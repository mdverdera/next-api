import comments from "@data/comments";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

type CommentModel = {
  id: number;
  text: string;
};

const Comment = ({
  comment,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div>
        {comment.id}. {comment.text}
      </div>
    </>
  );
};

export default Comment;

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ["1", "2", "3"];
  const paths = arr.map((commentId) => {
    return {
      params: { commentId },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  // DON'T DO THIS! - don't call your own API
  //   const response = await fetch(
  //     `http://localhost:3000/api/comments/${params?.commentId}`
  //   );
  //   const data = await response.json();

  return {
    props: {
      comment,
    },
  };
};
