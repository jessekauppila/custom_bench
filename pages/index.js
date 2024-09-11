import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: '100vh', width: '90%' }}>
        <iframe
          id="sdv-iframe"
          width="100%"
          height="100%"
          src="https://www.shapediver.com/app/iframe/benche?primaryColor=%23317DD4&secondaryColor=%23393A45&surfaceColor=%23FFFFFF&backgroundColor=%23F8F8F8&showControls=1&showZoomButton=1&showFullscreenButton=1&showToggleControlsButton=1&hideDataOutputsIframe=1&hideAttributeVisualizationIframe=1&parametersDisable=1&parametersValidation=0"
          referrerpolicy="origin"
          allowfullscreen
          style={{
            flex: 1,
            overflowX: 'hidden',
            overflowY: 'hidden',
            borderWidth: '0',
          }}
        ></iframe>
      </main>

      <footer>
        <a
        // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        // target="_blank"
        // rel="noopener noreferrer"
        >
          Jesse's Bench Example for Simon
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body,
        #__next,
        .${styles.container} {
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
