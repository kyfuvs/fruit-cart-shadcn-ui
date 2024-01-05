import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='flex justify-center gap-20 px-5 py-3 bg-blue-800'>
      <Button className='bg-pink-50 hover:bg-pink-200 text-black' asChild>
        <Link href={'/'}>HOME </Link>
      </Button>

      <Button className='bg-pink-50 hover:bg-pink-200 text-black' asChild>
        <Link href={'/cart'}>CART </Link>
      </Button>
 
    </div>
  )
}
