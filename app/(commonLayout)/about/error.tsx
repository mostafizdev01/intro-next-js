"use client"

export default function error({error, reset}: {error: Error & {digest?: string};
    reset: ()=> void;
}) {
  return (
    <div>
        <p className=" text-red-500 text-xl">Something went wrong</p>
        <p className=" text-red-500 text-xl my-3">{error?.message}</p>
        <button onClick={()=> reset()} className=" bg-red-700 px-5 py-3 rounded-lg cursor-pointer">
            Try Again
        </button>
    </div>
  )
}
