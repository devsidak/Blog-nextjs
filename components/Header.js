import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between mx-auto p-5 ">
      <div
        className="flex items-center space-x-5"
      >
        <Link href="/">
          <a>
            <img
              className="w-44 object-contain"
              src="/media/logo1.png"
              alt="logo"
            />
          </a>
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border align-middle py-1 px-4 rounded-full border-green-600">Get Started</h3>
      </div>

    </header>
  )
}

export default Header
