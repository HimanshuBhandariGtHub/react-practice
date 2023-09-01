"use client"
import React from 'react'

const Header = () => {
  return (
    <div className='bg-green-500 h-8 flex justify-between items-center'>
    <h1 className='ml-4'>Logo</h1>
    <ul className='flex gap-4 mr-4'>
    <li>Home</li>
    <li>About</li>
    <li>Career</li>
    <li>Blog</li>
    </ul>
    </div>
  )
}

export default Header