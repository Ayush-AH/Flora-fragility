import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full px-14 py-8 flex items-center justify-between z-10'>
        <h2 className='text-2xl font-semibold'>F</h2>
        <div className='flex items-center gap-40'>
           <div className='flex items-center gap-14 text-xl'>
           <a href="#">Shop</a>
            <a href="#">new</a>
            <a href="#">about</a>
            <a href="#">stores</a>
            <a href="#">search</a>
           </div>
           <div className='flex items-center gap-14 text-xl'>
           <i className="ri-shopping-bag-4-line"></i>
           <i className="ri-menu-3-line"></i>
           </div>
        </div>
    </div>
  )
}

export default Navbar