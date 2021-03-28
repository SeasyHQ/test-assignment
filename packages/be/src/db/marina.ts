import { marinaDb, cityDb, countryDb, photoDb, marinaAndAmenityDb } from "../types/GeneratedDb";
import { MutationAddMarinaArgs } from "../types/GeneratedGql";

import kx from "./kx";
import { getOrCreateEntity } from "./utils";

export const getMarinaBase = () => {
  return kx<marinaDb>("marina");
};

export const getMarinaById = (id: number) => {
  return getMarinaBase()
    .where("id", id)
    .first();
};

export const saveMarinaToDb = async (input: MutationAddMarinaArgs["input"]) => {
  const countryPromise = getOrCreateEntity<countryDb>(
    "country",
    "code",
    input.country,
    {}
  );
  const cityPromise = getOrCreateEntity<cityDb>("city", "code", input.city, {
    countryCode: input.country,
    lat: input.lat,
    lon: input.lon,
  });
  let photoPromise: Promise<photoDb | null> = Promise.resolve(null);
  if (input.photoUrl) {
    photoPromise = getOrCreateEntity<photoDb>("photo", "url", input.photoUrl, {
      url: input.photoUrl,
    });
  }

  return Promise.all([countryPromise, cityPromise, photoPromise]).then(
    ([country, city, photo]) => {
      return kx<marinaDb>("marina").insert({
        name: input.name,
        cityCode: city.code,
        lat: city.lat,
        lon: city.lon,
        countryCode: country.code,
        photoId: photo ? photo.id : undefined,
      });
    }
  ).then(marina => {
    const marinaId = marina[0];
    const marinaAndAmenity = input.amenities ? input.amenities.map(code => ({marinaId, amenityCode: code})) : null;
    let amenitiesPromise = Promise.resolve();
    if (marinaAndAmenity) {
      amenitiesPromise = kx<marinaAndAmenityDb>("marina_and_amenity").insert(marinaAndAmenity);
    }
    return Promise.all([Promise.resolve(marina), amenitiesPromise]);
  });
};
