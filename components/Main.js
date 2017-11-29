export default ({ children }) => (
  <div className='main'>
    { children }
    <style jsx>
      {`
        .main {
          grid-area: content;
          padding-top: 80px;
          margin: auto;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </div>
)
