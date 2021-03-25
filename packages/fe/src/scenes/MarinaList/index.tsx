import React from "react";
import { useQuery } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";

import { MarinaListQuery } from "__generated__/MarinaListQuery.graphql";

export default function MarinaList() {
  const { data } = useQuery<MarinaListQuery>(
    graphql`
      query MarinaListQuery {
        marinas {
          id
          name
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
      <div>MarinaList</div>
      <div>
        <pre>{JSON.stringify(data || {}, null, 2)}</pre>
      </div>
    </>
  );
}
