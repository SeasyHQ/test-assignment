import { gql } from "apollo-server-koa";
import { getMarinaBase } from "../db/marina";
import { QueryResolvers } from "../types/GeneratedGql";

export const schema = gql`
  type Query {
    marinas: [Marina!]
    cities: [City!]
    countries: [Country!]
    amenities: [Amenity!]
    photos: [Photo!]
  }
`;

export const resolver: QueryResolvers = {
  marinas: () => getMarinaBase(),
  // TODO:
};
