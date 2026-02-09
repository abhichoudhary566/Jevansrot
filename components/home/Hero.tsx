// components/home/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative h-130 bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://atharveda.com/wp-content/uploads/2025/12/about-us-1-1536x520.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      {/* <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold">About Atharveda</h1>
        <p className="mt-3 text-lg">
          Nature-crafted Ayurvedic healthcare
        </p>
      </div> */}
    </section>
  )
}
