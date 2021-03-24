import { gql, IResolverObject } from "apollo-server-koa";
import { toGlobalId } from "graphql-relay";

import type { cityDb } from "../types/GeneratedDb";
import { CityResolvers } from "../types/GeneratedGql";

export const TYPE = "City";

export const schema = gql`
  type ${TYPE} implements Node {
    id: ID!
    code: String!
    country: Country!
    lat: Float!
    lon: Float!
  }
`;

export const resolver: CityResolvers = {};
