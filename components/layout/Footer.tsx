import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#f4efe8] text-[#2b2b2b]">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND + NEWSLETTER */}
        <div className="md:col-span-1">
          <Image
            src="jevansrot-logo.svg"
            alt="Atharveda"
            width={120}
            height={60}
            className="mb-6"
          />

          <p className="text-sm mb-4">
            Signup for 10% off your first purchase & more product discounts
          </p>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email .."
              className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full h-14 bg-black text-white uppercase tracking-wide rounded-lg hover:bg-gray-800 transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* SHOP */}
        <div>
          <h5 className="uppercase font-semibold mb-6">Shop</h5>
          <ul className="space-y-3 text-sm">
            <li><Link href="#">Piles Care</Link></li>
            <li><Link href="#">Skin Care</Link></li>
            <li><Link href="#">Fashion</Link></li>
            <li><Link href="#">Leukoderma Care</Link></li>
            <li><Link href="#">Hand Made</Link></li>
          </ul>
        </div>

        {/* IMPORTANT LINKS */}
        <div>
          <h5 className="uppercase font-semibold mb-6">Important Links</h5>
          <ul className="space-y-3 text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h5 className="uppercase font-semibold mb-6">Get in Touch</h5>

          <p className="text-sm">Order by phone</p>
          <p className="text-lg font-semibold text-[#8b6b2e]">
            +91 9205722107
          </p>

          <p className="underline mt-2">support@jevansrot.com</p>

          {/* SOCIAL ICONS */}
          {/* <div className="flex gap-3 mt-6">
            <a href="#" className="p-2 rounded-lg bg-black text-white hover:bg-gray-700">
              <Facebook size={16} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-black text-white hover:bg-gray-700">
              <Twitter size={16} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-black text-white hover:bg-gray-700">
              <Instagram size={16} />
            </a>
          </div> */}
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-[#e6dfd6]">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center space-y-4">

          {/* PAYMENT ICON */}
          <Image
            src="http://atharveda.com/wp-content/uploads/2024/01/cards-footer-1.png"
            alt="Payment Methods"
            width={326}
            height={24}
            className="mx-auto"
          />

      <p className="text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Jevansrot. All rights reserved.
      </p>
          <p className="font-semibold">
            100% Plant-Based Wellness from jeevansrot  – Pure, Ethical, and Eco-Friendly.
          </p>

          {/* APP DOWNLOAD */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="text-sm">Download jeevansrot Store App</span>

            <Image
              src="http://atharveda.com/wp-content/uploads/2024/01/app-google-play-1.png"
              alt="Google Play"
              width={90}
              height={30}
            />
            <Image
              src="http://atharveda.com/wp-content/uploads/2024/01/app-apple-store-1.png"
              alt="App Store"
              width={90}
              height={30}
            />
          </div>

        </div>
      </div>

    </footer>
  )
}
