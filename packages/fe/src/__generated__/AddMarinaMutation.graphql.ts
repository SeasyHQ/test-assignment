/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddMarinaInput = {
    name: string;
    photoUrl?: string | null;
    lat: number;
    lon: number;
    city: string;
    country: string;
    amenities?: Array<string> | null;
};
export type AddMarinaMutationVariables = {
    input: AddMarinaInput;
};
export type AddMarinaMutationResponse = {
    readonly addMarina: {
        readonly marina: {
            readonly id: string;
        } | null;
    } | null;
};
export type AddMarinaMutation = {
    readonly response: AddMarinaMutationResponse;
    readonly variables: AddMarinaMutationVariables;
};



/*
mutation AddMarinaMutation(
  $input: AddMarinaInput!
) {
  addMarina(input: $input) {
    marina {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MarinaPayload",
    "kind": "LinkedField",
    "name": "addMarina",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Marina",
        "kind": "LinkedField",
        "name": "marina",
        "plural": false,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddMarinaMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddMarinaMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1b51e16d567211a0f71abb9f1b210737",
    "id": null,
    "metadata": {},
    "name": "AddMarinaMutation",
    "operationKind": "mutation",
    "text": "mutation AddMarinaMutation(\n  $input: AddMarinaInput!\n) {\n  addMarina(input: $input) {\n    marina {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4e17c4add4ebfb5ad685a76298bb91b7';
export default node;
