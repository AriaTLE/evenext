import { atom } from '@zedux/react'

export const userAtom = atom('user', {
    firstname: "",
    lastname: "",
    email: "",
    isLoggedIn: false,
    username: "",
    phone: "",
})

