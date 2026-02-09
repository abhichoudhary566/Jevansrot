import { healthSolutions } from "@/data/healthSolutions"
import HealthCard from "@/components/ui/HealthCard"

export default function HealthSolutionsSection() {
  return (
    <section className="bg-[#fbf8f3] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-lg font-semibold uppercase tracking-wide mb-8">
          Find Solutions For Your Health
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {healthSolutions.map((item) => (
            <HealthCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}
