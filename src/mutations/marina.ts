import { ApolloError } from "apollo-server-koa";
import { fromGlobalId } from "graphql-relay";

import { ApolloContext } from "../types/ApolloContext";
import { MutationAddMarinaArgs } from "../types/GeneratedGql";

export const addMarina = async (
  parent: unknown,
  { input }: MutationAddMarinaArgs,
  ctx: ApolloContext
) => {
  const dbId = fromGlobalId(input.id);

  // TODO:
};
