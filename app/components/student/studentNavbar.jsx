import React from 'react'
import Link from 'next/link'
import {SignOutButton } from '@clerk/nextjs';
import { PiSignOutBold } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const StudentNavbar = (props) => {
  return (
    <div className="bg-[#5ac8fa] p-2 flex flex-col lg:h-full items-center justify-start gap-3 text-slate-200">
      <Link href="/studentDashboard" className={props.act === 'home' ? 'btn btn-ghost text-3xl btn-active' : 'btn btn-ghost text-3xl'}>
         <IoMdHome />
      </Link>
      <Link href="studentDashboard/search" className={props.act === 'search' ? 'btn btn-ghost text-3xl btn-active' : 'btn btn-ghost text-3xl'}>
        <FaSearch />
      </Link>
      <Link href="studentDashboard/acceptedListingsPage" className={props.act === 'accepted' ? 'btn btn-ghost text-3xl btn-active' : 'btn btn-ghost text-3xl'}>
        <FaCheck />
      </Link>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className={props.act === 'utils' ? 'btn btn-ghost text-3xl btn-active' : 'btn btn-ghost text-3xl'}>
            <CgProfile />
          </div>
          <ul tabIndex={0} className=" mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 left-0">
            <li className='text-black'>
              <Link href="/profile">
                General Profile
              </Link>
            </li>
            <li className='text-black'><Link href="/studentDashboard/edit">Edit Student Profile</Link></li>
            <li className='text-black'>
              <SignOutButton>
                <Link href="/">
                  <p className='pr-1'>log Out</p>
                  <PiSignOutBold />
                </Link>
              </SignOutButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StudentNavbar
