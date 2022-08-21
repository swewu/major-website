import "bootstrap/dist/css/bootstrap.css";
import "../public/style/style.css"

import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
