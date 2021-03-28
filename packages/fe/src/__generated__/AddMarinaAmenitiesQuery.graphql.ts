/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddMarinaAmenitiesQueryVariables = {};
export type AddMarinaAmenitiesQueryResponse = {
    readonly amenities: ReadonlyArray<{
        readonly id: string;
        readonly code: string;
    }> | null;
};
export type AddMarinaAmenitiesQuery = {
    readonly response: AddMarinaAmenitiesQueryResponse;
    readonly variables: AddMarinaAmenitiesQueryVariables;
};



/*
query AddMarinaAmenitiesQuery {
  amenities {
    id
    code
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Amenity",
    "kind": "LinkedField",
    "name": "amenities",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "code",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddMarinaAmenitiesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AddMarinaAmenitiesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "270e6a2e1e36a974eb16a4ce5bfb2e54",
    "id": null,
    "metadata": {},
    "name": "AddMarinaAmenitiesQuery",
    "operationKind": "query",
    "text": "query AddMarinaAmenitiesQuery {\n  amenities {\n    id\n    code\n  }\n}\n"
  }
};
})();
(node as any).hash = '92b725d718b47a30b8135f8b6f36eeb8';
export default node;
