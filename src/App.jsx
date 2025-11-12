import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const brand = {
  name: 'BeYou',
  tagline: 'Embrace individuality. Wear confidence. Live in comfort.',
}

function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3">
            <LogoMonogram />
            <span className="text-sm tracking-widest uppercase text-neutral-800/80">{brand.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-neutral-700">
            <button onClick={() => scrollTo('new')} className="hover:text-neutral-900 transition-colors">New Arrivals</button>
            <button onClick={() => scrollTo('about')} className="hover:text-neutral-900 transition-colors">About</button>
            <button onClick={() => scrollTo('shop')} className="hover:text-neutral-900 transition-colors">Shop</button>
          </div>
          <div className="flex items-center gap-3">
            <GlowButton onClick={() => scrollTo('shop')}>Shop BeYou</GlowButton>
          </div>
        </div>
      </div>
    </div>
  )
}

function LogoMonogram({ size = 36 }) {
  return (
    <div className="flex items-center">
      <div
        className="relative grid place-items-center rounded-xl bg-white/70 shadow-[0_6px_25px_rgba(0,0,0,0.08)] border border-white/60 backdrop-blur-md"
        style={{ width: size, height: size }}
      >
        <svg width={size - 8} height={size - 8} viewBox="0 0 64 64" aria-label="BY monogram">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#313131" />
            </linearGradient>
          </defs>
          <path d="M14 14h20c7.1 0 12 4.5 12 10.7 0 4.9-3 8.9-7.9 10v.2c6 .9 10.1 5 10.1 10.9C48.2 53.7 41.9 58 32.9 58H14V14zm13.1 18c3.2 0 5.1-1.7 5.1-4.4s-1.9-4.4-5.1-4.4h-3.1V32h3.1zm1.2 22c4 0 6.5-2 6.5-5.3 0-3.3-2.6-5.3-6.5-5.3h-4.3V54h4.3z" fill="url(#grad)"/>
          <path d="M50 14h6.5v33.1c0 3.6 1.6 5.3 4.5 5.3 1.4 0 2.7-.3 3.5-.7L66 58c-1.6 1-4.2 1.7-7.4 1.7-6.2 0-9.1-3.6-9.1-10.1V14z" fill="url(#grad)"/>
        </svg>
      </div>
    </div>
  )
}

function GlowButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-5 py-2 text-sm font-medium shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(17,17,17,0.35)] hover:-translate-y-0.5"
    >
      <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-neutral-900 to-neutral-700 opacity-0 blur-md transition-opacity group-hover:opacity-100" aria-hidden="true"/>
      <span className="relative">{children}</span>
    </button>
  )
}

function PastelBlob({ className = '', colorFrom = '#fdebd3', colorTo = '#e8e6ff', opacity = 0.7, size = 360, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`pointer-events-none absolute blur-3xl ${className}`}
      style={{ width: size, height: size, opacity }}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background: `radial-gradient(60% 60% at 50% 50%, ${colorFrom}, ${colorTo})`,
          filter: 'saturate(1.05)'
        }}
      />
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Ambient pastel glows */}
      <PastelBlob className="-top-20 -left-16" colorFrom="#f3ede4" colorTo="#f7dcd0" size={420} opacity={0.75} />
      <PastelBlob className="top-48 -right-24" colorFrom="#e6f0ff" colorTo="#efe9ff" size={380} opacity={0.65} delay={1.2} />
      <PastelBlob className="-bottom-24 left-1/3" colorFrom="#fff6ea" colorTo="#e7e7e7" size={520} opacity={0.5} delay={0.5} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-neutral-900"
          >
            BeYou
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 max-w-xl text-base sm:text-lg text-neutral-700"
          >
            {brand.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#shop" className="group">
              <GlowButton>Explore Collection</GlowButton>
            </a>
            <a href="#new" className="group">
              <button className="rounded-full border border-neutral-300/60 bg-white/70 px-5 py-2 text-sm font-medium text-neutral-800 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">Shop BeYou</button>
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-4 text-xs text-neutral-600/80">
            <span className="h-px w-10 bg-neutral-300/70" />
            Ultra-soft fabrics • Tailored silhouettes • Everyday luxury
          </div>
        </div>

        <div className="relative h-[460px] w-full">
          <div className="absolute inset-0 rounded-[28px] border border-white/40 bg-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl overflow-hidden">
            {/* 3D Model via Spline */}
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/8tFqWQxH0wOqcRkV/scene.splinecode" />
            </div>
            {/* soft vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/40" />
          </div>
          {/* Soft base shadow */}
          <div className="absolute -bottom-6 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-full bg-neutral-900/10 blur-xl" />
        </div>
      </div>
    </section>
  )
}

function ProductCard({ title, price, image, tag }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/30 p-3 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      {tag && (
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[10px] tracking-wide text-neutral-700 backdrop-blur-md">{tag}</span>
      )}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5efe7] to-[#ecebff]">
        {/* Simulated floating fabric with blur */}
        <motion.div
          className="absolute -left-10 top-10 h-56 w-56 rounded-full"
          style={{ background: 'radial-gradient(60% 60% at 50% 50%, #fff1e5, #e7e5ff)' }}
          animate={{ x: [0, 8, -6, 0], y: [0, -6, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <img src={image} alt="product" className="relative z-10 h-full w-full object-cover mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(255,255,255,0.6))]" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-neutral-900">{title}</p>
          <p className="text-xs text-neutral-600">{price}</p>
        </div>
        <button className="rounded-full border border-neutral-300/70 bg-white/80 px-3 py-1 text-xs text-neutral-800 backdrop-blur-sm transition-colors hover:bg-white">Add</button>
      </div>
    </motion.div>
  )
}

function NewArrivals() {
  const products = [
    { title: 'Contour Tee', price: '$68', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60', tag: 'NEW' },
    { title: 'Fluid Hoodie', price: '$120', image: 'https://images.unsplash.com/photo-1575450384270-54444858bc39?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb250b3VyJTIwVGVlfGVufDB8MHx8fDE3NjI5NDM4MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'LIMITED' },
    { title: 'AirFlex Jogger', price: '$98', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=60' },
    { title: 'Ripple Dress', price: '$150', image: 'https://images.unsplash.com/photo-1575450384270-54444858bc39?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb250b3VyJTIwVGVlfGVufDB8MHx8fDE3NjI5NDM4MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]
  return (
    <section id="new" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">New Arrivals</h2>
          <a href="#shop" className="text-sm text-neutral-700 hover:text-neutral-900">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/40 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">Made for movement. Designed for you.</h3>
              <p className="mt-4 text-neutral-700">
                Thoughtful silhouettes meet cloud-soft materials for pieces you	ll reach for every day. Minimal by design, elevated in feel  a wardrobe that adapts to your life and lets your personality lead.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#shop"><GlowButton>Shop BeYou</GlowButton></a>
                <a href="#new">
                  <button className="rounded-full border border-neutral-300/60 bg-white/70 px-5 py-2 text-sm font-medium text-neutral-800 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">Explore Collection</button>
                </a>
              </div>
            </div>
            <div className="relative min-h-[300px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Spline scene="https://prod.spline.design/sZ8k3R5GQPMQgn5H/scene.splinecode" />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShopBanner() {
  return (
    <section id="shop" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-10 text-center backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900"
          >
            Step into comfort with BeYou
          </motion.h3>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-700">Discover essential layers in soft neutrals and blush undertones. Precision cut. Feather-soft touch.</p>
          <div className="mt-8 flex justify-center">
            <GlowButton>Shop Now</GlowButton>
          </div>

          {/* floating accents */}
          <PastelBlob className="-top-20 left-10" size={260} opacity={0.55} colorFrom="#f6efe6" colorTo="#e9e6ff" />
          <PastelBlob className="-bottom-28 right-10" size={300} opacity={0.45} colorFrom="#fff2e6" colorTo="#eee" delay={0.8} />
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(120deg,#faf7f3,40%,#f3f1ff)] text-neutral-900">
      <Nav />
      <main>
        <Hero />
        <NewArrivals />
        <About />
        <ShopBanner />
      </main>
      <footer className="border-t border-white/50 bg-white/40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMonogram size={28} />
            <span className="text-xs text-neutral-700">© {new Date().getFullYear()} BeYou</span>
          </div>
          <div className="text-xs text-neutral-600">Crafted with care • Designed for life</div>
        </div>
      </footer>
    </div>
  )
}
