import { countryDb } from "../types/GeneratedDb";
import kx from "./kx";

export const getCountryBase = () => kx<countryDb>("country");
