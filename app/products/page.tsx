'use client'

import { useState, useMemo } from 'react'
import { PRODUCTS, CATEGORIES, BRANDS } from '@/lib/data'
import ProductCard from '@/components/ProductCard'

export default function Products() {
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesBrand = !selectedBrand || product.brand === selectedBrand
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      return matchesBrand && matchesCategory
    })
  }, [selectedBrand, selectedCategory])

  return (
    <div className="pt-8 pb-16">
      {/* Page Header */}
      <section className="bg-blue-50 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-700">
            Browse our extensive catalog of original connectors from leading manufacturers
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Filters</h3>

              {/* Brand Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase">Brand</h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      value=""
                      checked={selectedBrand === ''}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Brands</span>
                  </label>
                  {BRANDS.map((brand) => (
                    <label key={brand.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        value={brand.name}
                        checked={selectedBrand === brand.name}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{brand.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase">
                  Connector Type
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ''}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Categories</span>
                  </label>
                  {CATEGORIES.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters Button */}
              {(selectedBrand || selectedCategory) && (
                <button
                  onClick={() => {
                    setSelectedBrand('')
                    setSelectedCategory('')
                  }}
                  className="w-full mt-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Main Content - Products Grid */}
          <div className="lg:col-span-3">
            {/* Results Info */}
            <div className="mb-6">
              <p className="text-gray-700">
                Showing <span className="font-semibold">{filteredProducts.length}</span> product
                {filteredProducts.length !== 1 ? 's' : ''}
                {selectedBrand && ` from ${selectedBrand}`}
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-700 text-lg mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedBrand('')
                    setSelectedCategory('')
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
