import Head from 'next/head'

export default ({ children }) => (
  <div className='container'>
    <Head>
      <meta name='viewport' content='initial-scale=0.8, maximum-scale=0.8, minimum-scale=0.8 user-scalable=no, width=device-width' />
      <link href='/static/cropper.css' rel='stylesheet' />
    </Head>
    { children }
    <style jsx global>
      {`
        body {
          background: #f2f2f2;
          font-family: Roboto, sans-serif;
          margin: 0;
          padding: 0;
          height: 100%;
          text-align: center;
        }
        h1 {
          font-weight: 400;
          font-size: 24px;
        }
        a {
          text-decoration: none;
          color: black;
        }
        .container {
          display: grid;
          grid-template-areas:
            "header header header"
            ". content ."
            "footer footer footer";
          grid-template-columns: 1fr 2fr 1fr;
          grid-template-rows: auto 1fr auto;
        }
        .center {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media screen and (max-width: 800px) {
          .container {
            grid-template-columns: 3% 1fr 3%;
          }
      `}
    </style>
  </div>
)
