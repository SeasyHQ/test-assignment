import React from "react";
import { useQuery } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";
import { Routes } from "routes";

import { MarinaListQuery } from "__generated__/MarinaListQuery.graphql";

import styles from './marina-list.module.scss';

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
        }
      }
    `,
    {},
    {
      fetchPolicy: "store-and-network"
    }
  );

  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.h1}>
          CROATIA
        </h1>
        <div className={styles.count}>{data?.marinas?.length ? data?.marinas?.length - 1 : 130}+ marines for booking</div>
      </div>
      <div className={styles.marinas}>
        {data?.marinas?.map((marina, index) => (
          <div key={marina.id} className={styles.marinaCard}>
            <Link
              to={Routes.getTo(Routes.MARINA_DETAIL, { id: marina.id })}
            >
              <img alt={marina.name} src={marina.photo?.url || `https://picsum.photos/290/180.webp?random=${index}`} className={styles.cardImage} />
              {marina.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
