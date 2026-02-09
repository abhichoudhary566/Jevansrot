import Image from "next/image"
import Link from "next/link"

export default function HeaderTopBar() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* LEFT – SEARCH */}
        <div className="w-65">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
               <Image
              src="/icons/search.svg"
              alt="Search"
              width={18}
              height={18}
            />
            </span>
            <input
              type="text"
              placeholder="Search products ..."
              className="w-full h-10 pl-9 pr-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>

        {/* CENTER – LOGO */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Atharveda"
              width={45}
              height={45}
              priority
            />
          </Link>
        </div>

        {/* RIGHT – ACTIONS */}
        <div className="flex items-center gap-4">

          {/* Franchise */}
          <button className="flex items-center gap-2 px-4 h-10 rounded-lg bg-[#fde7df] text-sm font-medium hover:bg-[#ff996a] transition">
                        <Image
              src="/icons/headphone.svg"
              alt="Cart"
              width={18}
              height={18}
            />Get A Franchise
          </button>

          {/* Account */}
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100">
            <Image
              src="/icons/user.svg"
              alt="Account"
              width={18}
              height={18}
            />
          </button>

          {/* Cart */}
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100">
            <Image
              src="/icons/cart.svg"
              alt="Cart"
              width={18}
              height={18}
            />
          </button>

        </div>

      </div>
    </div>
  )
}
