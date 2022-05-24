import Head from "next/head";
import Footer from "./footer";
import Logo from "./logo";

const Layout = ({ children }) => {
  return (
    <div className="content gridColumn">
      <Head>
        <title>rschubkegel</title>
        <meta
          name="description"
          content="An eclectic portfolio of projects by Rylan Schubkegel, designed and built by yours truly."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Logo />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
