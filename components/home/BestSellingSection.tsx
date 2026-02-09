import { bestSellingProducts } from "@/data/bestSellingProducts"
import BestSellingCard from "@/components/ui/BestSellingCard"

export default function BestSellingSection() {
  return (
    <section className="bg-[#faf7f2] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-xl font-semibold mb-10">
          BEST-SELLING AYURVEDIC PRODUCTS
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {bestSellingProducts.map((product) => (
            <BestSellingCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />

          ))}
        </div>

      </div>
    </section>
  )
}
