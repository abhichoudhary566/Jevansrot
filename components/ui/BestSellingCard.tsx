import Image from "next/image"

interface Props {
  title: string
  price: number
  image: string
}

export default function BestSellingCard({ title, price, image }: Props) {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">

      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-sm font-medium text-gray-700 mb-2">
        {title}
      </h3>

      <p className="font-semibold text-lg mb-4">
        ₹{price}
      </p>

      <button className="w-full bg-[#2f4b3a] text-white py-2 rounded-lg text-sm hover:bg-[#243a2d] transition">
        Buy Now
      </button>
    </div>
  )
}
