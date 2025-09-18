import React from 'react'

export default async function PageDetails({params}: {params:{pageDetails:string}}) {

    console.log(await params)

  return (
    <div>
      this is page details here now
    </div>
  )
}
