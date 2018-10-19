import serialize from 'serialize-javascript'

export default ({ markup, js, styleTags, store, helmet }) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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
