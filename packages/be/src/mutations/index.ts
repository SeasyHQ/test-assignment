import { gql } from "apollo-server-koa";

import * as marina from "./marina";

export const schema = gql`
  type Mutation {
    addMarina(input: AddMarinaInput!): MarinaPayload
  }
`;

export const resolver = {
  addMarina: marina.addMarina,
};
