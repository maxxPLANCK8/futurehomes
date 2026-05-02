import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  ChevronDown,
  CircleHelp,
  Globe,
  Fence,
  FileText,
  HeartHandshake,
  HousePlus,
  ImagePlus,
  LandPlot,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  MessageSquareMore,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  SquarePen,
  Trash2,
  UserRound,
  X,
} from 'lucide-react'
import { motion } from 'motion/react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { TestimonialsShowcase } from '../components/ui/testimonials-columns-1.jsx'

const STORAGE_KEY = 'future-homes-properties-data-v1'
const AUTH_KEY = 'future-homes-admin-auth-v1'
const PROPERTY_WHATSAPP_NUMBER = '254725155856'

const seedData = {
  settings: {
    companyName: 'Future Homes Properties Ltd',
    tagline:
      'Strategic Plots | Affordable Housing | Property Dev. | Property Management',
    phone: '0708 199 199',
    whatsapp: '+254 722 423 005',
    email: 'futurehomespropertiesltd@gmail.com',
    address: 'Ngong Lane Plaza, 4th Floor, Ngong Road, Nairobi',
    instagram: 'https://instagram.com/futurehomespropertiesltd',
    facebook: 'https://facebook.com/futurehomespropertiesLtd',
    youtube: 'https://youtube.com/@futurehomespropertiesltd',
    website: 'https://futurehomesproperties.co.ke',
    linkedin: 'https://linkedin.com',
    x: 'https://x.com',
    founderName: 'Faith Wanjiku',
    founderRole: 'Founder & Lead Property Strategist',
    founderPhoto:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80',
    founderBio:
      'Future Homes Properties Ltd helps Kenyans buy strategically, build confidently, and manage property with clarity. We advise clients on plots, affordable housing opportunities, development planning, and dependable property management with a strong Nairobi market perspective.',
  },
  listings: [
    {
      id: 'listing-1',
      name: 'Kitengela Affordable Apartments',
      price: 3000000,
      priceLabel: 'KES 3M',
      address: 'Kitengela, Nairobi-Namanga Highway',
      type: 'Apartment',
      category: 'Affordable',
      beds: 3,
      baths: 2,
      sqft: 5,
      sizeLabel: '5 Acres',
      garage: 1,
      status: 'For Sale',
      description:
        'Affordable housing on 5 acres along Nairobi-Namanga Highway with a mix of 1, 2 and 3 bedroom apartments.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/terrian-homes-3-330x180.jpeg',
    },
    {
      id: 'listing-2',
      name: 'Syokimau Apartments',
      price: 2700000,
      priceLabel: 'Studio 2.7M | 1BR 4.6M | 2BR 7.6M | 3BR 9.5M',
      address: 'Mombasa Road, Behind Gateway Mall',
      type: 'Apartment',
      category: 'Apartment',
      beds: 3,
      baths: 2,
      sqft: 950,
      sizeLabel: 'Studio to 3BR',
      garage: 2,
      status: 'For Sale',
      description:
        'Near SGR Terminus, JKIA and Nairobi Express Highway. Positioned as a strong investment destination for high return gains.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-14-at-8.37.45-AM-8-330x180.jpeg',
    },
    {
      id: 'listing-3',
      name: 'Brickford Heights',
      price: 5000000,
      priceLabel: 'KES 5M',
      address: 'Kilimani, Menelick Road',
      type: 'Apartment',
      category: 'Apartment',
      beds: 1,
      baths: 1,
      sqft: 1,
      sizeLabel: '1 Bedroom',
      garage: 1,
      status: 'For Sale',
      description: '1 bedroom apartments in Kilimani along Menelick Road.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/Bedroom-1-330x180.jpg',
    },
    {
      id: 'listing-4',
      name: 'Near Safari Park Hotel Ã¢â‚¬â€ 3BR Apartments',
      price: 9000000,
      priceLabel: 'KES 9M',
      address: 'Near Safari Park Hotel, Nairobi',
      type: 'Apartment',
      category: 'Apartment',
      beds: 3,
      baths: 2,
      sqft: 50000,
      sizeLabel: '50,000 SqFt',
      garage: 1,
      status: 'For Sale',
      description: '3BR apartments metres from Safari Park Hotel with sweeping highway views.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/photo_2021-05-31_19-01-13-330x180.jpg',
    },
    {
      id: 'listing-5',
      name: 'Dennis Pritt Road Ã¢â‚¬â€ Lavington',
      price: 10000000,
      priceLabel: 'KES 10M',
      address: 'Dennis Pritt Road, Lavington',
      type: 'Apartment',
      category: 'Apartment',
      beds: 3,
      baths: 2,
      sqft: 5000,
      sizeLabel: '5,000 SqFt',
      garage: 2,
      status: 'For Sale',
      description: '2 and 3 bedroom apartments in Lavington along Dennis Pritt Road.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-25-at-12.12.13-PM-330x180.jpeg',
    },
    {
      id: 'listing-6',
      name: 'Limuru Ã¢â‚¬â€ Stunning 3 & 4 Bedrooms off Waiyaki Way',
      price: 28000000,
      priceLabel: 'KES 28M',
      address: 'Limuru, off Waiyaki Way',
      type: 'Villa',
      category: 'Villa',
      beds: 4,
      baths: 4,
      sqft: 3400,
      sizeLabel: '3 & 4 Bedrooms',
      garage: 2,
      status: 'For Sale',
      description:
        'All ensuite homes with clubhouse, swimming pool, jogging track and a stronger family-lifestyle setup.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/1656494831927-1-330x180.jpg',
    },
    {
      id: 'listing-7',
      name: 'Barista Gardens Estate',
      price: 9000000,
      priceLabel: 'KES 9M (1/4 plot)',
      address: 'Kiambu Road, near Tatu City',
      type: 'Plot/Land',
      category: 'Plot/Land',
      beds: 0,
      baths: 0,
      sqft: 5000,
      sizeLabel: '1/4 Plot',
      garage: 0,
      status: 'For Sale',
      description:
        'Gated estate off Kiambu-Ruiru Road in a serene environment with 70% financing available.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/Screenshot-75-330x180.jpg',
    },
    {
      id: 'listing-8',
      name: 'Ruiru Affordable Apartments',
      price: 4000000,
      priceLabel: 'KES 4M',
      address: 'Ruiru Town, Ruiru Kamiti Road',
      type: 'Apartment',
      category: 'Affordable',
      beds: 2,
      baths: 1,
      sqft: 64,
      sizeLabel: '64 SqFt',
      garage: 1,
      status: 'For Sale',
      description: 'Affordable apartments in Ruiru Town positioned for first buyers and practical investors.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-24-at-12.34.19-PM-330x180.jpg',
    },
    {
      id: 'listing-9',
      name: 'Mombasa Road Ã¢â‚¬â€ Behind Gateway Mall',
      price: 8000000,
      priceLabel: 'KES 8M',
      address: 'Mombasa Road, Behind Gateway Mall',
      type: 'Apartment',
      category: 'Luxury',
      beds: 3,
      baths: 2,
      sqft: 145,
      sizeLabel: '145 SqFt',
      garage: 2,
      status: 'For Sale',
      description: '2 and 3 bedroom luxurious apartments metres behind Gateway Mall.',
      image:
        'https://futurehomesproperties.co.ke/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-07-at-11.59.19-AM-1-330x180.jpeg',
    },
  ],
  articles: [
    {
      id: 'article-1',
      title: 'How to Buy Your First Plot in Kenya',
      excerpt:
        'A practical guide to due diligence, financing, and location strategy before you commit.',
      content:
        'Buying a first plot starts with location clarity, title verification, budget discipline, and understanding access to roads, water, and power. Always confirm the deed, run a land search, and evaluate neighborhood growth before paying a deposit.',
      date: '2026-03-12',
      readTime: '5 min read',
      status: 'Published',
      coverImage:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'article-2',
      title: 'Top Neighborhoods to Invest in Nairobi 2026',
      excerpt:
        'Where buyer demand, rental absorption, and infrastructure growth are aligning right now.',
      content:
        'Nairobi investment performance is being shaped by transport links, mixed-use growth, and rental demand. Buyers should compare yield, resale liquidity, infrastructure pipeline, and pricing discipline before entering a neighborhood.',
      date: '2026-02-18',
      readTime: '4 min read',
      status: 'Published',
      coverImage:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'article-3',
      title: 'Understanding Title Deeds and Land Search',
      excerpt:
        'The checks that protect you from avoidable risk when acquiring land or development property.',
      content:
        'A title deed is only one part of a clean transaction. Buyers should perform a land search, confirm ownership identity, inspect approvals, and review encumbrances, easements, and rates status before closing.',
      date: '2026-01-09',
      readTime: '6 min read',
      status: 'Published',
      coverImage:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'article-4',
      title: 'Is Off-Plan Property Worth It in Kenya?',
      excerpt:
        'A checklist for balancing affordability with long-term livability and resale value.',
      content:
        'Affordable housing decisions should balance budget, access, durability, neighborhood growth, and service charge structure. Buyers often save more over time by choosing strong fundamentals over cosmetic appeal.',
      date: '2025-12-17',
      readTime: '4 min read',
      status: 'Published',
      coverImage:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'article-5',
      title: 'Property Management Basics for First-Time Landlords',
      excerpt:
        'Systems, reporting, and tenant communication practices that reduce friction and vacancy.',
      content:
        'Strong property management depends on predictable reporting, clear maintenance workflows, quality tenant screening, and disciplined follow-up on rent collection and occupancy health.',
      date: '2025-10-05',
      readTime: '7 min read',
      status: 'Published',
      coverImage:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'article-6',
      title: 'How Developers Can Plan Smarter Mixed-Use Projects',
      excerpt:
        'What to study before you commit capital to a neighborhood-scale development.',
      content:
        'Project viability improves when developers validate product-market fit early, test phasing assumptions, align approvals, and build around infrastructure and buyer psychology rather than headline trends.',
      date: '2025-09-02',
      readTime: '8 min read',
      status: 'Draft',
      coverImage:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  agents: [
    {
      id: 'agent-1',
      name: 'Brian Mugo',
      role: 'Residential Sales Advisor',
      photo:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
      social: 'https://instagram.com/futurehomespropertiesltd',
    },
    {
      id: 'agent-2',
      name: 'Njeri Achieng',
      role: 'Strategic Plots Consultant',
      photo:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
      social: 'https://instagram.com/futurehomespropertiesltd',
    },
    {
      id: 'agent-3',
      name: 'Daniel Kibet',
      role: 'Property Development Lead',
      photo:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      social: 'https://instagram.com/futurehomespropertiesltd',
    },
    {
      id: 'agent-4',
      name: 'Wanjiru Maina',
      role: 'Property Management Advisor',
      photo:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
      social: 'https://instagram.com/futurehomespropertiesltd',
    },
  ],
  messages: [],
  bookings: [],
}

const AppDataContext = createContext(null)

function readStoredData() {
  if (typeof window === 'undefined') return seedData
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) return seedData
  try {
    return JSON.parse(raw)
  } catch {
    return seedData
  }
}

function formatKES(value) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)
}

function displayPrice(listing) {
  return listing.priceLabel || formatKES(listing.price)
}

function displaySize(listing) {
  return listing.sizeLabel || `${listing.sqft} SqFt`
}

function buildPropertyWhatsAppLink(listing) {
  const message = `Hi, I'm interested in the ${listing.name} located at ${listing.address} priced at ${displayPrice(listing)}.\n\nI'd like to know more about:\n- Available units\n- Payment terms\n- Viewing schedule\n\nLooking forward to your response.`
  return `https://wa.me/${PROPERTY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function formatCompactDate(value) {
  return new Intl.DateTimeFormat('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function createId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`
}

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return null
}

function AppStoreProvider({ children }) {
  const [data, setData] = useState(readStoredData)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.sessionStorage.getItem(AUTH_KEY) === 'true'
  })
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const actions = useMemo(
    () => ({
      addListing: (listing) =>
        setData((prev) => ({
          ...prev,
          listings: [{ ...listing, id: createId('listing') }, ...prev.listings],
        })),
      updateListing: (id, nextListing) =>
        setData((prev) => ({
          ...prev,
          listings: prev.listings.map((listing) =>
            listing.id === id ? { ...listing, ...nextListing } : listing,
          ),
        })),
      deleteListing: (id) =>
        setData((prev) => ({
          ...prev,
          listings: prev.listings.filter((listing) => listing.id !== id),
        })),
      addArticle: (article) =>
        setData((prev) => ({
          ...prev,
          articles: [{ ...article, id: createId('article') }, ...prev.articles],
        })),
      updateArticle: (id, nextArticle) =>
        setData((prev) => ({
          ...prev,
          articles: prev.articles.map((article) =>
            article.id === id ? { ...article, ...nextArticle } : article,
          ),
        })),
      deleteArticle: (id) =>
        setData((prev) => ({
          ...prev,
          articles: prev.articles.filter((article) => article.id !== id),
        })),
      addAgent: (agent) =>
        setData((prev) => ({
          ...prev,
          agents: [{ ...agent, id: createId('agent') }, ...prev.agents],
        })),
      updateAgent: (id, nextAgent) =>
        setData((prev) => ({
          ...prev,
          agents: prev.agents.map((agent) =>
            agent.id === id ? { ...agent, ...nextAgent } : agent,
          ),
        })),
      deleteAgent: (id) =>
        setData((prev) => ({
          ...prev,
          agents: prev.agents.filter((agent) => agent.id !== id),
        })),
      addMessage: (message) =>
        setData((prev) => ({
          ...prev,
          messages: [
            { ...message, id: createId('message'), receivedAt: new Date().toISOString() },
            ...prev.messages,
          ],
        })),
      addBooking: (booking) =>
        setData((prev) => ({
          ...prev,
          bookings: [
            { ...booking, id: createId('booking'), receivedAt: new Date().toISOString() },
            ...prev.bookings,
          ],
        })),
      updateSettings: (nextSettings) =>
        setData((prev) => ({
          ...prev,
          settings: { ...prev.settings, ...nextSettings },
        })),
      login: ({ username, password }) => {
        const isValid = username === 'admin' && password === 'admin123'
        if (isValid) {
          setIsAdminAuthenticated(true)
          window.sessionStorage.setItem(AUTH_KEY, 'true')
        }
        return isValid
      },
      logout: () => {
        setIsAdminAuthenticated(false)
        window.sessionStorage.removeItem(AUTH_KEY)
      },
      openBooking: () => setIsBookingOpen(true),
      closeBooking: () => setIsBookingOpen(false),
    }),
    [],
  )

  return (
    <AppDataContext.Provider
      value={{ data, actions, isAdminAuthenticated, isBookingOpen }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

function useAppData() {
  const context = useContext(AppDataContext)
  if (!context) {
    throw new Error('useAppData must be used within AppStoreProvider')
  }
  return context
}

const heroEase = [0.16, 1, 0.3, 1]

function App() {
  return (
    <AppStoreProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </AppStoreProvider>
  )
}

function AppRoutes() {
  const { isBookingOpen, actions } = useAppData()

  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {isBookingOpen ? <BookingModal onClose={actions.closeBooking} /> : null}
    </>
  )
}

function PublicLayout() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const { actions } = useAppData()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navItems = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/listings', 'Listings'],
    ['/articles', 'Articles'],
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24 || location.pathname !== '/')
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : 'is-transparent'}`}>
      <div className="container nav-row">
        <NavLink to="/" className="brand-mark" aria-label="Future Homes Properties Ltd">
          <img
            src="/future-homes-logo.jpg"
            alt="Future Homes Properties Ltd logo"
            className="brand-logo-image"
          />
          <span className="brand-copy">
            <span className="brand-name">Future Homes</span>
            <span className="brand-subline">Properties Ltd</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <button
            type="button"
            className="button button-gold nav-cta"
            onClick={() => {
              setOpen(false)
              actions.openBooking()
            }}
          >
            Book a Call
          </button>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const { data, actions } = useAppData()
  const { settings } = data

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <img
            src="/future-homes-logo.jpg"
            alt="Future Homes Properties Ltd logo"
            className="footer-brand-image"
          />
          <h2 className="footer-cta-heading">Ready To Talk About Your Next Move?</h2>
          <button type="button" className="footer-outline-button" onClick={actions.openBooking}>
            Book a Call
          </button>
        </div>
        <div className="footer-col">
          <p className="footer-label">Location</p>
          <p className="footer-copy">{settings.address}</p>
        </div>
        <div className="footer-col">
          <p className="footer-label">Contact</p>
          <div className="footer-copy footer-stack">
            <p>{settings.phone}</p>
            <p>{settings.whatsapp}</p>
            <p>{settings.email}</p>
            <p>{settings.website.replace(/^https?:\/\//, '')}</p>
          </div>
        </div>
        <div className="footer-col footer-links-col">
          <p className="footer-label">Socials</p>
          <div className="footer-socials">
            <a href={settings.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href={settings.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href={settings.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube size={18} />
            </a>
            <a
              href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
          <p className="footer-label">Other Links</p>
          <div className="footer-links footer-copy">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/listings">Listings</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-watermark">FUTURE HOMES</div>
        <div className="footer-bottom">
          <span>© 2026 Future Homes Properties Ltd</span>
          <span className="footer-bottom-divider" aria-hidden="true">
            |
          </span>
          <span>Built by Future Homes Properties Ltd</span>
        </div>
      </div>
    </footer>
  )
}

function SectionHeading({ label, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: heroEase }}
      viewport={{ once: true, amount: 0.35 }}
      className={`section-heading align-${align}`}
    >
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-copy">{subtitle}</p> : null}
    </motion.div>
  )
}

function PageShell({ children }) {
  return <div className="page-shell">{children}</div>
}

function HomePage() {
  const { data, actions } = useAppData()
  const listings = data.listings.filter((listing) => listing.status !== 'Sold').slice(0, 4)
  const [supportOpen, setSupportOpen] = useState(0)
  const [faqOpen, setFaqOpen] = useState(0)

  const buyerSteps = [
    {
      title: 'Discover',
      body: 'Shortlist plots, homes, or development opportunities based on your budget, goals, and preferred growth areas.',
      image:
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Evaluate',
      body: 'Review pricing, due diligence, title status, access, and long-term value with practical guidance at every step.',
      image:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Secure',
      body: 'Close with confidence through structured negotiation, documentation support, and a faster final process.',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const sellerSteps = [
    {
      title: 'Position',
      body: 'Clarify the right pricing strategy, target buyer profile, and the strongest way to present your property.',
      image:
        'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Promote',
      body: 'Launch with listing visuals, channel distribution, agent coordination, and consistent buyer follow-up.',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Close',
      body: 'Move from offer to paperwork with clear communication, practical documentation support, and timeline control.',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const supportItems = [
    {
      title: 'Home Buying',
      body: 'We help buyers compare neighborhoods, validate pricing, and move through legal checks with less friction.',
      image:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Property Selling',
      body: 'From positioning to buyer coordination, we help sellers market strategically and move faster with stronger clarity.',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Expert Guidance',
      body: 'Need insight on plots, development planning, or management? We offer grounded support built around the Kenyan market.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const faqs = [
    {
      question: 'Do you help with both plots and finished homes?',
      answer:
        'Yes. Future Homes Properties Ltd works across strategic plots, affordable housing, finished homes, and selected investment properties.',
    },
    {
      question: 'Can you support due diligence before I pay a deposit?',
      answer:
        'Yes. We help review location fit, title verification process, land search requirements, pricing context, and transaction readiness.',
    },
    {
      question: 'Do you handle property management after purchase?',
      answer:
        'Yes. Property management is one of our core service lines, covering tenant coordination, upkeep follow-up, and reporting support.',
    },
    {
      question: 'How quickly can I book a consultation?',
      answer:
        'You can book a call directly from the site. Booking requests are stored immediately and can be reviewed from the admin dashboard.',
    },
    {
      question: 'Do you work with development projects as well?',
      answer:
        'Yes. We advise on project positioning, site strategy, buyer fit, and property development opportunities that need market-grounded guidance.',
    },
  ]

  const [workflow, setWorkflow] = useState('buyers')
  const steps = workflow === 'buyers' ? buyerSteps : sellerSteps

  return (
    <PageShell>
      <section className="hero-section">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80"
            alt="Future Homes luxury property exterior"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-grain" />
        <div className="container hero-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: heroEase }}
            className="hero-kicker"
          >
            THE PERFECT PLACE TO FIND
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: heroEase }}
          >
            <span className="hero-line hero-line-top">
              Your <em>Next</em>
            </span>
            <span className="hero-line hero-line-bottom">Home.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: heroEase }}
            className="hero-copy"
          >
            Strategic property advice from Nairobi for buyers, sellers, and investors
            who want more clarity before they move.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: heroEase }}
            className="hero-actions"
          >
            <NavLink to="/listings" className="button button-gold">
              View Listings
            </NavLink>
            <button type="button" className="button button-ghost-light" onClick={actions.openBooking}>
              Book a Call
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.82 }}
            className="hero-scroll-indicator"
          >
            <span>Scroll</span>
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="split-heading">
            <p className="eyebrow">( 01 ) PROCESS</p>
            <h2>A Clear Process Designed To Make Your Property Decision Easier</h2>
          </div>
          <div className="switch-row">
            <button
              type="button"
              className={`switch-pill ${workflow === 'buyers' ? 'is-active' : ''}`}
              onClick={() => setWorkflow('buyers')}
            >
              For Buyers
            </button>
            <button
              type="button"
              className={`switch-pill ${workflow === 'seller' ? 'is-active' : ''}`}
              onClick={() => setWorkflow('seller')}
            >
              For Sellers
            </button>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: heroEase }}
                viewport={{ once: true, amount: 0.2 }}
                className="step-card"
              >
                <img src={step.image} alt={step.title} />
                <div className="step-card-body">
                  <span className="step-number">Step {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionHeading
            label="( 02 ) FEATURED"
            title="Featured Listings"
            subtitle="A handpicked selection of active opportunities from our latest portfolio."
          />
          <div className="listing-grid feature-grid">
            {listings.map((listing, index) => (
              <ListingCard key={listing.id} listing={listing} index={index} />
            ))}
          </div>
          <div className="centered-action">
            <NavLink to="/listings" className="button button-gold">
              Show All Listings
            </NavLink>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <StatCard value="5+ Years" label="Local market experience across buying & selling" />
          <StatCard value="170+ Homes" label="Successfully bought, sold, or advised" />
          <StatCard value="50% Faster" label="Coordinated closings through clear process" />
          <StatCard value="30 Days" label="Average time to move active opportunities" />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionHeading
            label="( 03 ) SERVICES"
            title="Client Support"
            subtitle="Service areas designed to move decisions forward without guesswork."
          />
          <div className="support-layout">
            <div className="support-list">
              {supportItems.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  className={`support-item ${supportOpen === index ? 'is-active' : ''}`}
                  onClick={() => setSupportOpen(index)}
                >
                  <span>{item.title}</span>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                </button>
              ))}
            </div>
            <div className="support-preview">
              <img src={supportItems[supportOpen].image} alt={supportItems[supportOpen].title} />
              <div className="support-preview-body">
                <p>{supportItems[supportOpen].body}</p>
                <button type="button" className="text-link" onClick={actions.openBooking}>
                  Book a call <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsShowcase />

      <section className="cta-band cta-banner">
        <div className="cta-band-media">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80"
            alt="Lakeside homes"
            className="cta-banner-bg"
          />
        </div>
        <div className="cta-band-overlay" />
        <div className="container cta-band-content cta-banner-content">
          <p className="cta-label">YOU ARE NOT STUCK</p>
          <h2 className="cta-heading">Every property â€” Share what you&apos;re looking for</h2>
          <button type="button" className="cta-btn" onClick={actions.openBooking}>
            Book a Call
          </button>
        </div>
      </section>

      <section className="section section-light">
        <div className="container faq-grid">
          <div>
            <SectionHeading
              title="FAQ"
              subtitle="Fast answers before you start your next conversation."
              align="left"
            />
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article key={faq.question} className={`faq-item ${faqOpen === index ? 'is-open' : ''}`}>
                <button type="button" onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}>
                  <span>{faq.question}</span>
                  <Plus size={18} />
                </button>
                {faqOpen === index ? <p>{faq.answer}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function AboutPage() {
  const { data } = useAppData()
  const { settings, agents } = data
  const values = [
    {
      title: 'Clarity',
      description: 'Clear updates and grounded guidance at every stage of the process.',
      icon: CircleHelp,
    },
    {
      title: 'Integrity',
      description: 'Advice rooted in practical due diligence and honest communication.',
      icon: ShieldCheck,
    },
    {
      title: 'Focus',
      description: 'Decisions made around your budget, goals, and long-term value.',
      icon: Building2,
    },
    {
      title: 'Support',
      description: 'Consistent follow-through from first conversation to project handover.',
      icon: HeartHandshake,
    },
  ]

  const moments = [
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  ]
  const [momentIndex, setMomentIndex] = useState(0)

  return (
    <PageShell>
      <HeroBanner
        title="About"
        subtitle="An overview of professional experience, strategic guidance, and trusted property support."
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section section-light">
        <div className="container founder-grid">
          <img src={settings.founderPhoto} alt={settings.founderName} className="founder-photo" />
          <div className="founder-copy">
            <p className="eyebrow">( 01 ) FOUNDER</p>
            <h2>{settings.founderName}</h2>
            <p className="founder-role">{settings.founderRole}</p>
            <p>{settings.founderBio}</p>
            <div className="contact-pills">
              <span>
                <Phone size={16} />
                {settings.phone}
              </span>
              <span>
                <Mail size={16} />
                {settings.email}
              </span>
              <span>
                <MapPin size={16} />
                {settings.address}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container values-grid">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <article key={value.title} className="value-card">
                <Icon size={24} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionHeading
            label="( 02 ) TEAM"
            title="Meet Our Agents"
            subtitle="Experienced advisors helping clients move with confidence."
          />
          <div className="agent-grid">
            {agents.map((agent, index) => (
              <motion.article
                key={agent.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: heroEase }}
                viewport={{ once: true, amount: 0.25 }}
                className="agent-card"
              >
                <img src={agent.photo} alt={agent.name} />
                <div className="agent-card-body">
                  <strong>{agent.name}</strong>
                  <p>{agent.role}</p>
                  <a href={agent.social} target="_blank" rel="noreferrer">
                    View social <ArrowRight size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="split-heading">
            <h2>Core Moments</h2>
            <p className="section-copy compact">
              A few moments from recent client work, site visits, negotiations, and property
              handovers.
            </p>
          </div>
          <div className="moments-hero">
            <img src={moments[momentIndex]} alt="Future Homes client moment" />
            <div className="moments-caption">
              <strong>Recent client activity</strong>
              <p>
                Trusted support across property searches, meetings, site visits, and final
                decision stages.
              </p>
            </div>
          </div>
          <div className="moments-strip">
            {moments.map((moment, index) => (
              <button
                type="button"
                key={moment}
                className={`moment-thumb ${momentIndex === index ? 'is-active' : ''}`}
                onClick={() => setMomentIndex(index)}
              >
                <img src={moment} alt="" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function ListingsPage() {
  const { data } = useAppData()
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const tabs = ['All', 'Apartment', 'Villa', 'Plot/Land', 'Affordable', 'Luxury']

  const filtered = data.listings.filter((listing) => {
    const matchesTab =
      activeTab === 'All' || listing.category === activeTab || listing.type === activeTab
    const haystack = `${listing.name} ${listing.address} ${listing.type}`.toLowerCase()
    const matchesQuery = haystack.includes(query.toLowerCase())
    return listing.status !== 'Sold' && matchesTab && matchesQuery
  })

  return (
    <PageShell>
      <section className="subhero listings-subhero">
        <div className="subhero-media">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
            alt="Future Homes listings hero"
          />
        </div>
        <div className="subhero-overlay" />
        <div className="container subhero-content listings-subhero-content">
          <div className="listings-hero-title">
            <h1>All Listings</h1>
            <span className="listings-count">({filtered.length})</span>
          </div>
          <div className="search-bar">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search here"
              aria-label="Search listings"
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="filter-row">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab}
                className={`filter-tab ${activeTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="listing-grid">
            {filtered.slice(0, visibleCount).map((listing, index) => (
              <ListingCard key={listing.id} listing={listing} index={index} />
            ))}
          </div>
          {filtered.length > visibleCount ? (
            <div className="centered-action">
              <button
                type="button"
                className="button button-gold"
                onClick={() => setVisibleCount((count) => count + 3)}
              >
                Load More
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </PageShell>
  )
}

function ArticlesPage() {
  const { data } = useAppData()
  const published = data.articles.filter((article) => article.status === 'Published')
  const [visibleCount, setVisibleCount] = useState(5)

  return (
    <PageShell>
      <section className="section section-light top-spaced">
        <div className="container">
          <SectionHeading
            label={`(${String(published.length).padStart(2, '0')}) Latest Articles`}
            title="Latest Articles"
            subtitle="Expert tips and market insight to help you make smarter real estate decisions."
          />
          <div className="article-feature-grid">
            {published.slice(0, 2).map((article, index) => (
              <ArticleCard key={article.id} article={article} featured index={index} />
            ))}
          </div>
          <div className="article-grid">
            {published.slice(2, visibleCount).map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index + 2} />
            ))}
          </div>
          {published.length > visibleCount ? (
            <div className="centered-action">
              <button
                type="button"
                className="button button-gold"
                onClick={() => setVisibleCount((count) => count + 3)}
              >
                Load More
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </PageShell>
  )
}

function ContactPage() {
  const { data, actions } = useAppData()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Strategic Plots',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    actions.addMessage(form)
    setForm({ name: '', email: '', service: 'Strategic Plots', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <PageShell>
      <section className="section section-light top-spaced">
        <div className="container contact-heading">
          <SectionHeading
            label="(05) Contact"
            title="Let&apos;s Talk"
            subtitle="Complete this quick form to start a conversation about your property goals."
            align="left"
          />
        </div>
        <div className="container contact-card">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <div className="contact-stack">
              <p>
                <Mail size={18} />
                {data.settings.email}
              </p>
              <p>
                <Phone size={18} />
                {data.settings.phone}
              </p>
              <p>
                <MessageSquareMore size={18} />
                {data.settings.whatsapp}
              </p>
              <p>
                <MapPin size={18} />
                {data.settings.address}
              </p>
              <p>
                <Globe size={18} />
                {data.settings.website}
              </p>
            </div>
            <div>
              <p className="footer-label dark">Social Links</p>
              <div className="social-row dark">
                <a href={data.settings.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Globe size={18} />
                </a>
                <a
                  href={data.settings.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>
            <button type="button" className="button button-outline" onClick={() => navigate('/admin')}>
              Open Admin
            </button>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Fill out the form</h3>
            <label>
              Your name
              <input
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                required
                placeholder="Your name"
              />
            </label>
            <label>
              Your email
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              Select a service
              <select
                value={form.service}
                onChange={(event) => setForm({ ...form, service: event.target.value })}
              >
                <option>Strategic Plots</option>
                <option>Affordable Housing</option>
                <option>Property Development</option>
                <option>Property Management</option>
                <option>Book a Call</option>
              </select>
            </label>
            <label>
              Your message
              <textarea
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                rows={5}
                placeholder="Describe what you are looking for"
              />
            </label>
            <button type="submit" className="button button-gold full-width">
              Submit Inquiry
            </button>
            {submitted ? <p className="success-text">Message received. It now appears in the admin inbox.</p> : null}
          </form>
        </div>
      </section>
    </PageShell>
  )
}

function HeroBanner({ title, subtitle, image, children }) {
  return (
    <section className="subhero">
      <div className="subhero-media">
        <img src={image} alt={title} />
      </div>
      <div className="subhero-overlay" />
      <div className="hero-grain" />
      <div className="container subhero-content">
        <p className="eyebrow light">( PAGE ) FEATURE</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children}
      </div>
    </section>
  )
}

function ListingCard({ listing, index = 0 }) {
  const statItems = [
    displaySize(listing)
      ? {
          key: 'size',
          icon: Fence,
          value: displaySize(listing),
        }
      : null,
    listing.beds
      ? {
          key: 'beds',
          icon: BedDouble,
          value: listing.beds,
        }
      : null,
    listing.baths
      ? {
          key: 'baths',
          icon: Bath,
          value: listing.baths,
        }
      : null,
    listing.garage
      ? {
          key: 'garage',
          icon: HousePlus,
          value: listing.garage,
        }
      : null,
  ].filter(Boolean)

  return (
    <motion.a
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: heroEase }}
      viewport={{ once: true, amount: 0.2 }}
      className="listing-card"
      href={buildPropertyWhatsAppLink(listing)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contact Future Homes on WhatsApp about ${listing.name}`}
    >
      <div className="listing-image-wrap">
        <img src={listing.image} alt={listing.name} />
        <span className="listing-badge">{listing.type}</span>
        <span className="listing-whatsapp-badge" aria-hidden="true">
          <FaWhatsapp size={15} />
        </span>
      </div>
      <div className="listing-card-body">
        <div className="listing-title-row">
          <h3>{listing.name}</h3>
          <strong>{displayPrice(listing)}</strong>
        </div>
        <p className="listing-address">
          <MapPin size={16} />
          {listing.address}
        </p>
        <div className="listing-metrics">
          {statItems.map((item, statIndex) => {
            const Icon = item.icon
            return (
              <span key={item.key} className="listing-stat">
                <Icon size={14} />
                {item.value}
                {statIndex < statItems.length - 1 ? <i className="listing-stat-divider" aria-hidden="true" /> : null}
              </span>
            )
          })}
        </div>
      </div>
    </motion.a>
  )
}

function ArticleCard({ article, featured = false, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: heroEase }}
      viewport={{ once: true, amount: 0.2 }}
      className={`article-card ${featured ? 'featured' : ''}`}
    >
      <img src={article.coverImage} alt={article.title} />
      <div className="article-card-body">
        <div className="article-meta">
          <span>{formatCompactDate(article.date)}</span>
          <span>{article.readTime}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </div>
    </motion.article>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <strong className="stat-value">{value}</strong>
      <p className="stat-desc">{label}</p>
    </div>
  )
}

function BookingModal({ onClose }) {
  const { actions } = useAppData()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function submit(event) {
    event.preventDefault()
    actions.addBooking(form)
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setForm({ name: '', phone: '', preferredDate: '', notes: '' })
    }, 1200)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="eyebrow">(Admin tracked)</p>
            <h3>Book a Call</h3>
          </div>
          <button type="button" className="icon-button light" onClick={onClose} aria-label="Close booking modal">
            <X size={18} />
          </button>
        </div>
        <form className="modal-form" onSubmit={submit}>
          <label>
            Name
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              required
            />
          </label>
          <label>
            Phone
            <input
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              required
            />
          </label>
          <label>
            Preferred date
            <input
              type="date"
              value={form.preferredDate}
              onChange={(event) => setForm({ ...form, preferredDate: event.target.value })}
              required
            />
          </label>
          <label>
            Notes
            <textarea
              rows={4}
              value={form.notes}
              onChange={(event) => setForm({ ...form, notes: event.target.value })}
              placeholder="What do you need help with?"
            />
          </label>
          <button type="submit" className="button button-gold full-width">
            Submit Booking
          </button>
          {submitted ? <p className="success-text">Booking saved and visible in the admin dashboard.</p> : null}
        </form>
      </div>
    </div>
  )
}

function AdminPage() {
  const { data, actions, isAdminAuthenticated } = useAppData()
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [editingListing, setEditingListing] = useState(null)
  const [editingArticle, setEditingArticle] = useState(null)
  const [editingAgent, setEditingAgent] = useState(null)

  if (!isAdminAuthenticated) {
    return (
      <div className="admin-login-shell">
        <div className="admin-login-card">
          <p className="eyebrow">(Protected)</p>
          <h1>Future Homes Admin</h1>
          <p>Use `admin` / `admin123` to access the dashboard.</p>
          <form
            className="admin-login-form"
            onSubmit={(event) => {
              event.preventDefault()
              const success = actions.login(credentials)
              if (!success) {
                setError('Invalid username or password.')
                return
              }
              setError('')
            }}
          >
            <label>
              Username
              <input
                value={credentials.username}
                onChange={(event) => setCredentials({ ...credentials, username: event.target.value })}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={credentials.password}
                onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
              />
            </label>
            <button type="submit" className="button button-gold full-width">
              Login
            </button>
            {error ? <p className="error-text">{error}</p> : null}
          </form>
        </div>
      </div>
    )
  }

  const navItems = [
    ['dashboard', 'Dashboard', LayoutDashboard],
    ['listings', 'Listings', LandPlot],
    ['articles', 'Articles', FileText],
    ['messages', 'Messages', MessageSquareMore],
    ['agents', 'Agents', UserRound],
    ['settings', 'Settings', Building2],
  ]

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <p className="eyebrow light">Future Homes</p>
          <h2>Admin Panel</h2>
        </div>
        <div className="admin-nav">
          {navItems.map(([key, label, Icon]) => (
            <button
              type="button"
              key={key}
              className={`admin-nav-button ${activeTab === key ? 'is-active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
        <button type="button" className="button button-light" onClick={actions.logout}>
          Logout
        </button>
      </aside>

      <div className="admin-content">
        <div className="admin-topbar">
          <div>
            <p className="eyebrow">(Internal)</p>
            <h1>{navItems.find(([key]) => key === activeTab)?.[1]}</h1>
          </div>
          <NavLink to="/" className="button button-outline">
            View Website
          </NavLink>
        </div>

        {activeTab === 'dashboard' ? <DashboardPanel data={data} /> : null}
        {activeTab === 'listings' ? (
          <ListingsManager
            key={`listings-${editingListing?.id ?? 'new'}`}
            listings={data.listings}
            onAdd={actions.addListing}
            onUpdate={actions.updateListing}
            onDelete={actions.deleteListing}
            editing={editingListing}
            setEditing={setEditingListing}
          />
        ) : null}
        {activeTab === 'articles' ? (
          <ArticlesManager
            key={`articles-${editingArticle?.id ?? 'new'}`}
            articles={data.articles}
            onAdd={actions.addArticle}
            onUpdate={actions.updateArticle}
            onDelete={actions.deleteArticle}
            editing={editingArticle}
            setEditing={setEditingArticle}
          />
        ) : null}
        {activeTab === 'messages' ? (
          <MessagesPanel messages={data.messages} bookings={data.bookings} />
        ) : null}
        {activeTab === 'agents' ? (
          <AgentsManager
            key={`agents-${editingAgent?.id ?? 'new'}`}
            agents={data.agents}
            onAdd={actions.addAgent}
            onUpdate={actions.updateAgent}
            onDelete={actions.deleteAgent}
            editing={editingAgent}
            setEditing={setEditingAgent}
          />
        ) : null}
        {activeTab === 'settings' ? (
          <SettingsManager
            key={`settings-${data.settings.companyName}-${data.settings.phone}`}
            settings={data.settings}
            onUpdate={actions.updateSettings}
          />
        ) : null}
      </div>
    </div>
  )
}

function DashboardPanel({ data }) {
  const activeListings = data.listings.filter((listing) => listing.status !== 'Sold').length
  const publishedArticles = data.articles.filter((article) => article.status === 'Published').length

  return (
    <div className="admin-panel-stack">
      <div className="admin-stats">
        <AdminStat title="Total Listings" value={activeListings} />
        <AdminStat title="Total Articles" value={publishedArticles} />
        <AdminStat title="Total Messages" value={data.messages.length} />
        <AdminStat title="Bookings" value={data.bookings.length} />
      </div>
      <div className="admin-grid-two">
        <div className="admin-card">
          <h3>Recent Messages</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.messages.slice(0, 5).map((message) => (
                  <tr key={message.id}>
                    <td>{message.name}</td>
                    <td>{message.service}</td>
                    <td>{formatCompactDate(message.receivedAt)}</td>
                  </tr>
                ))}
                {!data.messages.length ? (
                  <tr>
                    <td colSpan="3">No messages yet.</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
        <div className="admin-card">
          <h3>Recent Bookings</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Preferred Date</th>
                </tr>
              </thead>
              <tbody>
                {data.bookings.slice(0, 5).map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.name}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.preferredDate}</td>
                  </tr>
                ))}
                {!data.bookings.length ? (
                  <tr>
                    <td colSpan="3">No bookings yet.</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdminStat({ title, value }) {
  return (
    <div className="admin-stat-card">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  )
}

async function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function ListingsManager({ listings, onAdd, onUpdate, onDelete, editing, setEditing }) {
  const emptyForm = {
    name: '',
    price: '',
    address: '',
    type: 'Apartment',
    category: 'Apartment',
    beds: 0,
    baths: 0,
    sqft: '',
    garage: 0,
    status: 'For Sale',
    image: '',
  }
  const [form, setForm] = useState(() => (editing ? { ...editing } : emptyForm))

  async function handleFileChange(event) {
    const file = event.target.files?.[0]
    if (!file) return
    const dataUrl = await fileToDataUrl(file)
    setForm((prev) => ({ ...prev, image: dataUrl }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const payload = {
      ...form,
      price: Number(form.price),
      beds: Number(form.beds),
      baths: Number(form.baths),
      sqft: Number(form.sqft),
      garage: Number(form.garage),
    }
    if (editing) {
      onUpdate(editing.id, payload)
      setEditing(null)
    } else {
      onAdd(payload)
    }
    setForm(emptyForm)
  }

  return (
    <div className="admin-panel-stack">
      <div className="admin-card">
        <h3>{editing ? 'Edit Listing' : 'Add New Listing'}</h3>
        <form className="admin-form-grid" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
          </label>
          <label>
            Price
            <input
              type="number"
              value={form.price}
              onChange={(event) => setForm({ ...form, price: event.target.value })}
              required
            />
          </label>
          <label>
            Address
            <input
              value={form.address}
              onChange={(event) => setForm({ ...form, address: event.target.value })}
              required
            />
          </label>
          <label>
            Type
            <select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })}>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Luxury</option>
              <option>Commercial</option>
              <option>Plot/Land</option>
            </select>
          </label>
          <label>
            Category
            <select
              value={form.category}
              onChange={(event) => setForm({ ...form, category: event.target.value })}
            >
              <option>Apartment</option>
              <option>Villa</option>
              <option>Luxury</option>
              <option>Plot/Land</option>
              <option>Affordable</option>
            </select>
          </label>
          <label>
            Beds
            <input type="number" value={form.beds} onChange={(event) => setForm({ ...form, beds: event.target.value })} />
          </label>
          <label>
            Baths
            <input
              type="number"
              value={form.baths}
              onChange={(event) => setForm({ ...form, baths: event.target.value })}
            />
          </label>
          <label>
            Sqft
            <input type="number" value={form.sqft} onChange={(event) => setForm({ ...form, sqft: event.target.value })} />
          </label>
          <label>
            Garage
            <input
              type="number"
              value={form.garage}
              onChange={(event) => setForm({ ...form, garage: event.target.value })}
            />
          </label>
          <label>
            Status
            <select
              value={form.status}
              onChange={(event) => setForm({ ...form, status: event.target.value })}
            >
              <option>For Sale</option>
              <option>Sold</option>
            </select>
          </label>
          <label className="span-2">
            Cover image URL
            <input
              value={form.image}
              onChange={(event) => setForm({ ...form, image: event.target.value })}
              placeholder="https://..."
              required
            />
          </label>
          <label className="span-2 upload-field">
            Upload image
            <div className="upload-inline">
              <ImagePlus size={16} />
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
          </label>
          <div className="admin-form-actions span-2">
            <button type="submit" className="button button-gold">
              {editing ? 'Update Listing' : 'Add Listing'}
            </button>
            {editing ? (
              <button type="button" className="button button-outline" onClick={() => setEditing(null)}>
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h3>Listings Manager</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.id}>
                  <td>
                    <img src={listing.image} alt="" className="table-thumb" />
                  </td>
                  <td>{listing.name}</td>
                  <td>{displayPrice(listing)}</td>
                  <td>{listing.type}</td>
                  <td>{listing.status}</td>
                  <td>
                    <div className="table-actions">
                      <button type="button" onClick={() => setEditing(listing)}>
                        <SquarePen size={16} />
                      </button>
                      <button type="button" onClick={() => onDelete(listing.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function ArticlesManager({ articles, onAdd, onUpdate, onDelete, editing, setEditing }) {
  const emptyForm = {
    title: '',
    excerpt: '',
    content: '',
    date: '',
    readTime: '',
    coverImage: '',
    status: 'Published',
  }
  const [form, setForm] = useState(() => (editing ? { ...editing } : emptyForm))

  function handleSubmit(event) {
    event.preventDefault()
    if (editing) {
      onUpdate(editing.id, form)
      setEditing(null)
    } else {
      onAdd(form)
    }
    setForm(emptyForm)
  }

  return (
    <div className="admin-panel-stack">
      <div className="admin-card">
        <h3>{editing ? 'Edit Article' : 'Add New Article'}</h3>
        <form className="admin-form-grid" onSubmit={handleSubmit}>
          <label className="span-2">
            Title
            <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} required />
          </label>
          <label className="span-2">
            Excerpt
            <textarea
              rows={3}
              value={form.excerpt}
              onChange={(event) => setForm({ ...form, excerpt: event.target.value })}
              required
            />
          </label>
          <label className="span-2">
            Content
            <textarea
              rows={6}
              value={form.content}
              onChange={(event) => setForm({ ...form, content: event.target.value })}
              required
            />
          </label>
          <label>
            Date
            <input type="date" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} required />
          </label>
          <label>
            Read time
            <input
              value={form.readTime}
              onChange={(event) => setForm({ ...form, readTime: event.target.value })}
              placeholder="5 min read"
              required
            />
          </label>
          <label>
            Status
            <select
              value={form.status}
              onChange={(event) => setForm({ ...form, status: event.target.value })}
            >
              <option>Published</option>
              <option>Draft</option>
            </select>
          </label>
          <label className="span-2">
            Cover image URL
            <input
              value={form.coverImage}
              onChange={(event) => setForm({ ...form, coverImage: event.target.value })}
              required
            />
          </label>
          <div className="admin-form-actions span-2">
            <button type="submit" className="button button-gold">
              {editing ? 'Update Article' : 'Add Article'}
            </button>
            {editing ? (
              <button type="button" className="button button-outline" onClick={() => setEditing(null)}>
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h3>Articles Manager</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Read Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{formatCompactDate(article.date)}</td>
                  <td>{article.readTime}</td>
                  <td>{article.status}</td>
                  <td>
                    <div className="table-actions">
                      <button type="button" onClick={() => setEditing(article)}>
                        <SquarePen size={16} />
                      </button>
                      <button type="button" onClick={() => onDelete(article.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function MessagesPanel({ messages, bookings }) {
  return (
    <div className="admin-panel-stack">
      <div className="admin-card">
        <h3>Messages Inbox</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Message</th>
                <th>Date Received</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message.id}>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.service}</td>
                  <td className="long-cell">{message.message || 'Ã¢â‚¬â€'}</td>
                  <td>{formatCompactDate(message.receivedAt)}</td>
                </tr>
              ))}
              {!messages.length ? (
                <tr>
                  <td colSpan="5">No messages yet.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>

      <div className="admin-card">
        <h3>Bookings</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Preferred Date</th>
                <th>Notes</th>
                <th>Date Received</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.preferredDate}</td>
                  <td className="long-cell">{booking.notes || 'Ã¢â‚¬â€'}</td>
                  <td>{formatCompactDate(booking.receivedAt)}</td>
                </tr>
              ))}
              {!bookings.length ? (
                <tr>
                  <td colSpan="5">No bookings yet.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function AgentsManager({ agents, onAdd, onUpdate, onDelete, editing, setEditing }) {
  const emptyForm = { name: '', role: '', photo: '', social: '' }
  const [form, setForm] = useState(() => (editing ? { ...editing } : emptyForm))

  function handleSubmit(event) {
    event.preventDefault()
    if (editing) {
      onUpdate(editing.id, form)
      setEditing(null)
    } else {
      onAdd(form)
    }
    setForm(emptyForm)
  }

  return (
    <div className="admin-panel-stack">
      <div className="admin-card">
        <h3>{editing ? 'Edit Team Member' : 'Add Team Member'}</h3>
        <form className="admin-form-grid" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
          </label>
          <label>
            Role
            <input value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })} required />
          </label>
          <label className="span-2">
            Photo URL
            <input value={form.photo} onChange={(event) => setForm({ ...form, photo: event.target.value })} required />
          </label>
          <label className="span-2">
            Social Link
            <input value={form.social} onChange={(event) => setForm({ ...form, social: event.target.value })} required />
          </label>
          <div className="admin-form-actions span-2">
            <button type="submit" className="button button-gold">
              {editing ? 'Update Agent' : 'Add Agent'}
            </button>
            {editing ? (
              <button type="button" className="button button-outline" onClick={() => setEditing(null)}>
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      </div>
      <div className="admin-card">
        <h3>Agents Manager</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Role</th>
                <th>Social</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent.id}>
                  <td>
                    <img src={agent.photo} alt="" className="table-thumb round" />
                  </td>
                  <td>{agent.name}</td>
                  <td>{agent.role}</td>
                  <td>
                    <a href={agent.social} target="_blank" rel="noreferrer">
                      Open
                    </a>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button type="button" onClick={() => setEditing(agent)}>
                        <SquarePen size={16} />
                      </button>
                      <button type="button" onClick={() => onDelete(agent.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function SettingsManager({ settings, onUpdate }) {
  const [form, setForm] = useState(() => settings)
  const [saved, setSaved] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    onUpdate(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="admin-card">
      <h3>Settings</h3>
      <form className="admin-form-grid" onSubmit={handleSubmit}>
        <label>
          Company name
          <input value={form.companyName} onChange={(event) => setForm({ ...form, companyName: event.target.value })} />
        </label>
        <label>
          Phone
          <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
        </label>
        <label>
          WhatsApp
          <input value={form.whatsapp || ''} onChange={(event) => setForm({ ...form, whatsapp: event.target.value })} />
        </label>
        <label className="span-2">
          Email
          <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        </label>
        <label className="span-2">
          Website
          <input value={form.website || ''} onChange={(event) => setForm({ ...form, website: event.target.value })} />
        </label>
        <label className="span-2">
          Address
          <input value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} />
        </label>
        <label className="span-2">
          Tagline
          <input value={form.tagline} onChange={(event) => setForm({ ...form, tagline: event.target.value })} />
        </label>
        <label>
          Instagram
          <input value={form.instagram} onChange={(event) => setForm({ ...form, instagram: event.target.value })} />
        </label>
        <label>
          Facebook
          <input value={form.facebook} onChange={(event) => setForm({ ...form, facebook: event.target.value })} />
        </label>
        <label>
          LinkedIn
          <input value={form.linkedin} onChange={(event) => setForm({ ...form, linkedin: event.target.value })} />
        </label>
        <label>
          X
          <input value={form.x} onChange={(event) => setForm({ ...form, x: event.target.value })} />
        </label>
        <div className="admin-form-actions span-2">
          <button type="submit" className="button button-gold">
            Save Settings
          </button>
          {saved ? <p className="success-text">Settings updated live across the website.</p> : null}
        </div>
      </form>
    </div>
  )
}

export default App


