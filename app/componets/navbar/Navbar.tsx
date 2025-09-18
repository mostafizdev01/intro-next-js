"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" shadow-md w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        MySite
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-blue-500">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-blue-500">
                            About
                        </Link>
                        <Link href="/blog" className="hover:text-blue-500">
                            Blog
                        </Link>
                        <Link href="/contact" className="hover:text-blue-500">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded hover:bg-gray-100"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-2 p-4">
                        <Link href="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                        <Link href="/blog" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
                            Blog
                        </Link>
                        <Link href="/contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
