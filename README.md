# Simple React Webpack SSR

[한국어](README.KR.md)

This is a simple structure for React Server-Side Rendering (SSR).  
It is designed to be straightforward for easier understanding.

The easiest sequence to understand:

- Build files for server execution using Webpack.
  - server.entry.jsx
  - webpack.config.js - serverConfig settings (target: node)
- Build files for browser execution using Webpack.

  - client.entry.jsx
  - webpack.config.js - clientConfig settings (target: web)

- Use the files built for client and server according to their purposes.
  - Client-side - serve as static files
  - Server-side - run on the express server to generate HTML

## Directory Structure

```
|-- src
    |-- client
    |   |-- apps
    |   |   |-- AdminApp
    |   |   |   |-- App.jsx // Actual component
    |   |   |   |-- client.entry.jsx // File to be rendered in the browser (hydrate)
    |   |   |   |-- server.entry.jsx // File to be used on the server (renderToString)
    |-- server
    |   |-- app.js // Express server (express.static, express.Router)
|-- webpack.config.js // Webpack configuration - client, server
```
