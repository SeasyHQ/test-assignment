import { amenityDb } from "../types/GeneratedDb";
import kx from "./kx";

export const getAmenityBase = () => kx<amenityDb>("amenity");
