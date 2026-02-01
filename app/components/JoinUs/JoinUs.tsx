'use client'

import axios from "axios";
import {ReactNode} from "react";

export default function JoinUs({children}: {children: ReactNode}) {
return (<>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username - No account creation yet.
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            E-Mail
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
        <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************"/>
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Confirm Password
        </label>
        <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************"/>
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    {children}
</>)
}