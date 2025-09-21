"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  const clickNavigate = ()=> {
    router.push('contact')
  }
  return (
    <div>
      <h1 className=" text-5xl">Next.Js Font Optimization</h1>
      <p className=" text-2xl text-white my-3">Next.Js Font Optimization</p>
      <button onClick={clickNavigate} className=" border p-3 cursor-pointer">Contact</button>
    </div>
  )
}

