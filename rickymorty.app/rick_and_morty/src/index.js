import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom' ;
import store from './Redux/store/store';
import { Provider } from 'react-redux';

const root= ReactDOM.createRoot(document.getElementById('root')); 
// importante guarda en constante  a root

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
 
)


// react-redux: importamos store, provider. provide encierra toda la aplicacion con la propiedad store = el que cree
 