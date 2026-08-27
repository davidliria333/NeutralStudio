import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import RouteProgress from './components/RouteProgress.jsx'
import Analytics from './components/Analytics.jsx'
import Seo from './components/Seo.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import Services from './pages/Services.jsx'
import StartupDesignCosts from './pages/StartupDesignCosts.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'
import Brand from './pages/services/Brand.jsx'
import Systems from './pages/services/Systems.jsx'
import Web from './pages/services/Web.jsx'
import Consulting from './pages/services/Consulting.jsx'
import UXUI from './pages/services/UXUI.jsx'
import AppDevelopment from './pages/services/AppDevelopment.jsx'
import CalPopup from './components/CalPopup.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const scroll = () => {
      const target = document.querySelector(hash)
      if (!target) return false
      const headerOffset = 112
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
      return true
    }

    if (scroll()) return

    let tries = 0
    const retry = window.setInterval(() => {
      tries += 1
      if (scroll() || tries > 12) window.clearInterval(retry)
    }, 120)

    return () => window.clearInterval(retry)
  }, [pathname, hash])

  return null
}

function Page({ children }) {
  return <div className="page-transition">{children}</div>
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    document.body.classList.toggle('has-subpage', !isHome)
    return () => document.body.classList.remove('has-subpage')
  }, [isHome])

  return (
    <>
      <Analytics />
      <CalPopup />
      <Seo />
      <ScrollManager />
      <RouteProgress />
      {!isHome && <Header />}
      <main id="page-content">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/services/brand" element={<Page><Brand /></Page>} />
          <Route path="/services/systems" element={<Page><Systems /></Page>} />
          <Route path="/services/web" element={<Page><Web /></Page>} />
          <Route path="/services/pitch-deck" element={<Page><Consulting /></Page>} />
          <Route path="/services/consulting" element={<Navigate to="/services/pitch-deck" replace />} />
          <Route path="/services/ux-ui" element={<Page><UXUI /></Page>} />
          <Route path="/services/app-development" element={<Page><AppDevelopment /></Page>} />
          <Route path="/guides/startup-design-costs" element={<Page><StartupDesignCosts /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/work" element={<Page><Work /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="/privacy" element={<Page><Privacy /></Page>} />
          <Route path="/legal" element={<Page><Legal /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </main>
      {!isHome && <Footer />}
    </>
  )
}
