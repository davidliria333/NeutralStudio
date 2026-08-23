import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import Home from './pages/Home.jsx'
import RouteProgress from './components/RouteProgress.jsx'

const Brand = lazy(() => import('./pages/services/Brand.jsx'))
const Systems = lazy(() => import('./pages/services/Systems.jsx'))
const Web = lazy(() => import('./pages/services/Web.jsx'))
const Consulting = lazy(() => import('./pages/services/Consulting.jsx'))

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

const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
}

function Page({ children }) {
  return <motion.div {...PAGE_TRANSITION}>{children}</motion.div>
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <>
      <Cursor />
      <ScrollManager />
      <RouteProgress />
      <Header />
      <main>
        <Suspense fallback={<RouteProgress active />}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Page><Home /></Page>} />
              <Route path="/services/brand" element={<Page><Brand /></Page>} />
              <Route path="/services/systems" element={<Page><Systems /></Page>} />
              <Route path="/services/web" element={<Page><Web /></Page>} />
              <Route path="/services/consulting" element={<Page><Consulting /></Page>} />
              <Route path="*" element={<Page><Home /></Page>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      {!isHome && <Footer />}
    </>
  )
}
