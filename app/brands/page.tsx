import BrandsGrid from '@/components/BrandsGrid'

export const metadata = {
  title: 'Featured Brands - Radha Madhav India Enterprise',
  description: 'Explore the premium connector brands we represent.',
}

export default function Brands() {
  return (
    <div className="pt-8 pb-16">
      {/* Page Header */}
      <section className="bg-blue-50 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Brands</h1>
          <p className="text-lg text-gray-700">
            We partner with the world's leading connector manufacturers
          </p>
        </div>
      </section>

      <BrandsGrid />
    </div>
  )
}
