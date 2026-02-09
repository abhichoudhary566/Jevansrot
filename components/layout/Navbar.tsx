export default function Navbar() {
  return (
    <nav className="bg-dark text-black">
      <ul className="max-w-7xl mx-auto flex gap-8 px-6 py-8 text-base">
        {["Home", "Products", "About", "Contact"].map((item) => (
          <li
            key={item}
            className="
              relative cursor-pointer
              text-black
              transition-colors duration-300
              hover:text-orange-500

              after:absolute after:left-0 after:-bottom-1
              after:h-0.5 after:w-0
              after:bg-orange-500
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}
