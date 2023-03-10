import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-primary bg-image-app bg-cover bg-center bg-no-repeat text-white backdrop-blur-lg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
