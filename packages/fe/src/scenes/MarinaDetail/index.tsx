import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useQuery } from "relay-hooks";
import { useRouteMatch } from "react-router";
import { MarinaDetailQuery } from "__generated__/MarinaDetailQuery.graphql";

import styles from './marina-detail.module.scss';
import Amenity from "components/amenity";

export default function MarinaDetail() {
  const match = useRouteMatch<{id: string}>();

  const { data, error } = useQuery<MarinaDetailQuery>(
    graphql`
      query MarinaDetailQuery($id: ID!) {
        marina(id: $id) {
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
    {id: match.params.id},
    {
      fetchPolicy: "store-and-network"
    }
  );

  const marina = data?.marina;
  return marina ? (<div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
    <img src={marina.photo?.url} className={styles.image} />

    </div>
    <div className={styles.info}>
      <div className={styles.sections}>
        <div className={styles.section1}>
          <div className={styles.type}>MARINA &middot; 16.6 mi</div>
          <h1 className={styles.name}> {marina.name} </h1>
          <div className={styles.location}>{marina.country?.code} &middot; {marina.city?.code} </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.section3}>
            <div className={styles.label}>Berths available</div>
            <div className={styles.value}>37/256</div>

            <div className={styles.label}>Depth </div>
            <div className={styles.value}>2.5 - 20m</div>
          </div>
          <div className={styles.section4}>
          <div className={styles.label}>Reservation</div>
            <div className={styles.value}>Possible</div>

            <div className={styles.label}>Type of berthing</div>
            <div className={styles.value}>Mooring line</div>
          </div>
        </div>
      </div>

      <div className={styles.about}>
      <p>Bacon ipsum dolor amet venison tongue swine, rump jowl chislic turkey chicken. Ball tip turducken short ribs salami fatback beef ribs, pork belly venison burgdoggen tri-tip. Pork belly tri-tip pork chop burgdoggen bacon ham tenderloin, andouille swine short ribs fatback ground round chuck ball tip ham hock. Capicola sausage turducken, flank corned beef tri-tip pastrami prosciutto chicken jowl short ribs biltong pig. Chuck pork sirloin, jerky strip steak pastrami shank porchetta. Biltong ham hock corned beef swine picanha ribeye jowl tenderloin kevin beef ribs boudin pork belly. Prosciutto jerky leberkas, shank fatback strip steak filet mignon sirloin kielbasa.</p>
      <p>Tri-tip pig venison buffalo shoulder landjaeger fatback kielbasa pork loin turducken ground round alcatra frankfurter meatloaf. Shankle buffalo salami, beef ball tip pork belly pork chop cow porchetta corned beef fatback frankfurter t-bone. Landjaeger porchetta sirloin venison. Ground round hamburger turducken prosciutto jerky, cow ball tip rump pig meatloaf corned beef. Bresaola bacon filet mignon flank hamburger jowl ham t-bone jerky. Chicken corned beef frankfurter leberkas ball tip shank tail venison jerky pork chop capicola chuck. Beef salami short loin picanha.</p>
      </div>


      {marina.amenities ? (<div className={styles.amenities}>
        <h2 className={styles.amenitiesTitle}>Amenities</h2>
        {marina.amenities.map(amenity => (
        <Amenity amenity={amenity!} isInline={true} />
      ))}</div>) : null}


    </div>

  </div>) :null;
}
