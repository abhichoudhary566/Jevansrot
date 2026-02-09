import Link from "next/link"
import Image from "next/image"

type Props = {
  id: number
  title: string
  price: number
  image: string
}
export default function BestSellingCard({
  id,
  title,
  price,
  image,
}: Props) {
  return (
    <Link href={`/product/${id}`}>
      <div className="cursor-pointer">
        <Image src={image} alt={title} width={200} height={200} />
        <h3>{title}</h3>
        <p>₹ {price}</p>
      </div>
    </Link>
  )
}
