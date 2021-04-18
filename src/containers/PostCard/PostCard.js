import React from "react";
import Logger from "../Logger/Logger";
import {
  AuthorTitle,
  Body,
  Card,
  CardImage,
  CommentBody,
  CommentBox,
  Comments,
  CommentTitle,
  Title,
} from "./PostCard.style";

function PostCard({ post, comments }) {
  return (
    <Card comments={comments}>
      <CardImage
        src="https://i.stack.imgur.com/y9DpT.jpg"
        alt="image placeholder"
      />
      <AuthorTitle>{post.user.name}</AuthorTitle>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
      {comments?.length ? (
        <>
          <Comments>Comments:</Comments>

          {comments.map((comment) => (
            <CommentBox key={comment.id}>
              <CommentTitle>{comment.email}</CommentTitle>
              <CommentBody>{comment.body}</CommentBody>
            </CommentBox>
          ))}
        </>
      ) : null}
    </Card>
  );
}

export default Logger(PostCard);
