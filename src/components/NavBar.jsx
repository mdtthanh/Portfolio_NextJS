import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium'>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>

      </nav>
    </header>
  )
}

export default NavBar