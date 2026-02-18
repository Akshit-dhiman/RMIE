import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Radha Madhav India Enterprise',
  description: 'Get in touch with Radha Madhav India Enterprise for connector quotations and support.',
}

export default function Contact() {
  return (
    <div className="pb-20 bg-[var(--background)]">
      {/* Page Header */}
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#0E2A38] to-[#12394F] mb-12 overflow-hidden">
        {/* Texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-10 mix-blend-overlay"
          style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        {/* Subtle Radial Depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Request Connector<br />Pricing & Availability
            <span className="block h-1.5 w-24 bg-[#D8232A] mt-6" />
          </h1>
          <p className="text-xl text-[#B0C4D6] max-w-3xl font-medium leading-relaxed tracking-wide opacity-95 mb-8">
            Submit part numbers and quantities. Our procurement team responds within 24 hours with verified pricing and stock confirmation.
          </p>

          {/* Operational Indicators */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-[#94A3B8] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="text-[#D8232A]">✔</span> GST-compliant invoicing
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D8232A]">✔</span> Authentic manufacturer supply
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D8232A]">✔</span> Global dispatch support
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 p-10 rounded-xl shadow-sm">
              <div className="mb-6 border-b border-gray-200 pb-4 flex items-baseline gap-4">
                <span className="text-sm font-bold text-gray-400 tracking-widest">01</span>
                <h2 className="text-3xl font-extrabold text-[#0A1F33] tracking-tight">
                  Submit Requirements
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Direct Contact - Primary (Balanced) */}
            <div className="bg-[#0A1F33]/95 text-white p-8 rounded-xl border border-white/10 relative overflow-hidden shadow-sm transform md:scale-[1.02] z-10 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                <Phone className="w-24 h-24" />
              </div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D8232A]" />
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">Sales Hotline</div>
                  <a href="tel:+919211201778" className="text-2xl font-mono hover:text-[#D8232A] transition-colors block font-bold tracking-tight">
                    +91 92112 01778
                  </a>
                  <p className="text-xs text-gray-400 mt-3 font-medium border-t border-white/10 pt-3 flex items-center gap-2">
                    <span>Mon–Fri</span> <span className="text-gray-600">|</span> <span>9:00 AM – 6:00 PM IST</span>
                  </p>
                  <div className="text-[10px] text-green-500/90 mt-2 flex items-center gap-2 font-medium tracking-wide">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Live Support Available
                  </div>
                </div>
              </div>
            </div>

            {/* Email Support - Secondary */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:border-gray-300 transition-colors shadow-sm">
              <h3 className="text-lg font-bold text-[#0A1F33] mb-4 flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                Email Support
              </h3>
              <a
                href="mailto:radhamadhavindia11@gmail.com"
                className="text-[#0A1F33] font-bold hover:text-[#D8232A] transition-all block mb-2 break-all text-lg hover:underline decoration-2 underline-offset-4"
              >
                radhamadhavindia11@gmail.com
              </a>
              <p className="text-sm text-gray-500">
                For bulk pricing and catalog requests.
              </p>
            </div>

            {/* Corporate HQ - Location */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-[#0A1F33] mb-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#D8232A]" />
                Corporate HQ
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                SHOP NO-1 VILLAGE JUNPAT<br />
                HARKESH MARKET<br />
                Noida Greater Noida Link Road<br />
                Greater Noida, UP - 201310
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No-1+Village+Junpat+Harkesh+Market+Greater+Noida+Uttar+Pradesh+201310"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-[#D61F26]/30 text-[#D61F26] bg-transparent py-3 text-sm font-bold tracking-wide hover:bg-[#D61F26]/5 transition-all uppercase rounded-md flex items-center justify-center gap-2 group"
              >
                <MapPin className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white border border-gray-100 p-8 md:p-12 mb-0 rounded-xl shadow-lg">
          <div className="mb-12 border-b border-gray-100 pb-6">
            <h2 className="text-3xl font-bold text-[#0A1F33] tracking-tight mb-2">Procurement FAQ</h2>
            <p className="text-gray-500">Common questions about ordering and logistics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <div className="group border-b border-gray-100 pb-6 md:border-none md:pb-0">
              <h3 className="font-semibold text-[#0A1F33] mb-3 text-lg group-hover:text-[#D61F26] transition-colors">How quickly can I get a quotation?</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                We provide quotations within 24 hours for all inquiries. Most standard products are
                quoted within 4-6 hours during business days.
              </p>
            </div>
            <div className="group border-b border-gray-100 pb-6 md:border-none md:pb-0">
              <h3 className="font-semibold text-[#0A1F33] mb-3 text-lg group-hover:text-[#D61F26] transition-colors">Are all products authentic?</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Yes, 100% of our products are supplied with original manufacturer Certificates of Conformity (CoC). We source directly from authorized channels to guarantee authenticity.
              </p>
            </div>
            <div className="group border-b border-gray-100 pb-6 md:border-none md:pb-0">
              <h3 className="font-semibold text-[#0A1F33] mb-3 text-lg group-hover:text-[#D61F26] transition-colors">What is the minimum order quantity?</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                We support both prototype quantities and bulk production runs. While MOQs vary by manufacturer, we can often break pack quantities for key clients.
              </p>
            </div>
            <div className="group">
              <h3 className="font-semibold text-[#0A1F33] mb-3 text-lg group-hover:text-[#D61F26] transition-colors">Do you offer global delivery?</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Yes, we utilize enterprise logistics partners (DHL/FedEx) for international shipments and specialized freight for domestic bulk orders.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
