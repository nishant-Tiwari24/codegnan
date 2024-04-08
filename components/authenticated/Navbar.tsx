import React from 'react';
import Link from 'next/link';

const navElements = [
    {
        id: 1,
        name: "Explore",
        link: "/explore"
    },
    {
        id: 2,
        name: "Problems",
        link: "/explore"
    },
    {
        id: 3,
        name: "Contest",
        link: "/contest"
    }
];

function Navbar() {
    return (
        <nav className='relative flex h-[50px] w-screen shrink-0 items-center justify-between px-5 bg-dark-layer-3 text-dark-gray-7'>
            <div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
                <Link href='/' className='h-[45px] w-[200px] object-contain flex-1'>
                    <img src='/images/pro2023 (2).png' alt='Logo' className='h-full' />
                </Link>

                <div className='flex items-center space-x-4 flex-1 text-zinc-300 justify-end'>
                    {navElements.map((item) => (
                        <Link key={item.id} href={item.link}>
                            <p className='hover:text-brand-orange'>{item.name}</p>
                        </Link>
                    ))}
                    <div>
                        <a href='/profile' className='bg-dark-fill-2 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-3'>
                            Profile
                        </a>
                    </div>
                    <Link href='/auth'>
                        <button className='bg-dark-fill-2 py-1 px-2 cursor-pointer rounded '>Sign In</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
