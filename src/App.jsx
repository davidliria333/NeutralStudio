import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import Home from './pages/Home.jsx'

const Galeon = lazy(() => import('./pages/case/Galeon.jsx'))
const Arkuos = lazy(() => import('./pages/case/Arkuos.jsx'))
const Vira = lazy(() => import('./pages/case/Vira.jsx'))
const CircleHome = lazy(() => import('./pages/case/CircleHome.jsx'))
const Brand = lazy(() => import('./pages/services/Brand.jsx'))
const Systems = lazy(() => import('./pages/services/Systems.jsx'))
const Web = lazy(() => import('./pages/services/Web.jsx'))
const Consulting = lazy(() => import('./pages/services/Consulting.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Cursor />
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case/galeon" element={<Galeon />} />
            <Route path="/case/arkuos" element={<Arkuos />} />
            <Route path="/case/vira" element={<Vira />} />
            <Route path="/case/circlehome" element={<CircleHome />} />
            <Route path="/services/brand" element={<Brand />} />
            <Route path="/services/systems" element={<Systems />} />
            <Route path="/services/web" element={<Web />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
