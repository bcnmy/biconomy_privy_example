import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PrivyProvider } from "@privy-io/react-auth";
import {sepolia, polygonAmoy} from 'viem/chains';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrivyProvider
        appId="clw95bhbz05cbua5qmnnx60zo" //Use your own appId from https://dashboard.privy.io/
        config={{
          supportedChains: [sepolia, polygonAmoy], // <-- Add your supported chains here
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
            noPromptOnSignature: true,
          },
          loginMethods: ["email", "google", "twitter", "discord", "apple"], // <-- Add your supported login methods here
        }}
      >
        <Component {...pageProps} />
      </PrivyProvider>
    </>
  );
}
