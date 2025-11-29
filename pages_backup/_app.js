import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/global.css";

const App = ({ Component, pageProps }) => (
  <div className="h-screen bg-gray-100 dark:bg-gray-900">
    <Head>
      <title> Mahesh Pratap | UI / UX & Frontend Developer </title>{" "}
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&display=swap" rel="stylesheet"/>
    </Head>
    <Nav />
    <div
      className="md:mx-12 bg-white dark:bg-gray-950 shadow-lg rounded-t-2xl overflow-auto platform content"
    >
      <Component {...pageProps} />
    </div>
  </div>
);

export default App;
