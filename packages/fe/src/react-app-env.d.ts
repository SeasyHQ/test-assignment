/// <reference types="react-scripts" />
// src/react-app-env.d.ts
declare module 'babel-plugin-relay/macro' {
	// export { graphql } from 'react-relay'
  export { graphql as default } from "react-relay";
}
