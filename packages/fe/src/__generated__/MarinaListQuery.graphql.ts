/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MarinaListQueryVariables = {};
export type MarinaListQueryResponse = {
    readonly marinas: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly photo: {
            readonly id: string;
            readonly url: string;
        } | null;
        readonly city: {
            readonly id: string;
            readonly lat: number;
            readonly lon: number;
            readonly code: string;
        } | null;
        readonly country: {
            readonly id: string;
            readonly code: string;
        } | null;
        readonly amenities: ReadonlyArray<{
            readonly id: string;
            readonly code: string;
        } | null> | null;
    }> | null;
};
export type MarinaListQuery = {
    readonly response: MarinaListQueryResponse;
    readonly variables: MarinaListQueryVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Marina",
    "kind": "LinkedField",
    "name": "marinas",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Photo",
        "kind": "LinkedField",
        "name": "photo",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "City",
        "kind": "LinkedField",
        "name": "city",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lon",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Amenity",
        "kind": "LinkedField",
        "name": "amenities",
        "plural": true,
        "selections": (v2/*: any*/),
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
    "name": "MarinaListQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MarinaListQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a5ca6407af3aa3f3fab2c191da2b56a3",
    "id": null,
    "metadata": {},
    "name": "MarinaListQuery",
    "operationKind": "query",
    "text": "query MarinaListQuery {\n  marinas {\n    id\n    name\n    photo {\n      id\n      url\n    }\n    city {\n      id\n      lat\n      lon\n      code\n    }\n    country {\n      id\n      code\n    }\n    amenities {\n      id\n      code\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '12f5bb457250f69fbd705114da4eb754';
export default node;
