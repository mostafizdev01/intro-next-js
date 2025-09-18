"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  const clickNavigate = ()=> {
    router.push('contact')
  }
  return (
    <div>
      <h1 className=" text-2xl text-red-400">Hello Next js</h1>
      <button onClick={clickNavigate} className=" border p-3 cursor-pointer">Contact</button>
    </div>
  )
}

