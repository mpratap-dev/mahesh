import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/global.css";

const App = ({ Component, pageProps }) => (
  <div className="h-screen bg-gray-100 dark:bg-gray-800">
    <Head>
      <title> Mahesh Pratap | UI / UX & Frontend Developer </title>{" "}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div
      className="md:mx-12 bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-auto platform content"
    >
      <Component {...pageProps} />
    </div>
  </div>
);

export default App;
