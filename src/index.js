import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemecontextProvider from './contex/theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemecontextProvider>
      <App/>
    </ThemecontextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


