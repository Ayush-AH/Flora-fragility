import React from 'react'

const Page1 = () => {
  return (
    <div className='w-full h-screen px-32 pt-52  flex justify-center'>
        <div className='w-full flex items-start justify-between text-[11vw] tracking-wider'>
            <h1 className='relative z-10'>{import.meta.env.VITE_HEADING}</h1>
            <h1> Fragility</h1>
        </div>
    </div>
  )
}

export default Page1