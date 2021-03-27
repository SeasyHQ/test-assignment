import { gql, IResolverObject } from "apollo-server-koa";

import { PhotoResolvers } from "../types/GeneratedGql";

export const TYPE = "Photo";

export const schema = gql`
  type ${TYPE} implements Node {
    id: ID!
    url: String!
  }
`;

export const resolver: PhotoResolvers = {};
