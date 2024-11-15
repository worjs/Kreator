import router from "router";
import { RouterProvider } from "react-router-dom";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const ENV_ID = "44b54ab2-35f1-468d-841b-49bfabef07d2";
export default function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: ENV_ID,
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <RouterProvider router={router} />
    </DynamicContextProvider>
  );
}
