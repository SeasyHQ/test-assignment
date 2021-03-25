/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MarinaListQueryVariables = {};
export type MarinaListQueryResponse = {
    readonly marinas: ReadonlyArray<{
        readonly id: string;
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
    "cacheID": "c35311f7e5f6096afbb1468f3f8b6414",
    "id": null,
    "metadata": {},
    "name": "MarinaListQuery",
    "operationKind": "query",
    "text": "query MarinaListQuery {\n  marinas {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '35355f335592b65d2bf6021c9c041d41';
export default node;
