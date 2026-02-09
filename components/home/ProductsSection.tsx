import { products } from "@/data/products"
import ProductCard from "@/components/ui/ProductCard"

export default function ProductsSection() { 
  return (
    <section className="bg-[#faf7f2] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-8 uppercase tracking-wide">
          Explore Our Nature-Crafted Solutions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {products.map((product) => (
<ProductCard
  key={product.id}
  id={product.id}
  title={product.name}
  price={product.price}
  image={product.image}
/>

          ))}
        </div>

      </div>
    </section>
  )
}