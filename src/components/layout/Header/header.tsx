"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Add Users", href: "/" },
        { name: "Remove Users", href: "/removeuser" },
        { name: "User List ", href: "/user" },
        { name: "Products", href: "/products" },
    ];

    return (
        <header className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-gray-900">
                    Redux<span className="text-blue-600"></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${pathname === link.href
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t shadow-sm">
                    <nav className="flex flex-col items-start px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block text-base font-medium ${pathname === link.href
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
