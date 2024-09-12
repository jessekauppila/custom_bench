import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Nook</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div>
        <h2>How to use this tool:</h2>
        <p>
          Step 1: Enter the location of windows measuring from the
          corner of the room to closest edge of the window frame. Then
          measure from the floor to the bottom of the window frame.
        </p>
        <p>
          Step 2: Measure the height and width of your baseboard.
          Enter that to allow the benches to conform to the baseboard
          and sit flush with the walls of your home.
        </p>
        <p>
          Step 3: Enter your desired bench lengths and widths. Adjust
          the height of the benches to accommodate for the location of
          the windows.
        </p>
      </div>

      <div class="responsive-iframe-container"></div>
      <iframe
        id="sdv-iframe"
        width="100%"
        height="100%"
        src="https://www.shapediver.com/app/iframe/bench-v3-with-walls-and-windows?primaryColor=%23C3A977&secondaryColor=%23393A45&surfaceColor=%23FFFFFF&backgroundColor=%23F8F8F8&showControls=1&showZoomButton=1&showFullscreenButton=1&showToggleControlsButton=1&hideDataOutputsIframe=1&hideAttributeVisualizationIframe=1&parametersDisable=1&parametersValidation=0"
        referrerpolicy="origin"
        allowfullscreen
        style={{
          flex: 1,
          overflowX: 'hidden',
          overflowY: 'hidden',
          borderWidth: '0',
        }}
      ></iframe>

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
