import React from 'react'

export default async function BlogDetails({params}: {params:{blogId: string}}) {
    const { blogId } = await params;
    console.log(blogId)
  return (
    <div>
      this is blog details number is {blogId}
    </div>
  )
}
