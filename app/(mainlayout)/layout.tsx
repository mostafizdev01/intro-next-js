

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <header>this is mainLayout header</header>
      <div className=" h-screen">{children}</div>
      <footer>this is main layout footer</footer>
    </div>
  )
}
