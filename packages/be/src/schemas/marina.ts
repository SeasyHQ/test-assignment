import { gql, IResolverObject } from "apollo-server-koa";
import { toGlobalId } from "graphql-relay";

import type { cityDb } from "../types/GeneratedDb";
import { MarinaResolvers } from "../types/GeneratedGql";
import { getCityBase } from "../db/city";

export const TYPE = "Marina";

export const schema = gql`
  type ${TYPE} implements Node {
    id: ID!
    name: String!
    city: City
    country: Country
    lat: Float!
    lon: Float!
    photo: Photo
    amenities: [Amenity]
  }

  input Add${TYPE}Input {
    id: ID!
    # TODO
  }

  type ${TYPE}Payload {
    marina: ${TYPE}
  }
`;

export const resolver: MarinaResolvers = {
  id: ({ id }) => toGlobalId(TYPE, String(id)),
  city: ({ cityCode }) => getCityBase().where({ code: cityCode }).first()
  // TODO:
};
