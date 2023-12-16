import React from 'react'
import Link from 'next/link'
import { GiRunningNinja } from "react-icons/gi";

function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <h1>
            <span>NinjaApp</span> <GiRunningNinja width={128} height={77} /> 
            </h1>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/ninjas'>All Listings</Link>

    </nav>
  )
}

export default Navbar