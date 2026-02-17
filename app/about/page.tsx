import Link from 'next/link'
import MissionVisionCards from '@/components/MissionVisionCards'
import GlobalSourcingMetrics from '@/components/GlobalSourcingMetrics'

export const metadata = {
  title: 'About TCH Enterprises - Connector Supplier',
  description: 'Learn about TCH Enterprises, our mission, vision, and commitment to authentic connectors.',
}

export default function About() {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About TCH Enterprises</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            A trusted importer and supplier of original automotive and industrial connectors serving
            India and global markets.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Company Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TCH Enterprises is a leading importer and distributor of original automotive and
                industrial connectors. With years of experience in the connector industry, we have
                established ourselves as a reliable partner for businesses requiring high-quality,
                authentic connectors.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We specialize in sourcing connectors from the world's most reputable manufacturers
                including TE Connectivity, Molex, JST, and many others. Our commitment to quality
                and authenticity ensures that every product meets the highest standards.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Import and distribute original connectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Provide competitive pricing and fast quotations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Maintain extensive in-stock inventory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Support businesses with technical expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span>Guarantee authenticity of all products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MissionVisionCards />

      <GlobalSourcingMetrics />

      {/* Quality Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Commitment to Authenticity</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              In an industry where counterfeit products pose significant risks, TCH Enterprises is
              committed to supplying only authentic, original connectors. Every product is sourced
              directly from authorized distributors and manufacturers, ensuring the highest quality
              standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We understand that the reliability of connectors is critical to your operations. That's
              why we maintain strict quality control processes and provide comprehensive documentation
              for every order, giving you complete confidence in every product you receive.
            </p>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Company Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-600 mb-2">ADDRESS</p>
                <p className="text-gray-900 text-lg">
                  123 Industrial Park
                  <br />
                  New Delhi, India - 110001
                </p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-600 mb-2">PHONE</p>
                <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-700 text-lg">
                  +91 98765 43210
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">EMAIL</p>
                <a href="mailto:info@tchenterprises.com" className="text-blue-600 hover:text-blue-700">
                  info@tchenterprises.com
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-600 mb-2">GSTIN</p>
                <p className="text-gray-900 text-lg font-mono">27AABCT1234H1Z5</p>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-600 mb-2">PAN</p>
                <p className="text-gray-900 text-lg font-mono">AABCT1234H</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">CIN</p>
                <p className="text-gray-900 text-lg font-mono">U72999DL2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Get your connector sourcing done right. Contact us for quick quotations and expert support.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
