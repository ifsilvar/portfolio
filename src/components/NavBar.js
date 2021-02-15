import React from "react";
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
    <header className="bg-blue-500">
        <div className="container mx-auto flex justify-between">
            <nav className="flex">
                <NavLink to="/" exact className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest">
                Home Link
                </NavLink>
            </nav>
            <div className="inline-flex py-3 px-3">
                <SocialIcon url="https://www.linkedin.com/in/ivan-f-silvar/" className="mr-4" target="_blank" fgColor="fff" style={{ height: 35, width: 35 }} />
            </div>
        </div>
    </header>
    )
}