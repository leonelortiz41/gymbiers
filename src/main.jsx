import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header, Menu, Option} from './components/App'
// import "./components/styles.css"
window.onload = function() {
  localStorage.clear();
 }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Menu>
    <a href='administration.html' className='ir option'>ir a administracion</a>
    <a href='reception.html' className='ir option'>ir a recepcion</a>
    <a href='GYM.html' className='ir option'>ir a GYM</a>
    </Menu>
  </React.StrictMode>,
)
