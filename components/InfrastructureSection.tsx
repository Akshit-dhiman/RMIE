import Image from 'next/image'
import { Globe, Warehouse, ShieldCheck, Truck } from 'lucide-react'

const CAPABILITIES = [
  {
    title: 'Global Procurement Network',
    description: 'Direct sourcing channels from authorized distributors in Europe, USA, and Asia.',
    icon: Globe,
  },
  {
    title: 'Bonded Warehouse Storage',
    description: 'Climate-controlled local inventory ensuring immediate availability for critical components.',
    icon: Warehouse,
  },
  {
    title: 'Quality Verification Lab',
    description: 'In-house inspection protocols to guarantee 100% authenticity and compliance.',
    icon: ShieldCheck,
  },
  {
    title: 'Custom Logistics Solutions',
    description: 'End-to-end supply chain management with real-time tracking and diverse shipping options.',
    icon: Truck,
  },
]

export default function InfrastructureSection() {
  return (
    <section className="bg-[#0E2A38] py-[100px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Industrial Image Block */}
          <div className="relative h-[560px] w-full rounded-[12px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] group">
            <Image
              src="/infrastructure-logistics.png"
              alt="Global Logistics Infrastructure"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 z-10" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center h-full pl-0 lg:pl-10">
            <div className="max-w-[520px]">
              <div className="mb-12">
                <h2 className="text-[36px] font-bold text-white leading-tight">
                  Infrastructure Backbone
                </h2>
                <div className="h-[3px] w-[50px] bg-[#E31E24] mt-[12px]"></div>
              </div>

              <div className="flex flex-col">
                {CAPABILITIES.map((feature, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-start gap-[12px] mb-2">
                      <feature.icon className="w-[18px] h-[18px] text-[#E31E24] mt-1 shrink-0" strokeWidth={2} />
                      <div>
                        <h3 className="text-[18px] font-bold text-white mb-1 leading-snug">
                          {feature.title}
                        </h3>
                        <p className="text-[#C7D3DA] text-[16px] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    {/* Divider Line (except for last item) */}
                    {idx !== CAPABILITIES.length - 1 && (
                      <div className="h-[1px] bg-white/10 my-[24px]" />
                    )}
                    {/* Spacing for last item if needed, but margin-bottom strategy usually handled by container or dividers. 
                        User asked for "Each item block margin-bottom: 32px" AND "Divider line... margin: 24px 0".
                        The divider's own margin provides spacing. Let's strictly follow the divider instruction for spacing between items.
                    */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
