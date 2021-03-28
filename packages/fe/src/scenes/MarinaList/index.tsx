import React from "react";
import { useQuery } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";
import { Routes } from "routes";

import { MarinaListQuery } from "__generated__/MarinaListQuery.graphql";

import styles from "./marina-list.module.scss";
import Amenity from "components/amenity";

export default function MarinaList() {
  const { data } = useQuery<MarinaListQuery>(
    graphql`
      query MarinaListQuery {
        marinas {
          id
          name
          photo {
            id
            url
          }
          city {
            id
            lat
            lon
            code
          }
          country {
            id
            code
          }
          amenities {
            id
            code
          }
        }
      }
    `,
    {},
    {
      fetchPolicy: "store-and-network",
    }
  );

  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.h1}>CROATIA</h1>
        <div className={styles.count}>
          {data?.marinas?.length ? data?.marinas?.length - 1 : 130}+ marines for
          booking
        </div>
      </div>
      <div className={styles.marinas}>
        {data?.marinas?.map((marina, index) => (
          <div key={marina.id} className={styles.marinaCard}>
            <div className={styles.relativeWrapper}>
              <img
                alt={marina.name}
                src={
                  marina.photo?.url ||
                  `https://picsum.photos/290/180.webp?random=${index}`
                }
                className={styles.cardImage}
              />
              <div className={styles.amenities}>
                {marina.amenities
                  ? marina.amenities.map((amenity) => (
                      <Amenity
                        isInline={false}
                        amenity={amenity!}
                      />
                    ))
                  : null}
              </div>
            </div>
            <div className={styles.locationRow}>
              <span className={styles.location}>{marina.city?.code}</span> |{" "}
              <span className={styles.location}>{marina.country?.code}</span>
            </div>
            <Link
              className={styles.name}
              to={Routes.getTo(Routes.MARINA_DETAIL, { id: marina.id })}
            >
              {marina.name}
            </Link>
            <div className={styles.price}>76&euro; per night</div>
          </div>
        ))}
      </div>
    </>
  );
}
