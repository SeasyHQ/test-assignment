import { RecordSource, Store, Environment } from "relay-runtime";
import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  retryMiddleware,
  // authMiddleware,
  cacheMiddleware,
  errorMiddleware
  // uploadMiddleware,
} from "react-relay-network-modern";

export function makeRelayEnvironment() {
  // const clientMiddleware = new RelayClient();

  const network = new RelayNetworkLayer([
    loggerMiddleware({
      // ...args spread breaks drop_console
      logger: (arg1: unknown, arg2: unknown, arg3: unknown) => {
        // https://github.com/terser/terser/issues/323
        // https://github.com/relay-tools/react-relay-network-modern/blob/master/src/middlewares/logger.js#L13
        // https://github.com/relay-tools/react-relay-network-modern/issues/118
        console.log("[RELAY-NETWORK]", arg1, arg2, arg3);
      },
    }),
    errorMiddleware({
      logger: (e: Error) => {
        console.error(e);
        // captureException(e);
      }
    }),
    urlMiddleware({
      url: String(process.env.GQL_URL),
      method: "POST",
      // credentials: "include",
      mode: "cors",
      cache: "no-cache"
    }),
    retryMiddleware({
      fetchTimeout: 3000,
      statusCodes: [500, 503, 504],
    }),
    cacheMiddleware({
      ttl: 0,
      size: 100,
      clearOnMutation: true
    })
  ]);

  return {
    environment: new Environment({
      network,
      store: new Store(new RecordSource())
    })
  };
}
