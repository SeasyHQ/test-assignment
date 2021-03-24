import { marinaDb } from "../types/GeneratedDb";
import kx from "./kx";

export const getMarinaBase = () => kx<marinaDb>("marina");
