/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MarinaDetailQueryVariables = {
    id: string;
};
export type MarinaDetailQueryResponse = {
    readonly marina: {
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
};
export type MarinaDetailQuery = {
    readonly response: MarinaDetailQueryResponse;
    readonly variables: MarinaDetailQueryVariables;
};



/*
query MarinaDetailQuery(
  $id: ID!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Marina",
    "kind": "LinkedField",
    "name": "marina",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarinaDetailQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarinaDetailQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "efc0f5dda1afda46c21d418799629094",
    "id": null,
    "metadata": {},
    "name": "MarinaDetailQuery",
    "operationKind": "query",
    "text": "query MarinaDetailQuery(\n  $id: ID!\n) {\n  marina(id: $id) {\n    id\n    name\n    photo {\n      id\n      url\n    }\n    city {\n      id\n      lat\n      lon\n      code\n    }\n    country {\n      id\n      code\n    }\n    amenities {\n      id\n      code\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f2f654bdff5ec4247efbedf8f371325d';
export default node;
