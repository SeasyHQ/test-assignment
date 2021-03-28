import { gql } from "apollo-server-koa";
import { getMarinaBase, getMarinaById } from "../db/marina";
import { QueryResolvers } from "../types/GeneratedGql";
import { fromGlobalId } from "graphql-relay";
import { getAmenityBase } from "../db/amenity";
import { getCityBase } from "../db/city";
import { getCountryBase } from "../db/country";
import { getPhotoBase } from "../db/photo";
import { marinaDb } from "../types/GeneratedDb";

export const schema = gql`
  type MarinaConnection {
    edges: [MarinaEdge]
    pageInfo: PageInfo!
  }

  type MarinaEdge {
    cursor: String!
    node: Marina
  }

  type Query {
    marinas: [Marina!]
    cities: [City!]
    countries: [Country!]
    amenities: [Amenity!]
    photos: [Photo!]

    marina(id: ID!): Marina

    marinaConnection(first: Int, after: String): MarinaConnection
  }
`;

export const resolver: QueryResolvers = {
  marinas: () => getMarinaBase(),
  amenities: () => getAmenityBase(),
  cities: () => getCityBase(),
  countries: () => getCountryBase(),
  photos: () => getPhotoBase(),

  marina: (parent, args) => getMarinaById(parseInt(fromGlobalId(args.id).id)),

  marinaConnection: async (parent, args) => {
    const first = args.first;
    const after = parseInt(args.after || "0"); // could be more opaque
    const length = (await getMarinaBase().count("id"))[0]['count(`id`)'] || 0;

    let marinasQuery = getMarinaBase().offset(after);
    if (first) {
      marinasQuery = getMarinaBase().offset(after).limit(first);
    }
    const marinas = await marinasQuery;

    return {
      edges: marinas.map((marina, index) => ({
        node: marina,
        cursor: `${index + after}`,
      })),
      pageInfo: {
        hasNextPage: first ? first + after < length : false,
        hasPreviousPage: after > 0,
        endCursor: first ? `${first + after}` : `${length}`,
        startCursor: `${after}`
      }
    };
  },
};
