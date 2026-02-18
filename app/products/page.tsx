'use client'

import { useState, useMemo } from 'react'
import { PRODUCTS, CATEGORIES, BRANDS } from '@/lib/data'
import ProductCard from '@/components/ProductCard'
import { Search, ChevronDown } from 'lucide-react'

export default function Products() {
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('default')

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      const matchesBrand = !selectedBrand || product.brand === selectedBrand
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesSearch = !searchQuery ||
        product.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesBrand && matchesCategory && matchesSearch
    })

    // Sorting Logic
    if (sortBy === 'brand-asc') {
      result.sort((a, b) => a.brand.localeCompare(b.brand))
    } else if (sortBy === 'brand-desc') {
      result.sort((a, b) => b.brand.localeCompare(a.brand))
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id) // Assuming higher ID is newer
    }

    return result
  }, [selectedBrand, selectedCategory, searchQuery, sortBy])

  return (
    <div className="pb-16">
      {/* Hero Section - Brand Style */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#0E2A38] to-[#12394F] mb-12">
        {/* Subtle Radial Depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Our Products
            <span className="block h-1.5 w-24 bg-[#D8232A] mt-6" />
          </h1>
          <p className="text-xl text-[#B0C4D6] max-w-3xl font-medium leading-relaxed tracking-wide opacity-90">
            Browse our extensive catalog of original connectors from leading manufacturers. Verified stock, industrial sourcing, and rapid fulfillment.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters (Sticky & Industrial) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sticky top-24 self-start">

              {/* Filter Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-base font-bold text-[#0A1F33] uppercase tracking-wide">Filters</h3>
                {(selectedBrand || selectedCategory || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedBrand('')
                      setSelectedCategory('')
                      setSearchQuery('')
                    }}
                    className="text-xs font-bold text-[#D8232A] hover:text-[#B91C22] transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#0A1F33] mb-3 pb-2 border-b border-gray-100 flex items-center justify-between">
                  Manufacturer
                  <span className="text-[10px] text-gray-400 font-normal bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100 min-w-[20px] text-center">{BRANDS.length}</span>
                </h4>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="radio"
                        name="brand"
                        value=""
                        checked={selectedBrand === ''}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="peer appearance-none w-4 h-4 rounded-full border border-gray-300 checked:border-[#D8232A] checked:border-[5px] transition-all bg-white"
                      />
                    </div>
                    <span className={`ml-3 text-sm transition-colors ${selectedBrand === '' ? 'text-[#0A1F33] font-bold' : 'text-gray-600 group-hover:text-[#0A1F33]'}`}>
                      All Manufacturers
                    </span>
                  </label>
                  {BRANDS.map((brand) => (
                    <label key={brand.id} className="flex items-center cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="brand"
                          value={brand.name}
                          checked={selectedBrand === brand.name}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          className="peer appearance-none w-4 h-4 rounded-full border border-gray-300 checked:border-[#D8232A] checked:border-[5px] transition-all bg-white"
                        />
                      </div>
                      <span className={`ml-3 text-sm transition-colors ${selectedBrand === brand.name ? 'text-[#0A1F33] font-bold' : 'text-gray-600 group-hover:text-[#0A1F33]'}`}>
                        {brand.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-sm font-bold text-[#0A1F33] mb-3 pb-2 border-b border-gray-100 flex items-center justify-between">
                  Category
                  <span className="text-[10px] text-gray-400 font-normal bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100 min-w-[20px] text-center">{CATEGORIES.length}</span>
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value=""
                        checked={selectedCategory === ''}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="peer appearance-none w-4 h-4 rounded-full border border-gray-300 checked:border-[#D8232A] checked:border-[5px] transition-all bg-white"
                      />
                    </div>
                    <span className={`ml-3 text-sm transition-colors ${selectedCategory === '' ? 'text-[#0A1F33] font-bold' : 'text-gray-600 group-hover:text-[#0A1F33]'}`}>
                      All Categories
                    </span>
                  </label>
                  {CATEGORIES.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="peer appearance-none w-4 h-4 rounded-full border border-gray-300 checked:border-[#D8232A] checked:border-[5px] transition-all bg-white"
                        />
                      </div>
                      <span className={`ml-3 text-sm transition-colors ${selectedCategory === category ? 'text-[#0A1F33] font-bold' : 'text-gray-600 group-hover:text-[#0A1F33]'}`}>
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Main Content - Catalog Controls & Products Grid */}
          <div className="lg:col-span-3">
            {/* Catalog Controls Header */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-24 z-10">
              {/* Search Input */}
              <div className="relative w-full sm:max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by part number or brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-[4px] leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:border-[#0A1F33] focus:ring-1 focus:ring-[#0A1F33] sm:text-sm transition-colors"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-gray-500 font-medium whitespace-nowrap hidden sm:block">Sort by:</span>
                <div className="relative w-full sm:w-[180px]">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="block w-full pl-3 pr-8 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#0A1F33] focus:border-[#0A1F33] sm:text-sm rounded-[4px] appearance-none bg-white font-medium text-[#0A1F33] cursor-pointer"
                  >
                    <option value="default">Default</option>
                    <option value="brand-asc">Brand (A-Z)</option>
                    <option value="brand-desc">Brand (Z-A)</option>
                    <option value="newest">Recently Added</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="mb-4 flex justify-between items-end">
              <p className="text-sm text-gray-500 font-medium">
                Showing <span className="font-bold text-[#0A1F33]">{filteredProducts.length}</span> results
                {(selectedBrand || selectedCategory || searchQuery) && (
                  <span className="ml-1">
                    for <span className="font-bold text-[#D8232A]">{searchQuery || 'selected filters'}</span>
                  </span>
                )}
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
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1F33] mb-2">No products found</h3>
                <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                  We couldn't find any products matching your search terms or filters. Try adjusting your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedBrand('')
                    setSelectedCategory('')
                    setSearchQuery('')
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded shadow-sm text-white bg-[#D8232A] hover:bg-[#B91C22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D8232A] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
