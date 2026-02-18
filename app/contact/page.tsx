import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact TCH Enterprises - Quick Quotations',
  description:
    'Get a quote within 24 hours. Contact TCH Enterprises for connector sourcing and pricing.',
}

export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      {/* Page Header */}
      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20 mb-12 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1F33] z-0" />
        {/* Texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-10"
          style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Request A Quotation</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed font-light">
            Our technical procurement team processes requests 24/7.
            Receive a formal commercial proposal within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-[var(--border)] p-10 rounded-[var(--radius)] shadow-sm">
              <div className="flex items-center gap-4 mb-8 border-b border-[var(--border)] pb-6">
                <div className="w-10 h-10 bg-[var(--primary)] flex items-center justify-center text-white font-bold rounded-[2px]">
                  01
                </div>
                <h2 className="text-2xl font-bold text-[var(--primary)] tracking-tight">
                  Submit Requirements
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-[var(--secondary)] text-white p-8 rounded-[var(--radius)] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">📞</div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-4 bg-[var(--accent)] block" />
                Direct Contact
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-mono">Sales Hotline</div>
                  <a href="tel:+919211201778" className="text-2xl font-mono hover:text-[var(--accent)] transition-colors block font-bold">
                    +91 92112 01778
                  </a>
                  <div className="text-xs text-gray-500 mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Live: Mon-Fri 9AM-6PM
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[var(--border)] p-8 rounded-[var(--radius)]">
              <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Email Support</h3>
              <a
                href="mailto:radhamadhavindia11@gmail.com"
                className="text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors block mb-2 break-all text-lg decoration-2 hover:underline"
              >
                radhamadhavindia11@gmail.com
              </a>
              <p className="text-sm text-[var(--muted-foreground)]">
                For bulk pricing and catalog requests.
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] p-8 rounded-[var(--radius)]">
              <h3 className="text-lg font-bold text-[var(--primary)] mb-4">Corporate HQ</h3>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6 font-mono">
                SHOP NO-1 VILLAGE JUNPAT<br />
                HARKESH MARKET<br />
                Noida Greater Noida Link Road<br />
                Greater Noida, UP - 201310
              </p>
              <button className="w-full border border-[var(--border)] text-[var(--primary)] bg-[var(--background)] py-3 text-sm font-bold tracking-wide hover:bg-[var(--border)] transition-colors uppercase">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white border border-[var(--border)] p-10 md:p-12 mb-20 rounded-[var(--radius)]">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-2xl font-bold text-[var(--primary)] tracking-tight">Procurement FAQ</h2>
            <div className="h-px bg-[var(--border)] flex-grow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="group">
              <h3 className="font-bold text-[var(--primary)] mb-3 text-lg group-hover:text-[var(--accent)] transition-colors">How quickly can I get a quotation?</h3>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                We provide quotations within 24 hours for all inquiries. Most standard products are
                quoted within 4-6 hours during business days.
              </p>
            </div>
            <div className="group">
              <h3 className="font-bold text-[var(--primary)] mb-3 text-lg group-hover:text-[var(--accent)] transition-colors">Are all products authentic?</h3>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                Yes, 100% of our products are supplied with original manufacturer Certificates of Conformity (CoC). We source directly from authorized channels.
              </p>
            </div>
            <div className="group">
              <h3 className="font-bold text-[var(--primary)] mb-3 text-lg group-hover:text-[var(--accent)] transition-colors">What is the minimum order quantity?</h3>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                We support both prototype quantities and bulk production runs. While MOQs vary by manufacturer, we can often break pack quantities for key clients.
              </p>
            </div>
            <div className="group">
              <h3 className="font-bold text-[var(--primary)] mb-3 text-lg group-hover:text-[var(--accent)] transition-colors">Do you offer global delivery?</h3>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                Yes, we utilize enterprise logistics partners (DHL/FedEx) for international shipments and specialized freight for domestic bulk orders.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
