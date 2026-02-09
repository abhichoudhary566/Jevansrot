import Image from "next/image"

type ProductProps = {
  name: string
  subtitle: string
  price: number
  image: string
}

export default function ProductCard({
  name,
  subtitle,
  price,
  image,
}: ProductProps) {
  return (
    <div className="flex flex-col">
      
      {/* Image box ONLY */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 h-50 flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Text OUTSIDE the box */}
      <div className="mt-3">
        <h3 className="text-sm font-semibold uppercase leading-tight line-clamp-2">
          {name}
        </h3>

        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {subtitle}
        </p>

        <p className="text-sm font-semibold mt-1">
          ₹ {price}
        </p>
      </div>
    </div>
  )
}
