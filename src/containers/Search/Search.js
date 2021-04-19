import React from "react";
import PropTypes from "prop-types";
import { SearchContainer, Search as SearchInput } from "./Search.style";
import Logger from "../Logger/Logger";

function Search({ placeholder, setSearch, value, ...rest }) {
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

Search.propTypes = {
  propsmessage: PropTypes.string.isRequired,
};

export default Logger(Search);
