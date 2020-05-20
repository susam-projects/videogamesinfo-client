import Head from "next/head";
import { Header } from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Video Games Info</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main>Test</main>
      </div>
    </>
  );
}
