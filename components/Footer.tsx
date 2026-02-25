import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-[#081C29] to-[#0F2A3D] text-white pt-16 pb-12 mt-0 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-8">
              <span className="text-xl font-extrabold tracking-tighter text-white">
                RMI<span className="text-[var(--accent)] font-normal">ENTERPRISE</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-loose opacity-70">
              RADHA MADHAV INDIA ENTERPRISE<br />
              Authorized importer & supplier of authentic automotive and industrial connectors. Delivering verified global sourcing solutions with reliable procurement support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Direct Contact</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase mb-1">24/7 Support Line</span>
                <a href="tel:+919211201778" className="hover:text-white transition-colors font-mono text-white">
                  +91 92112 01778
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase mb-1">Inquiries</span>
                <a href="mailto:radhamadhavindia11@gmail.com" className="hover:text-white transition-colors font-mono text-white">
                  radhamadhavindia11@gmail.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase mb-1">Headquarters</span>
                <span className="leading-relaxed">
                  SHOP NO-1 VILLAGE JUNPAT<br />
                  HARKESH MARKET<br />
                  Greater Noida, UP - 201310
                </span>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Legal & Compliance</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-mono">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>GSTIN</span>
                <span className="text-white">09ABMFR0591E1ZZ</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>ENTITY</span>
                <span className="text-white">Partnership Firm</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>STATE</span>
                <span className="text-white">Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} RADHA MADHAV INDIA ENTERPRISE. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
