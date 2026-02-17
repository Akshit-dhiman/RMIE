import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--primary)] text-white pt-24 pb-12 mt-0 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-8">
              <span className="text-xl font-extrabold tracking-tighter text-white">
                TCH<span className="text-[var(--accent)]">.</span>ENTERPRISES
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Premier importer & supplier of authentic automotive & industrial connectors.
              Bridging global manufacturing with local industrial needs.
            </p>
            <div className="text-xs text-gray-500 font-mono">
              ISO 9001:2015 CERTIFIED
            </div>
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
                <a href="tel:+919876543210" className="hover:text-white transition-colors font-mono text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase mb-1">Inquiries</span>
                <a href="mailto:info@tchenterprises.com" className="hover:text-white transition-colors font-mono text-white">
                  info@tchenterprises.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase mb-1">Headquarters</span>
                <span className="leading-relaxed">
                  123 Industrial Park, Phase III<br />New Delhi, India - 110020
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
                <span className="text-white">27AABCT1234H1Z5</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>PAN</span>
                <span className="text-white">AABCT1234H</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>IEC</span>
                <span className="text-white">0512345678</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} TCH Enterprises. All rights reserved.</p>
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
