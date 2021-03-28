import { ApolloError } from "apollo-server-koa";
import { fromGlobalId } from "graphql-relay";
import * as Yup from "yup";

import { getMarinaBase, saveMarinaToDb } from "../db/marina";

import { ApolloContext } from "../types/ApolloContext";
import { MutationAddMarinaArgs } from "../types/GeneratedGql";

const schemaValidation = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .required("Required"),
  photoUrl: Yup.string().url(),
  lat: Yup.number().required("Required"),
  lon: Yup.number().required("Required"),
  city: Yup.string()
    .min(3)
    .required("Required"),
  country: Yup.string()
    .min(3)
    .required("Required"),
  amenities: Yup.array()
    .of(Yup.string().min(3))
    .required("Required"),
});

export const addMarina = async (
  parent: unknown,
  { input }: MutationAddMarinaArgs,
  ctx: ApolloContext
) => {
  return schemaValidation
    .isValid(input)
    .then((isValid) => {
      if (isValid) {
        return saveMarinaToDb(input);
      } else {
        throw new ApolloError("Invalid input arguments.");
      }
    })
    .then(async ([result]) => {
      if (result && result.length) {
        const marina = await getMarinaBase()
          .where({ id: result[0] })
          .first();
        return { marina };
      } else {
        throw new ApolloError("Marina not created.");
      }
    });
};
