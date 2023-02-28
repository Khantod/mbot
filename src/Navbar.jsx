import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className='w-screen bg-gray-100 flex justify-center py-2 shadow-md'>
            <ul className='flex text-center'>
                <li className='mx-4'>What's New</li>
                <li className='mx-4'>Accessories</li>
                <li className='mx-4'>TV</li>
                <li className='mx-4'>iPad</li>
                <li className='mx-4'>iPhone</li>
                <li className='mx-4'>MAC</li>
            </ul>
        </nav>
    </>
  )
}
