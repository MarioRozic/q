import React from "react";
import { SearchContainer, Search as SearchInput } from "./Search.style";

export default function Search({ placeholder, setSearch, value }) {
  return (
    <SearchContainer>
      <SearchInput
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
        value={value}
      />
    </SearchContainer>
  );
}
