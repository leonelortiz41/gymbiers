import React from 'react'
import ReactDOM from 'react-dom/client'
import {admin} from './users'
import { useModal } from './hooks/useModal'
import { LogIn, Header, Option, Menu ,ActionsAdministration} from './components/App'
import "./components/styles.css"
import { Modal } from './components/Modals'
const dom = ReactDOM.createRoot(document.getElementById('root'));

const sessionAdmin = localStorage.getItem("sessionAdmin") || null;

  


if (sessionAdmin == null) {
  dom.render(
    <React.StrictMode>
      <Header />
      <Menu tittle="ADMINISTRACION">
        <LogIn section={admin}/>
      </Menu>
    </React.StrictMode>,
  )
}
else {
  dom.render(
    <React.StrictMode>
      <Header />
      <Menu tittle="ADMINISTRACION">
        <ActionsAdministration/>
      </Menu>
    </React.StrictMode>,
  )
}