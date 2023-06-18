import Head from "next/head";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My First Next.js App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
