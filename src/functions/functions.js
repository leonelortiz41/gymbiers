import { receptionist, coach, member, admin } from "../users"

export const back = () => {
    let a = document.createElement("a");
    a.href = "index.html"
    a.click();
    a.remove();
    localStorage.clear();
}
export const initSession = (user, password, section) => {
    let found = false;
    section.forEach(element => {
        if (user == element.user && password == element.password) found = true;
    });
    if (found == true) {
        localStorage.setItem("sessionAdmin", "true");
        window.location.reload();
    }
    else alert("usuario o contraseña incorrecta");
}
export const AssignRutine = (id, rutine) => {
    member.forEach((member) => {
        if (id == member.id) {
            member.rutine = rutine;
        }
    });
}
export const AssignPay = (id,date) => {
    member.forEach((member) => {
        if (id == member.id) {
            member.date = date;
            member.payed=true;
        }
    });
}
export const InfoPay = (name, legacy, attentionDay, password) => {

}

export const registerReceptionist = (name, user, password) => {

}
export const registerCoach = (name, legacy, attentionDay, password) => {

}
export const registerMember = (name, legacy, attentionDay, password) => {
}
