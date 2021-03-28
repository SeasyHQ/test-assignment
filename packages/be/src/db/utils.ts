import kx from "./kx";

export const getOrCreateEntity = <T>(
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
