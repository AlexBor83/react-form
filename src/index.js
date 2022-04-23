import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app'

//import reportWebVitals from './reportWebVitals';

//const elem = React.createElement('h2', {className: '10'}, 'Hello!')
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);




