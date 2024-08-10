// import "./styles.css";
// // import BootStrapClient from "../components/BootstrapClient";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
//   <BootStrapClient />;
// }

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return <Component {...pageProps} />;
}
