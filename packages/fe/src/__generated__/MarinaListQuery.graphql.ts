/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MarinaListQueryVariables = {
    first?: number | null;
};
export type MarinaListQueryResponse = {
    readonly marinaConnection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
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
            } | null;
        } | null> | null;
        readonly pageInfo: {
            readonly hasNextPage: boolean | null;
            readonly endCursor: string | null;
        };
    } | null;
};
export type MarinaListQuery = {
    readonly response: MarinaListQueryResponse;
    readonly variables: MarinaListQueryVariables;
};



/*
query MarinaListQuery(
  $first: Int
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
      }
    ],
    "concreteType": "MarinaConnection",
    "kind": "LinkedField",
    "name": "marinaConnection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MarinaEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Marina",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
                  (v1/*: any*/),
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
                  (v1/*: any*/),
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
                  (v2/*: any*/)
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
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Amenity",
                "kind": "LinkedField",
                "name": "amenities",
                "plural": true,
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PageInfo",
        "kind": "LinkedField",
        "name": "pageInfo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasNextPage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endCursor",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarinaListQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarinaListQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "72f99122b78e4858f99ba2618441a60a",
    "id": null,
    "metadata": {},
    "name": "MarinaListQuery",
    "operationKind": "query",
    "text": "query MarinaListQuery(\n  $first: Int\n) {\n  marinaConnection(first: $first) {\n    edges {\n      node {\n        id\n        name\n        photo {\n          id\n          url\n        }\n        city {\n          id\n          lat\n          lon\n          code\n        }\n        country {\n          id\n          code\n        }\n        amenities {\n          id\n          code\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cdafb735a878fd6fa9df82594dae8bfd';
export default node;
