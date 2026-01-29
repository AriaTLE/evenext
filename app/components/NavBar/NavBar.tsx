'use client'; // Marks this component for client-side use as it uses useState

import React, { useState } from 'react';
import Modal from "@/app/components/Modal/Modal";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <nav className="w-fullbg-gray-800 flex flex-row justify-between text-lg width 100% absolute top-0 right-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-white">
            <div className="flex-col justify-start ">
                EveVolved

            </div>
            <button
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150"
            >
                Join Us
            </button>
            <Modal isOpen={isOpen} onClose={closeModal} title="My Modal Title">
                <p className="text-gray-700">
                    This is the content inside the modal. You can add forms, text, or other components here.
                </p>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={closeModal}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </Modal>

        </nav>
        // <div
        //     className="flex flex-col text-lg width 100% sticky top-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-white">
        //     <div className="flex">
        //         EveVolved
        //     </div>
        //     <button className="text-lg right-0 ">JoinUs</button>
        //
        // </div>
    );
}
