
import Navbar from '@/src/components/shared/Navbar'
import React from 'react'

export default function commonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
