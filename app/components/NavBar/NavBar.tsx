'use client'; // Marks this component for client-side use as it uses useState

import React, { useState } from 'react';
import Modal from "@/app/components/Modal/Modal";
import JoinUs from "@/app/components/JoinUs/JoinUs";
import Link from "next/dist/client/link";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <nav className="w-fullbg-gray-800 flex flex-row justify-between text-lg width 100% fixed top-0 right-0 left-0 bg-gradient-to-r z-10 from-blue-500 via-purple-500 to-pink-500 p-8 text-white">
            <Link href="/" className="flex-col justify-start hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-150">
                EveVolved - The people first Network

            </Link>
            <div>
                <Link
                    href="/mission"
                    className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150"
                >
                    Mission
                </Link>
                <button
                    onClick={openModal}
                    className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150"
                >
                    Join Us
                </button>
                <Modal isOpen={isOpen} onClose={closeModal} title="Join Us">
                    <JoinUs>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            >
                                Cancel - Account creation coming soon.
                            </button>
                        </div>
                    </JoinUs>
                </Modal>
            </div>
        </nav>
    );
}
