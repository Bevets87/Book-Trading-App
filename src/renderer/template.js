import serialize from 'serialize-javascript'

export default ({ markup, js, styleTags, store, helmet }) => `
  <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${styleTags}
    </head>
    <body>
      <div id="app">${markup}</div>
      <script>
        window.REDUX_STATE = ${serialize(store.getState())}
      </script>
      ${js}
    </body>
  </html>
`
