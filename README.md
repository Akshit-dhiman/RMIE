# TCH Enterprises - B2B Connector Supplier Website

A production-ready MVP B2B corporate website for TCH Enterprises, an importer and supplier of original automotive and industrial connectors in India.

## Features

- ✅ **Responsive Design** - Mobile-first, fully responsive across all devices
- ✅ **SEO Optimized** - Metadata, semantic HTML, clean URL structure
- ✅ **Clean Architecture** - Reusable components, organized folder structure
- ✅ **Contact Management** - Professional RFQ form with validation
- ✅ **Product Catalog** - Filterable product grid with 8 mock products
- ✅ **Brand Pages** - Dynamic brand pages with products
- ✅ **Corporate Design** - Blue primary color, orange accent, professional layout

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: No external libraries (custom components)
- **API**: Next.js API routes
- **Font**: Inter from Google Fonts

## Project Structure

```
/app
  /api
    /contact
      route.ts           # Contact form API endpoint
  /about
    page.tsx            # About page
  /products
    page.tsx            # Products listing with filters
  /brands
    page.tsx            # Brands listing
    /[brand]
      page.tsx          # Dynamic brand pages
  /contact
    page.tsx            # Contact/RFQ page
  layout.tsx            # Root layout with navbar and footer
  page.tsx              # Home page
  globals.css           # Global styles and design tokens

/components
  Navbar.tsx            # Sticky navigation bar
  Footer.tsx            # Footer with company info
  ProductCard.tsx       # Reusable product card component
  BrandGrid.tsx         # Brand showcase component
  ContactForm.tsx       # Contact form with validation

/lib
  data.ts               # Mock data for products, brands, features

/public
  placeholder.svg       # Placeholder images
  placeholder.jpg
  icon.svg              # App icons
  apple-icon.png
  icon-light-32x32.png
  icon-dark-32x32.png
```

## Pages

### 1. Home Page (`/`)
- Hero section with tagline and CTA buttons
- Brands showcase (9 brands)
- Core offerings cards (6 categories)
- Why choose us section (5 features)
- Final CTA for quotation requests

### 2. About Page (`/about`)
- Company overview
- Mission and vision statements
- Global sourcing network info
- Commitment to authenticity
- Company details (address, phone, email, GST, PAN, CIN)

### 3. Products Page (`/products`)
- Two-column layout with sidebar filters
- Filter by brand (9 options)
- Filter by connector type (7 categories)
- Product grid with 8 mock products
- Each product card has image, brand, part number, description, and quote button

### 4. Brands Page (`/brands`)
- Grid of all 9 brands
- Each brand links to dynamic brand page

### 5. Dynamic Brand Pages (`/brands/[brand]`)
- Brand-specific product listings
- Products filtered by selected brand
- Breadcrumb navigation
- Contact and quote CTAs

### 6. Contact Page (`/contact`)
- Professional RFQ form with 7 fields
- Client-side validation
- Success/error message states
- Contact information sidebar
- FAQ section

## Components

### Navbar
- Sticky positioning at top
- Logo (text-based "TCH Enterprises")
- Navigation links (Home, About, Products, Brands, Contact)
- Phone number display
- WhatsApp icon placeholder
- "Request Quote" button
- Mobile-responsive menu

### Footer
- Company info section
- Quick links
- Contact information
- Company details (GSTIN, PAN, CIN)
- Copyright and policy links

### ProductCard
- Product image placeholder
- Brand name
- Part number
- Category badge
- Description
- "Request Quote" button

### BrandGrid
- Responsive grid of brand placeholders
- 9 brands displayed
- Hover effects

### ContactForm
- 7 form fields (Name, Company, Phone, Email, Product, Quantity, Message)
- Client-side validation
- Loading state
- Success message state
- Error handling
- Disabled state during submission

## API Routes

### POST `/api/contact`
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "string",
  "companyName": "string",
  "phone": "string",
  "email": "string",
  "productRequired": "string",
  "quantity": "string",
  "message": "string"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Inquiry received successfully. We will contact you within 24 hours."
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["field is required", ...]
}
```

## Design System

### Colors
- **Primary**: Blue (#2563EB)
- **Secondary**: Gray (#FFFFFF, #F3F4F6, #9CA3AF, #111827)
- **Accent**: Orange (#F97316)
- **Background**: White
- **Borders**: Light Gray (#E5E7EB)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600, 700, 800)
- **Body**: Regular weight (400)
- **Line Height**: 1.5-1.6

### Spacing
- Uses Tailwind spacing scale (4px base unit)
- Max content width: 80rem (1280px)

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tch-enterprises.git
cd tch-enterprises
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
pnpm build
pnpm start
```

## Mock Data

The app uses mock data defined in `/lib/data.ts`:

- **BRANDS**: 9 connector brands (TE Connectivity, Molex, JST, KET, Aptiv, HRS, Sumitomo, Amphenol, Yazaki)
- **PRODUCTS**: 8 sample products with part numbers and descriptions
- **CATEGORIES**: 7 connector types
- **FEATURES**: 5 key business advantages
- **CORE_OFFERINGS**: 6 main product categories

## Future Enhancements

- [ ] Database integration for products and inquiries
- [ ] Email notifications for form submissions
- [ ] Admin dashboard for managing products and brands
- [ ] CRM integration for leads
- [ ] Payment gateway integration
- [ ] Product image uploads
- [ ] Advanced search functionality
- [ ] User accounts and order history
- [ ] Real-time inventory management

## SEO

All pages include:
- ✅ Unique metadata (title, description)
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Clean URL structure
- ✅ Mobile responsiveness
- ✅ Schema markup ready

## Performance

- ✅ Optimized images with Next.js Image component
- ✅ CSS-in-JS (Tailwind) for minimal bundle
- ✅ Lazy loading of components
- ✅ Responsive design reduces bandwidth
- ✅ Fast API responses

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private - TCH Enterprises

## Contact

- Phone: +91 98765 43210
- Email: info@tchenterprises.com
- Address: 123 Industrial Park, New Delhi, India - 110001

---

Built with Next.js, TypeScript, and Tailwind CSS
