import styled from "styled-components";

const Card = styled.div`
  width: ${(props) => (props.comments ? "500px" : "300px")};
  height: ${(props) => (props.comments ? null : "350px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: ${(props) => (props.comments ? "10px auto" : "10px")};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  float: ${(props) => (props.comments ? null : "left")};

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

const Comments = styled.span`
  font-size: 13px;
  text-transform: capitalize;
  font-weight: 700;
  display: inline-block;
  width: 100%;
  text-align: left;
  margin: 10px 0;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
const CommentTitle = styled.span`
  color: #fdb0c0;
  font-size: 13px;
  margin-bottom: 5px;
`;
const CommentBody = styled.code`
  font-size: 11px;
`;

export {
  Card,
  CardImage,
  AuthorTitle,
  Title,
  Body,
  Comments,
  CommentBox,
  CommentTitle,
  CommentBody,
};
