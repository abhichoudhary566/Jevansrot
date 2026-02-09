import Image from "next/image"

type Props = {
  title: string
  image: string
}

export default function HealthCard({ title, image }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

      {/* Image */}
      <div className="h-57.5 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="py-4 text-center">
        <h3 className="text-sm font-semibold uppercase">
          {title}
        </h3>
      </div>

    </div>
  )
}
