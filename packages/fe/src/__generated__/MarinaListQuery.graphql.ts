/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MarinaListQueryVariables = {};
export type MarinaListQueryResponse = {
    readonly marinas: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
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
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Marina",
    "kind": "LinkedField",
    "name": "marinas",
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
        "name": "name",
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
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MarinaListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "946a0736d178d80c2050413ecb4f6b1e",
    "id": null,
    "metadata": {},
    "name": "MarinaListQuery",
    "operationKind": "query",
    "text": "query MarinaListQuery {\n  marinas {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b5e576de9d78c837a5d48724fbead9d0';
export default node;
