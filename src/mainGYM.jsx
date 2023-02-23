import React from 'react'
import ReactDOM from 'react-dom/client'
import {coach} from './users'
import { back } from './functions/functions'
import { LogIn, Header, Option, Menu, ActionsGYM } from './components/App'
import "./components/styles.css"
const dom = ReactDOM.createRoot(document.getElementById('root'));

const sessionAdmin = localStorage.getItem("sessionAdmin") || null;

if (sessionAdmin == null) {
  dom.render(
    <React.StrictMode>
      <Header />
      <Menu tittle="GYM">
        <LogIn section={coach}/>
      </Menu>
    </React.StrictMode>,
  )
}
else {
  dom.render(
    <React.StrictMode>
      <Header />
      <Menu tittle="GYM">
        <ActionsGYM />
      </Menu>
    </React.StrictMode>,
  )
}