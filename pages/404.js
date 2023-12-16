import React, { useEffect } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [])

  return (
    <div className='not-found'>
        <h1>Oooops......</h1>
        <h2>The page requested cannot be found.</h2>
        <p>Go back to the <Link href='/'>HomePage</Link></p>
    </div>
  )
}

export default NotFound