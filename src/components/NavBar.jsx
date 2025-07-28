'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoLogIn } from "react-icons/io5";
import { CgDarkMode } from "react-icons/cg";

export default function NavBar() {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const router = useRouter()
    const [language, setLanguage] = useState('EN')

    const handleChange = (e) => {
        const selectedLang = e.target.value
        setLanguage(selectedLang)

        if (selectedLang === 'EN') {
            router.push('/')
        } else if (selectedLang === 'BN') {
            router.push('/ielts')
        }
    }


    return (
        <div className="navbar bg-base-100 w-full md:w-10/12 mx-auto ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/ielts'>Courses</Link></li>
                    </ul>
                </div>
                <img src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" alt="logo" className='w-35 bg-white p-2 rounded-lg' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/ielts'>Courses</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">

                <div className="form-control mt-1">
                    <label className="label cursor-pointer">
                        <CgDarkMode size={25} />
                        <input type="checkbox" className="toggle theme-controller" onChange={toggleTheme} checked={theme === 'dark'} />
                    </label>
                </div>

                <select
                    value={language}
                    onChange={handleChange}
                    className="select w-20 rounded-full"
                >
                    <option value="EN">EN</option>
                    <option value="BN">BN</option>
                </select>
                <a className="btn bg-green-500 text-white rounded-full">Login <IoLogIn /></a>
            </div>
        </div>
    )
}
