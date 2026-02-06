'use client'

import React, {ReactNode, useEffect, useState} from "react";
import {CREATE_USER_MUTATION, LOGIN_USER_MUTATION} from "@/app/graphql/mutations";
import {gFetch} from "@/app/utilities/gFetch";
import { useRouter } from 'next/navigation';
import {CHECK_EMAIL_EXISTS_QUERY} from "@/app/graphql/queries";

const emailValidationPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$"


export default function JoinUs({children, close}: { children: ReactNode, close?: () => void }) {
    const router = useRouter();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [auth, setAuth] = useState({});
    const [passwordValid, setPasswordValid] = useState(false);
    const [emailToCheck, setEmailToCheck] = useState('');
    const [submit, setSubmit] = useState(false);
    const [response, setResponse] = useState({});
    const [fieldsHidden, setFieldsHidden] = useState(true);
    const [isNewUser, setIsNewUser] = useState(false);
    const [didEmailBlur, setDidEmailBlur] = useState(false);
    const [signupLoginText, setSignupLoginText] = useState('Sign Up / Login');
    const validateEmail = (emailToValidate:string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailToValidate);
    }

    const handleEmail = (emailToValidate:string) => {
        // const isValid = validateEmail(emailToValidate);
        // console.log(isValid);
        // if (isValid) {
            console.log('setting')
            setEmailToCheck(emailToValidate);
        // }
    }

    const onEmailBlur = () => {
        console.log('blur');
        if (isNewUser) {
            setFieldsHidden(false);
        } else {
            setFieldsHidden(true);
        }
    }

    useEffect(() => {
        if (!didEmailBlur) return;
        const checkEmailExists = async () => {
            const response = await gFetch(CHECK_EMAIL_EXISTS_QUERY, {
                "email": emailToCheck
            });

            setIsNewUser(response.data.isEmailAvailable);
            setFieldsHidden(!response.data.isEmailAvailable);
            setEmail(emailToCheck);
            setSignupLoginText(response.data.isEmailAvailable ? 'Sign Up' : 'Login');
            setDidEmailBlur(false);
        }
        if (emailToCheck) {
            checkEmailExists();
        }
    }, [emailToCheck, didEmailBlur])

    useEffect(() => {
        if (!submit) return;
        const createUser = async () => {
            const response = await gFetch(CREATE_USER_MUTATION, {
                "newUserInput": {
                    userName,
                    firstName,
                    lastName,
                    phone,
                    email,
                    password,
                }
            });
            await router.push('profile');
            if (close) close();
        }
        const loginUser = async () => {
            const response = await gFetch(LOGIN_USER_MUTATION, {
                "credentialsInput": {
                    email,
                    password
                }
            })
            await router.push('profile');
            if (close) close();
        }
        if (isNewUser) {
            createUser();
        } else {
            loginUser();
        }

    },  [userName, firstName, lastName, phone, email, password, close, router, submit]);
    const fireEmailFocus = () => {
        setDidEmailBlur(false);
        setIsNewUser(false);
        setFieldsHidden(true);
    }
    return (<>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-Mail
            </label>
            <input pattern=".+@example\.com" onFocus={fireEmailFocus} onBlur={() => setDidEmailBlur(true)} onChange={(event) => setEmailToCheck(event.target.value)}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="email" type="text" placeholder="E-Mail"/>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input onChange={(event) => setPassword(event.target.value)}
                   className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                   id="password" type="password" placeholder="******************"/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div hidden={fieldsHidden} className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input onChange={(event) => setUserName(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Username"/>
        </div>

        <div hidden={fieldsHidden} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Phone">
                Phone
            </label>
            <input onChange={(event) => setPhone(event.target.value)}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="phone" type="text" placeholder="Phone"/>
        </div>
        <div hidden={fieldsHidden} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="First Name">
                First Name
            </label>
            <input onChange={(event) => setFirstName(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName" type="text" placeholder="First Name"/>
        </div>
        <div hidden={fieldsHidden} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Last Name
            </label>
            <input onChange={(event) => setLastName(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName" type="text" placeholder="Last Name"/>
        </div>

        <button
            onClick={() => {
                setSubmit(true);
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
            {signupLoginText}
        </button>
        {children}
    </>)
}