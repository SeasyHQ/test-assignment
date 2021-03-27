import { gql } from "apollo-server-koa";
import { getMarinaBase, getMarinaById } from "../db/marina";
import { QueryResolvers } from "../types/GeneratedGql";
import { fromGlobalId } from "graphql-relay";
import { getAmenityBase } from "../db/amenity";
import { getCityBase } from "../db/city";
import { getCountryBase } from "../db/country";
import { getPhotoBase } from "../db/photo";

export const schema = gql`
  type Query {
    marinas: [Marina!]
    cities: [City!]
    countries: [Country!]
    amenities: [Amenity!]
    photos: [Photo!]

    marina(id: ID!): Marina
  }
`;

export const resolver: QueryResolvers = {
  marinas: () => getMarinaBase(),
  marina: (parent, args) => getMarinaById(parseInt(fromGlobalId(args.id).id)),

  amenities: () => getAmenityBase(),
  cities: () => getCityBase(),
  countries: () => getCountryBase(),
  photos: () => getPhotoBase()
};
