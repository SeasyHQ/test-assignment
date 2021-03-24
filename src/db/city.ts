import { cityDb } from "../types/GeneratedDb";
import kx from "./kx";

export const getCityBase = () => kx<cityDb>("city");
