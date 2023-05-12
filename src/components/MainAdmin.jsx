import React from 'react'
import ReactDOM from 'react-dom/client'
import { admin, coach, member, receptionist } from '../users'
import { useModal } from '../hooks/useModal'
import { LogIn, Header, Option, Menu, ActionsAdministration, ActionsReception, ActionsGYM } from './App'
import { Modal } from './Modals'

const sessionAdmin = localStorage.getItem("sessionAdmin") || null;

export function Administration() {
  if (sessionAdmin == null) {
    return (
      <>
        <Menu tittle="ADMINISTRACION">
          <LogIn section={admin} />
        </Menu>

      </>
    )
  }
  else {
    return (
      <>
        <Menu tittle="ADMINISTRACION">
          <ActionsAdministration />
        </Menu>
      </>
    )
  }
}
export const Reception = () => {
  if (sessionAdmin == null) {
    return (
      <>
        <Menu tittle="RECEPCION">
          <LogIn section={receptionist} />
        </Menu>

      </>
    )
  }
  else {
    return (
      <>
        <Menu tittle="RECEPCION">
          <ActionsReception />
        </Menu>
      </>
    )
  }
}
export const Gym = () => {
  if (sessionAdmin == null) {
    return (
      <>
        <Menu tittle="GYM">
          <LogIn section={coach} />
        </Menu>

      </>
    )
  }
  else {
    return (
      <>
        <Menu tittle="GYM">
          <ActionsGYM />
        </Menu>
      </>
    )
  }
}