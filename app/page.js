import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <header className="fixed w-full top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-[0.2em] uppercase">
            Nessa
          </Link>
          <nav className="hidden md:flex gap-10">
            <Link href="/" className="text-sm uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors">
              Inicio
            </Link>
            <a href="/catalogo" className="text-sm uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors">
              Catálogo
            </a>
            <a href="/contact" className="text-sm uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors">
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-6">
            <a href="/cart" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors flex items-center gap-2">
              Carro <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs">0</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
        <Image 
          src="/hero.png"
          alt="Modern Luxury Fashion"
          fill
          priority
          className="object-cover opacity-95"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 drop-shadow-xl tracking-tight leading-tight">
            MODERN <br /> LUXURY
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-12 drop-shadow-md max-w-2xl mx-auto font-light tracking-wide">
            Descubre nuestra colección exclusiva. Estilo sofisticado para la vida contemporánea.
          </p>
          <a 
            href="/producto/"
            className="inline-block bg-white text-black px-12 py-4 rounded-none font-semibold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 shadow-lg"
          >
            Comprar Ahora
          </a>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">Descubre</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Novedades</h2>
          <div className="w-20 h-px bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Item 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
              <Image 
                src="/product1.png"
                alt="Vestido de Satén Elegante" 
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-light mb-2 tracking-wide">Vestido de Satén Elegante</h3>
                <p className="text-gray-500 font-light">Colección Primavera</p>
              </div>
              <p className="text-lg">$45.000</p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="group cursor-pointer md:mt-24">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
              <Image 
                src="/product2.png" 
                alt="Accesorios Minimalistas" 
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-light mb-2 tracking-wide">Accesorios Minimalistas</h3>
                <p className="text-gray-500 font-light">Esenciales Diarios</p>
              </div>
              <p className="text-lg">$32.000</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-32">
          <a href="/catalogo" className="inline-block border border-black px-12 py-4 uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition-all duration-500">
            Ver Todo el Catálogo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-3xl font-bold tracking-[0.2em] uppercase mb-8">Nessa</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Elevando el estándar del comercio moderno. Encuentra productos exclusivos con la mejor experiencia de compra.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-8 uppercase text-xs tracking-[0.2em]">Enlaces</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-8 uppercase text-xs tracking-[0.2em]">Soporte</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><a href="/terminos-y-condiciones" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="/politica-de-reembolso" className="hover:text-white transition-colors">Política de Reembolso</a></li>
              <li><a href="/politica-de-privacidad" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Nessa. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Desarrollado con Jumpseller & Vercel</p>
        </div>
      </footer>
    </main>
  );
}
