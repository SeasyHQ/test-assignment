import { ApolloError } from "apollo-server-koa";
import { fromGlobalId } from "graphql-relay";
import * as Yup from "yup";

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
  schemaValidation.isValid(input).then((result) => {
    console.log(result);
  });
};
