import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useQuery } from "relay-hooks";
import { useRouteMatch } from "react-router";
import { MarinaDetailQuery } from "__generated__/MarinaDetailQuery.graphql";

export default function MarinaDetail() {
  const match = useRouteMatch<{id: string}>();

  const { data, error } = useQuery<MarinaDetailQuery>(
    graphql`
      query MarinaDetailQuery($id: ID!) {
        marina(id: $id) {
          id
          name
        }
      }
    `,
    {id: match.params.id},
    {
      fetchPolicy: "store-and-network"
    }
  );

  return <>MarinaDetail
  
  {JSON.stringify(data)}
  {JSON.stringify(error)}
  </>;
}
