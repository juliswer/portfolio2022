import '../styles/global.css'
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
  );
}

export default MyApp;
