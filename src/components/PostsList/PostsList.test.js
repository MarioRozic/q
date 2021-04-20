import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";

import PostsList from "./PostsList";
import { postContext } from "../../context/PostContext/PostContext";

const PROPSMESSAGE = "Hello from";

const POSTS_MOCK = [
  {
    userId: 1,
    id: 1,
    title: "First post title",
    body: "Some post body",
    user: { name: "Mario" },
  },
  {
    userId: 1,
    id: 2,
    title: "Second post title",
    body: "Some post body",
    user: { name: "Mario" },
  },
];

afterEach(cleanup);

describe("Test PostsList component", () => {
  it("It should render x number of posts", () => {
    const { getAllByLabelText } = render(
      <postContext.Provider
        value={{
          state: {
            posts: POSTS_MOCK,
          },
        }}
      >
        <PostsList propsmessage={PROPSMESSAGE} />
      </postContext.Provider>
    );
    expect(getAllByLabelText("post").length).toBe(2);
    // expect(getPostsList).toHaveBeenCalled();
  });

  it("It should call getPostsList on mount", () => {
    const getPostsList = jest.fn();
    render(
      <postContext.Provider
        value={{
          state: {
            posts: null,
          },
          getPostsList,
        }}
      >
        <PostsList propsmessage={PROPSMESSAGE} />
      </postContext.Provider>
    );

    expect(getPostsList).toBeCalled();
  });
});
