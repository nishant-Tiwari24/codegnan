
import Explore from '@/components/authenticated/Explore'
import Navbar from '@/components/authenticated/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-black flex flex-col items-center justify-center">
      <Navbar/>
      <Explore/>
    </div>
  )
}

export default page
