import ProductCard from "../ui/ProductCard"

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProductCard
          name="ATHARMELINO POWDER"
          subtitle="Natural herbal powder for daily wellness"
          price={2500}
          image="/images/melino.jpg"
        />
      </div>
    </section>
  )
}
