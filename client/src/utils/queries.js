import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query Posts {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;
