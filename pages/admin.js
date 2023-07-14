import AdminPanel from '@/components/Admin'
import NavBar from '@/components/NavBar'
import React from 'react'

const admin = () => {
    return (
        <div className='h-screen w-full'>
            <NavBar />
            <AdminPanel />

        </div>
    )
}

export default admin
