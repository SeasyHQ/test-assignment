import { marinaDb } from "../types/GeneratedDb";
import kx from "./kx";

export const getMarinaById = (id: number) => {
  return getMarinaBase()
    .where("id", id)
    .first();
};

export const getMarinaBase = () => {
  return kx<marinaDb>("marina");
};
