import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between items-center px-6 py-2 bg-header">
            {/* Logo/Name (Centered) */}
            <a className="font-bold text-white text-2xl mr-10 justify-start" href="#home">Atheef Ahamath</a>

            {/* Navigation (Centered and Spaced Out) */}
            <nav className="hidden md:block">
                <ul className="flex px-24 space-x-3 text-white">
                    <li><a href="/" className="hover:text-gray-300">Home</a></li>
                    <li><a href="/#about" className="hover:text-gray-300">About</a></li>
                    <li><a href="/#project" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="/#resume" className="hover:text-gray-300">Resume</a></li>
                    <li><a href="/#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Toggle Button (Aligned to the right on mobile only) */}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden ml-4'>
                <Bars3Icon className='text-white h-5' />
            </button>

            {/* Mobile Menu */}
            {toggleMenu && (
                <>
                    <div className="mobile-nav-overlay" onClick={() => setToggleMenu(false)}></div>
                    <nav className={`mobile-nav ${toggleMenu ? 'show' : ''}`}>
                        <button onClick={() => setToggleMenu(false)} className="absolute top-6 right-6 text-white">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                        <ul onClick={() => setToggleMenu(false)} className="flex flex-col text-white space-y-6">
                            <li><a href="/#home" className="hover:text-gray-300">Home</a></li>
                            <li><a href="/#about" className="hover:text-gray-300">About</a></li>
                            <li><a href="/#project" className="hover:text-gray-300">Projects</a></li>
                            <li><a href="/#resume" className="hover:text-gray-300">Resume</a></li>
                            <li><a href="/#contact" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </nav>
                </>
            )}
        </header>
    );
}
