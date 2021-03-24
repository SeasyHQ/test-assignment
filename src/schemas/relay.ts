import { gql } from "apollo-server-koa";

// eslint-disable-next-line import/prefer-default-export
export const schema = gql`
  # An object with an ID
  interface Node {
    # The id of the object.
    id: ID!
  }

  # Information about pagination in a connection.
  type PageInfo {
    # When paginating forwards, are there more items?
    hasNextPage: Boolean

    # When paginating backwards, are there more items?
    hasPreviousPage: Boolean

    # When paginating backwards, the cursor to continue.
    startCursor: String

    # When paginating forwards, the cursor to continue.
    endCursor: String
  }
`;
