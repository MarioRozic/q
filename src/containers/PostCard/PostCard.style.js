import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  float: left;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  max-width: 100%;
`;

const AuthorTitle = styled.span`
  color: #fdb0c0;
  font-size: 11px;
  margin-top: 10px;
`;

const Title = styled.span`
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
  margin: 10px 0;
`;

const Body = styled.span`
  font-size: 13px;
  text-align: center;
`;

export { Card, CardImage, AuthorTitle, Title, Body };
