import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = styled.input`
  width: 400px;
  height: 40px;
  background: 0% 0% no-repeat padding-box padding-box rgb(255, 255, 255);
  border: 1px solid rgb(220, 222, 227);
  border-radius: 4px;
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  margin: 30px;
`;

export { SearchContainer, Search };
