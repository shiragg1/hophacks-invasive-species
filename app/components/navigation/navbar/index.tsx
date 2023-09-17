import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const navbar = () => {
    return (
        <>
            <div className="w-full h-20 bg-emerald-700 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <ul className="hidden md:flex gap-x-6 text-amber-100">
                            <li>
                                <Link href="/map">
                                    <p>Map</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>About Stony Run</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p>Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default navbar;