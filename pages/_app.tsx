import "normalize.css";
import "animate.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
      `}</style>
    </>
  );
}
