import { amenityDb } from "../types/GeneratedDb";
import kx from "./kx";

export const getAmenityByMarinaId = (marinaId: number) => {
  return getAmenityBase()
    .join(
      "marina_and_amenity",
      "amenity.code",
      "marina_and_amenity.amenity_code"
    )
    .where("marina_id", marinaId)
    .select("code");
};

export const getAmenityBase = () => kx<amenityDb>("amenity");
