import React from 'react'
import ReactDOM from 'react-dom/client'
import {receptionist} from './users'
import { back } from './functions/functions'
import { LogIn, Header, Option, Menu, ActionsReception } from './components/App'
import "./components/styles.css"
const dom = ReactDOM.createRoot(document.getElementById('root'));

const sessionAdmin = localStorage.getItem("sessionAdmin") || null;

if (sessionAdmin == null) {
  dom.render(
    <React.StrictMode>
      <Header />
      <Menu tittle="RECEPCION">
        <LogIn section={receptionist}/>
      </Menu>
    </React.StrictMode>,
  )
}
else {
  dom.render(
    <React.StrictMode>
      <Header />
      <Menu tittle="RECEPCION">
        <ActionsReception/>
      </Menu>
    </React.StrictMode>,
  )
}