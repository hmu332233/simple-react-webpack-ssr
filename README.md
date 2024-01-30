# Simple React Webpack Ssr

단순한 구조의 React SSR 구조입니다.  
이해를 돕기 위해 간단한 구조로 만들어져있습니다.

이해를 위한 가장 쉬운 순서

- 서버에서 실행되기 위한 파일을 webpack으로 빌드합니다.
  - server.entry.jsx
  - webpack.config.js - serverConfig 설정 (target: node)
- 브라우저에서 실행되기 위한 파일을 webpack으로 빌드합니다.

  - client.entry.jsx
  - webpack.config.js - clientConfig 설정 (target: web)

- client용과 server용으로 빌드된 파일을 각각 목적에 맞게 사용합니다.
  - client용 - static 파일로 제공
  - server용 - express 서버에서 실행하여 html 생성

## 디렉토리 구조

```
|-- src
    |-- client
    |   |-- apps
    |   |   |-- AdminApp
    |   |   |   |-- App.jsx // 실제 컴포넌트
    |   |   |   |-- client.entry.jsx // 브라우저에서 랜더링될 파일 (hydrate)
    |   |   |   |-- server.entry.jsx // 서버에서 사용될 파일 (renderToString)
    |-- server
    |   |-- app.js // express 서버 (express.static, express.Router)
|-- webpack.config.js // webpack 설정 - client, server
```
