import React from "react";
import { render, cleanup } from "@testing-library/react";

import PostCard from "./PostCard";

const PROPSMESSAGE = "Hello from";

const POST_MOCK = {
  userId: 1,
  id: 1,
  title: "Some post title",
  body: "Some post body",
  user: { name: "Mario" },
};

const COMMENTS = [
  { id: 1, email: "email@email.com", body: "Some comment body" },
  { id: 2, email: "email2@email.com", body: "Some comment body" },
];

afterEach(cleanup);

describe("Test PostCard component", () => {
  it("It should render card with right props, without comments", () => {
    const { getByText, queryByText } = render(
      <PostCard propsmessage={PROPSMESSAGE} post={POST_MOCK} />
    );
    expect(getByText(POST_MOCK.title)).toBeInTheDocument();
    expect(getByText(POST_MOCK.body)).toBeInTheDocument();
    expect(getByText(POST_MOCK.user.name)).toBeInTheDocument();
    expect(queryByText("Comments:")).not.toBeInTheDocument();
  });

  it("It should render card with right props, without comments", () => {
    const { getByText, getAllByLabelText } = render(
      <PostCard
        propsmessage={PROPSMESSAGE}
        post={POST_MOCK}
        comments={COMMENTS}
      />
    );

    expect(getByText("Comments:")).toBeInTheDocument();
    expect(getAllByLabelText("comment").length).toBe(2);
  });
});
