import type { AppProps } from "next/app";

import { QueryProvider } from "@weather/lib/reactQuery";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
    </QueryProvider>
  );
}
