import react, { useState } from 'react'
import { Modal, ModalRegRec, ModalRegCoach, ModalRegMember, ModalListMember, ModalAssignRut, ModalListCoach, ModalRegPay } from './Modals'
import { useModal } from '..//hooks/useModal'
import { back, registerReceptionist } from '../functions/functions'
import logoGym from '../assets/gym.svg'
import { initSession } from '../functions/functions'
import { FiSend } from "@react-icons/all-files/fi/FiSend";
import "./styles.css"
export function Header() {
  return (
    <div className='header'>
      <h1>GYMBIERS</h1>
      <img src={logoGym} className="logoGym" />
    </div>
  )
}
export function Menu({ tittle, children }) {
  return (
    <div className='mainMenu'>
      <h1>{tittle}</h1>
      {children}
    </div>
  )
}

export function Option({ opc, func }) {
  return (
    <button className='option' onClick={func}>{opc}</button>
  )
}

export function LogIn({section}) {
  const [isOpenModal, openModal, closeModal] = useModal();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Option opc="Iniciar sesion" func={openModal} />
      <Modal tittle="Login" isOpen={isOpenModal} closeModal={closeModal}>
        <form onSubmit={(e) => { e.preventDefault(); initSession(user, password,section) }}>
          <input type="text" placeholder='user' onChange={(e) => setUser(e.target.value)} />
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" className="send" value="Log in" />
        </form>
      </Modal>
    </div>
  )
}

export function ActionsAdministration() {
  const [isOpenModalRegRec, openModalRegRec, closeModalRegRec] = useModal();
  const [isOpenModalRegCoach, openModalRegCoach, closeModalRegCoach] = useModal();
  return (
    <div>
      <Option opc="Registrar un recepcionista" func={openModalRegRec} />
      <Option opc="Registrar un entrenador" func={openModalRegCoach} />
      <Option opc="Ver listado de usuarios" />
      <Option opc="Ver listado de entrenadores" />
      <Option opc="Informacion de pagos" />
      <Option opc="salir" func={back} />
      <ModalRegRec isOpen={isOpenModalRegRec} closeModal={closeModalRegRec} />
      <ModalRegCoach isOpen={isOpenModalRegCoach} closeModal={closeModalRegCoach} />
    </div>
  )
}
export function ActionsReception() {
  const [isOpenModalRegMember, openModalRegMember, closeModalRegMember] = useModal();
  const [isOpenModalRegPay, openModalRegPay, closeModalRegPay] = useModal();
  const [isOpenModalListMember, openModalListMember, closeModalListMember] = useModal();
  const [isOpenModalListCoach, openModalListCoach, closeModalListCoach] = useModal()
  return (
    <div>
      <Option opc="Registrar un socio" func={openModalRegMember} />
      <Option opc="Registrar pago de cuota" func={openModalRegPay} />
      <Option opc="Ver listado de socios" func={openModalListMember} />
      <Option opc="Ver listado de entrenadores" func={openModalListCoach} />
      <Option opc="salir" func={back} />
      <ModalRegMember isOpen={isOpenModalRegMember} closeModal={closeModalRegMember} />
      <ModalRegPay isOpen={isOpenModalRegPay} closeModal={closeModalRegPay} />
      <ModalListMember isOpen={isOpenModalListMember} closeModal={closeModalListMember} />
      <ModalListCoach isOpen={isOpenModalListCoach} closeModal={closeModalListCoach} />
    </div>
  )
}
export function ActionsGYM() {
  const [isOpenModalRegMember, openModalRegMember, closeModalRegMember] = useModal();
  const [isOpenModalListMember, openModalListMember, closeModalListMember] = useModal();
  const [isOpenModalAssignRut, openModalAssignRut, closeModalAssignRut] = useModal();
  return (
    <div>
      <Option opc="Ver listado de socios" func={openModalListMember} />
      <Option opc="Asignar rutina a un socio" func={openModalAssignRut} />
      <Option opc="salir" func={back} />
      <ModalRegMember isOpen={isOpenModalRegMember} closeModal={closeModalRegMember} />
      <ModalListMember isOpen={isOpenModalListMember} closeModal={closeModalListMember} />
      <ModalAssignRut isOpen={isOpenModalAssignRut} closeModal={closeModalAssignRut} />
    </div>
  )
}