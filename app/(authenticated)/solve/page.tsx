import Workspace from '@/components/Workspace/Workspace'
import Navbar from '@/components/authenticated/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Workspace/>
    </div>
  )
}

export default page
