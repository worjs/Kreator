import router from "router";
import { RouterProvider } from "react-router-dom";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const ENV_ID = "5db73098-1afa-49f7-8fec-6905f9b0d958";
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
