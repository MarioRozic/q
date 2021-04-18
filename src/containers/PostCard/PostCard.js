import React from "react";
import { AuthorTitle, Body, Card, CardImage, Title } from "./PostCard.style";

export default function PostCard({ post }) {
  return (
    <Card>
      <CardImage
        src="https://i.stack.imgur.com/y9DpT.jpg"
        alt="image placeholder"
      />
      <AuthorTitle>{post.user.name}</AuthorTitle>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
    </Card>
  );
}
