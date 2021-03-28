import React, { useState } from "react";
import { useQuery } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";
import { Routes } from "routes";

import { MarinaListQuery } from "__generated__/MarinaListQuery.graphql";

import styles from "./marina-list.module.scss";
import Amenity from "components/amenity";
import { Button } from "@material-ui/core";

export default function MarinaList() {
  const [first, setFirst] = useState(3);

  const { data } = useQuery<MarinaListQuery>(
    graphql`
      query MarinaListQuery($first: Int) {
        marinaConnection(first: $first) {
          edges {
            node {
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
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
    {first},
    {
      fetchPolicy: "store-and-network",
    }
  );



  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.h1}>CROATIA</h1>
        <div className={styles.count}>
           130+ marines for booking
        </div>
      </div>
      <div className={styles.marinas}>
        {data?.marinaConnection?.edges?.map((marinaEdge, index) => (
          <div key={marinaEdge?.node?.id} className={styles.marinaCard}>
            <div className={styles.relativeWrapper}>
              <img
                alt={marinaEdge?.node?.name}
                src={
                  marinaEdge?.node?.photo?.url ||
                  `https://picsum.photos/290/180.webp?random=${index}`
                }
                className={styles.cardImage}
              />
              {marinaEdge?.node?.amenities ? (
                <div className={styles.amenities}>
                  {marinaEdge?.node?.amenities.map((amenity) => (
                    <Amenity
                      key={amenity?.id}
                      isInline={false}
                      amenity={amenity!}
                    />
                  ))}
                </div>
              ) : null}
            </div>
            <div className={styles.locationRow}>
              <span className={styles.location}>{marinaEdge?.node?.city?.code}</span> |{" "}
              <span className={styles.location}>{marinaEdge?.node?.country?.code}</span>
            </div>
            <Link
              className={styles.name}
              to={Routes.getTo(Routes.MARINA_DETAIL, { id: marinaEdge?.node?.id })}
            >
              {marinaEdge?.node?.name}
            </Link>
            <div className={styles.price}>76&euro; per night</div>
          </div>
        ))}
      </div>
      <div className={styles.fetchMore}>
        <Button
          onClick={() => {
            setFirst(prev => prev + 3)
          }}
          disabled={!data?.marinaConnection?.pageInfo.hasNextPage}
        >

          Fetch More
        </Button>

      </div>
    </>
  );
}
