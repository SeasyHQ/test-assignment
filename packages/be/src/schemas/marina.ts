import { gql, IResolverObject } from "apollo-server-koa";
import { toGlobalId } from "graphql-relay";

import { MarinaResolvers } from "../types/GeneratedGql";
import { getCityBase } from "../db/city";
import { getCountryBase } from "../db/country";
import { getAmenityByMarinaId } from "../db/amenity";

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
    name: String!
    photoUrl: String
    lat: Float!
    lon: Float!
    city: String!
    country: String!
    amenities: [String!]
  }

  type ${TYPE}Payload {
    marina: ${TYPE}
  }
`;

export const resolver: MarinaResolvers = {
  id: ({ id }) => toGlobalId(TYPE, String(id)),
  city: ({ cityCode }) =>
    getCityBase()
      .where({ code: cityCode })
      .first(),
  country: ({ countryCode }) =>
    getCountryBase()
      .where({ code: countryCode })
      .first(),
  amenities: ({ id }) => getAmenityByMarinaId(id),
};
