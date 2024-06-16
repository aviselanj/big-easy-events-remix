import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
export default function Header() {
    const [username, setUsername] = useState("test user");
    return (
        <>
            <header>
                <nav className="navbar navbar-default navbar-fixed-top bg-stone-950" role="navigation">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>

                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>

                                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                                    <div className="flex space-x-4">
                                        <h1 className="text-gray-300 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-violet-400 to-lime-500">Big Easy Events</h1>
                                    </div>

                                    <a className="navbar-brand text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" href={"/"}>Home</a>
                                    <a className="navbar-brand text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" href="#">Personal Plan</a>
                                    <a className="navbar-brand text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" href="#">Calendar</a>
                                    <a className="navbar-brand text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" href="https://www.xplorit.com/new-orleans">Virtual Tour</a>
                                </div>

                            </div>
                        </div>

                    </div>




                </nav>


            </header>

        </>
    );
}
