import Image from 'next/image'
import React from 'react'

export default function GalaryPage() {
  return (
    <div>
      <h2>This is galary page now.</h2>
      {/* <img src="https://www.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" 
      alt="next logo" 
      width={500} 
      height={500}
      className=' mx-auto' /> */}

      <h2>Useing super next image</h2>
      <Image src="https://www.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" 
      alt="next logo" 
      width={500} 
      height={500}
      className=' mx-auto' />
    </div>
  )
}
