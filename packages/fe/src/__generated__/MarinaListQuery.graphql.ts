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
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
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
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MarinaListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "842950e155d323021942663a1f09c135",
    "id": null,
    "metadata": {},
    "name": "MarinaListQuery",
    "operationKind": "query",
    "text": "query MarinaListQuery {\n  marinas {\n    id\n    name\n    photo {\n      id\n      url\n    }\n    city {\n      id\n      lat\n      lon\n      code\n    }\n    country {\n      id\n      code\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '181d6ffd28367b54abce4a7dad70d815';
export default node;
