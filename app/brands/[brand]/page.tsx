import Link from 'next/link'
import { BRANDS, PRODUCTS } from '@/lib/data'
import ProductCard from '@/components/ProductCard'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    brand: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { brand } = await params
  const brandData = BRANDS.find((b) => b.slug === brand)

  if (!brandData) {
    return {
      title: 'Brand Not Found',
      description: 'The brand you are looking for does not exist.',
    }
  }

  return {
    title: `${brandData.name} Connectors - Radha Madhav India Enterprise`,
    description: `Browse our collection of original ${brandData.name} connectors and components.`,
  }
}

export async function generateStaticParams() {
  return BRANDS.map((brand) => ({
    brand: brand.slug,
  }))
}

export default async function BrandPage({ params }: PageProps) {
  const { brand: brandSlug } = await params
  const brand = BRANDS.find((b) => b.slug === brandSlug)

  if (!brand) {
    notFound()
  }

  const brandProducts = PRODUCTS.filter((p) => p.brand === brand.name)

  return (
    <div className="pt-8 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/brands" className="text-blue-600 hover:text-blue-700">
            Brands
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-700">{brand.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-50 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{brand.name}</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Explore our complete range of original {brand.name} connectors and components
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Info */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <p className="text-gray-700 leading-relaxed">
            We carry a comprehensive selection of {brand.name} connectors, terminals, and related
            components. All products are original, authentic, and sourced directly from authorized
            distributors. With 70% in-stock availability, we can usually fulfill your orders quickly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition text-center"
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-6 py-2 rounded font-medium hover:bg-orange-600 transition text-center"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {brand.name} Products ({brandProducts.length})
          </h2>

          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-12 text-center">
              <p className="text-gray-700 text-lg">No products currently listed for {brand.name}.</p>
              <p className="text-gray-600 mt-2">Contact us for availability and custom requirements.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
