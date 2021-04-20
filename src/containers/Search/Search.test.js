import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Search from "./";

const PROPSMESSAGE = "Hello from";

afterEach(cleanup);

describe("Testing Search component", () => {
  test("It should render input field with text type", () => {
    const { getByLabelText } = render(<Search propsmessage={PROPSMESSAGE} />);

    const input = getByLabelText("search-input");
    expect(input).toHaveAttribute("type", "text");
  });

  test("It should store entered value", () => {
    let value = "";
    const setSearch = jest.fn((e) => {
      value = e;
    });
    const { getByLabelText, rerender } = render(
      <Search propsmessage={PROPSMESSAGE} setSearch={setSearch} value={value} />
    );

    const input = getByLabelText("search-input");
    expect(input).toHaveAttribute("type", "text");
    fireEvent.change(input, { target: { value: "Mario" } });
    rerender(
      <Search propsmessage={PROPSMESSAGE} setSearch={setSearch} value={value} />
    );
    expect(value).toBe("Mario");
  });
});
