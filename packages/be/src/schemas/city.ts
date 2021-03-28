import { gql, IResolverObject } from "apollo-server-koa";
import { toGlobalId } from "graphql-relay";

import { CityResolvers } from "../types/GeneratedGql";
import { getCountryBase } from "../db/country";

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

export const resolver: CityResolvers = {
  id: ({ code }) => toGlobalId(TYPE, code),
  country: ({ countryCode }) =>
    getCountryBase().where("code", countryCode).first(),
};
