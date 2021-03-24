import { gql, IResolverObject } from "apollo-server-koa";
import { toGlobalId } from "graphql-relay";

import type { cityDb } from "../types/GeneratedDb";
import { AmenityResolvers } from "../types/GeneratedGql";

export const TYPE = "Amenity";

export const schema = gql`
  type ${TYPE} implements Node {
    id: ID!
    code: String!
  }
`;

export const resolver: AmenityResolvers = {};
