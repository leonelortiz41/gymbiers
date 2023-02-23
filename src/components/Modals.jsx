import React, { Children, useState } from 'react'
import { TiDelete } from "@react-icons/all-files/ti/TiDelete";
import { useModal } from '..//hooks/useModal'
import { member, coach } from '../users'
import { AssignRutine, back, registerCoach, registerReceptionist,AssignPay } from '../functions/functions'
import "./styles.css"

export function Modal({ isOpen, closeModal, tittle, children }) {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className='modal_dialog' onClick={handleModalDialogClick}>
                <div className='modal-header'>
                    <h1>{tittle}</h1>
                    <button onClick={closeModal} className="close"><TiDelete /></button>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export function ModalRegRec({ isOpen, closeModal }) {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Modal tittle="Register receptionist" isOpen={isOpen} closeModal={closeModal}>
            <form onSubmit={(e) => { e.preventDefault(); registerReceptionist(name, user, password) }}>
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='user' onChange={(e) => setUser(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className="send" value="Create" />
            </form>
        </Modal>
    )
}
export function ModalRegCoach({ isOpen, closeModal }) {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [legacy, setLegacy] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Modal tittle="Register coach" isOpen={isOpen} closeModal={closeModal}>
            <form onSubmit={(e) => { e.preventDefault(); registerCoach(name, legacy, user, phone, password) }}>
                <input type="text" placeholder='legacy' onChange={(e) => setLegacy(e.target.value)} />
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='user' onChange={(e) => setUser(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <input type="tel" placeholder='phone' onChange={(e) => setPhone(e.target.value)} />
                <input type="submit" className="send" value="Create" />
            </form>
        </Modal>
    )
}
export function ModalRegMember({ isOpen, closeModal }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <Modal tittle="Register Member" isOpen={isOpen} closeModal={closeModal}>
            <form onSubmit={(e) => { e.preventDefault(); registerMember(id, name, age, gender, phone) }}>
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <label className='gender'><input type="radio" name="gender" value='masculine' onClick={(e) => setGender(e.target.value)} />masculine<i /></label>
                <label className='gender'><input type="radio" name="gender" value='femenine' onClick={(e) => setGender(e.target.value)} />femenine<i /></label>
                <input type="number" placeholder='age' min="10" max="90" onChange={(e) => setAge(e.target.value)} />
                <input type="tel" placeholder='phone' onChange={(e) => setPhone(e.target.value)} />
                <input type="submit" className="send" value="Create" />
            </form>
        </Modal>
    )
}
export function ModalRegPay({ isOpen, closeModal }) {
    const listItems = member.map((member) =>
        <option key={member.id} value={member.id}>{member.name}</option>
    );
    const [id, setId] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <Modal tittle="Register Pay" isOpen={isOpen} closeModal={closeModal}>
            <form onSubmit={(e) => { e.preventDefault(); AssignPay(id, date) }}>
            <select name="select" onChange={(e) => setId(e.target.value)}>
                    {listItems}
                </select>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
                <input type="submit" className="send" value="Pay" />
            </form>
        </Modal>
    )
}
export function ModalListMember({ isOpen, closeModal }) {
    const listItems = member.map((memb) =>
        <h2 key={memb.id}>{memb.name}</h2>
    );
    return (
        <Modal tittle="List members" isOpen={isOpen} closeModal={closeModal}>
            <ul>{listItems}</ul>
        </Modal>
    )
}
export function ModalListCoach({ isOpen, closeModal }) {
    const listItems = coach.map((coach) =>
        <h2 key={coach.legacy}>{coach.name}</h2>
    );
    return (
        <Modal tittle="List coachs" isOpen={isOpen} closeModal={closeModal}>
            <ul>{listItems}</ul>
        </Modal>
    )
}
export function ModalAssignRut({ isOpen, closeModal }) {
    const listItems = member.map((member) =>
        <option key={member.id} value={member.id}>{member.name}</option>
    );
    const [id, setId] = useState("");
    const [rutine, setRutine] = useState("");
    return (
        <Modal tittle="Assign rutine" isOpen={isOpen} closeModal={closeModal}>
            <form onSubmit={(e) => { e.preventDefault(); AssignRutine(id, rutine) }}>
                <select name="select" onChange={(e) => setId(e.target.value)}>
                    {listItems}
                </select>
                <textarea className='rutine' placeholder='rutine' onChange={(e) => setRutine(e.target.value)} />
                <input type="submit" className="send" value="Assign" />
            </form>
        </Modal>
    )
}
