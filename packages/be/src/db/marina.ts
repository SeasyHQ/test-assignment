import { marinaDb, cityDb, countryDb, photoDb } from "../types/GeneratedDb";
import kx from "./kx";
import { MutationAddMarinaArgs } from "../types/GeneratedGql";

export const getMarinaById = (id: number) => {
  return getMarinaBase()
    .where("id", id)
    .first();
};

export const getMarinaBase = () => {
  return kx<marinaDb>("marina");
};

const getOrCreateEntity = <T>(
  tableName: string,
  whereArgName: string,
  whereArgValue: string,
  extraDataToInsert: Partial<T>
) => {
  return kx
    .transaction<T[]>((trx) => {
      trx<T>(tableName)
        .where(whereArgName, whereArgValue)
        .then((res) => {
          if (res.length === 0) {
            return kx(tableName)
              .transacting(trx)
              .insert({ [whereArgName]: whereArgValue, ...extraDataToInsert })

              .then(() => {
                return trx(tableName).where(whereArgName, whereArgValue);
              });
          } else {
            return res;
          }
        })
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .then((res) => {
      return res[0];
    });
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
  );
};
