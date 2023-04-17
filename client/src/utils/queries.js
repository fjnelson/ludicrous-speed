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



export const QUERY_ALL_POSTS = gql`
query Posts {
  posts {
    _id
    postText
    postAuthor
    createdAt
  }
}
`;
