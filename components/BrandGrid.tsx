'use client'

import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

// Logo data mapping based on files in /public/brand-logos/
const BRAND_LOGOS = [
  { name: 'TE Connectivity', src: '/brand-logos/te-connectivity.svg', width: 200, height: 40 },
  { name: 'Molex', src: '/brand-logos/molex-logo.svg', width: 140, height: 40 },
  { name: 'Aptiv', src: '/brand-logos/aptiv-logo.svg', width: 140, height: 40 },
  { name: 'Amphenol', src: '/brand-logos/Amphenol-Logo.wine.svg', width: 150, height: 40 },
  { name: 'Sumitomo', src: '/brand-logos/Sumitomo_Corporation-Logo.wine.svg', width: 160, height: 40 },
  { name: 'Yazaki', src: '/brand-logos/yazaki-company-logo.svg', width: 140, height: 40 },
]

export default function BrandGrid() {
  // Quadruple duplication: Ensures seamless loop on ultra-wide screens without gaps
  const marqueeBrands = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS]

  return (
    <div className="py-[80px] bg-[#FAFAF9] border-b border-gray-100/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section - Subtle/Industrial */}
        <div className="flex items-center gap-6 mb-[60px]">
          <h2 className="text-[15px] font-semibold text-[#475569] uppercase tracking-[0.5px] whitespace-nowrap">
            Brands We Source
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow" />
        </div>

        <ScrollAnimationWrapper>
          {/* Constrained Container */}
          <div className="relative w-full overflow-hidden">

            {/* Gradient Masks (Premium Look - 80px) */}
            <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-[#FAFAF9] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-[#FAFAF9] to-transparent z-10 pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
              {marqueeBrands.map((brand, idx) => {
                // Determine specific scale classes to prevent "zooming out" on hover
                // Sumitomo: 1.8 -> 1.85 (Zoom in)
                // TE/Molex: 1.4 -> 1.45 (Zoom in)
                // Others: 1.0 -> 1.05 (Standard zoom)
                let scaleClasses = "scale-100 group-hover:scale-105"
                if (brand.name === 'Sumitomo') scaleClasses = "scale-[1.8] group-hover:scale-[1.9]"
                if (brand.name === 'TE Connectivity' || brand.name === 'Molex') scaleClasses = "scale-[1.4] group-hover:scale-[1.5]"

                return (
                  <div
                    key={`${brand.name}-${idx}`}
                    className="flex-shrink-0 mx-[40px] md:mx-[60px] group flex items-center justify-center h-[60px]"
                  >
                    {/* 
                       Logo Container & Styling
                       - STRICT SIZING: Max Height 40px, Max Width 180px
                       - Opacity: 0.65 (default) -> 1.0 (hover)
                       - Scale: Custom per brand (see above)
                    */}
                    <div
                      className={`relative h-[32px] md:h-[40px] w-auto max-w-[150px] md:max-w-[200px] transition-all duration-300 ease-out opacity-65 group-hover:opacity-100 origin-center grayscale-0 ${scaleClasses}`}
                    >
                      <Image
                        src={brand.src}
                        alt={brand.name}
                        height={40}
                        width={brand.width}
                        className="h-full w-auto object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}
