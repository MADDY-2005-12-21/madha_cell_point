import React, {useEffect, useState} from 'react'
import API from './api'
import ProductCard from './components/ProductCard'

export default function App(){
  const [products, setProducts] = useState([])
  const [q, setQ] = useState('')
  const [maxPrice, setMaxPrice] = useState(250000)

  async function load(){
    try {
      const res = await API.get('/api/products', { params: { q, maxPrice } })
      setProducts(res.data)
    } catch (err) {
      console.error('Failed to load products', err)
    }
  }

  useEffect(()=>{ load() }, [q, maxPrice])

  return (
    <div>
      <header className="bg-gray-900 text-white py-4 text-center">
        <h1 className="text-2xl">Madha Cell Point</h1>
        <p>Your Trusted Mobile & Electronics Store</p>
      </header>

      <nav className="bg-gray-800 text-white flex justify-center gap-4 py-2">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>

      <main className="p-6">
        <section id="home" className="mb-6">
          <div className="bg-yellow-100 p-3 rounded">📢 Prices change daily – We sell at the day’s market price only!</div>
        </section>

        <section id="filters" className="mb-6 flex gap-4 items-center">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search product..." className="p-2 border rounded" />
          <div>
            <label>Max Price: ₹{maxPrice}</label>
            <input type="range" min="5000" max="250000" step="1000" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))} />
          </div>
        </section>

        <section id="products">
          <h2 className="text-xl mb-4">🛒 Latest Mobiles & Laptops (2024–2025)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(p => <ProductCard key={p._id || p.name} product={p} />)}
          </div>
        </section>

        <section id="contact" className="mt-8">
          <h2 className="text-lg">📞 Contact Us</h2>
          <p>Phone: <a href="tel:7667202122">7667202122</a></p>
          <p><a className="inline-block mt-2" href="https://wa.me/917667202122">WhatsApp Inquiry</a></p>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center p-4">
        <p>© 2025 Madha Cell Point. All rights reserved.</p>
      </footer>
    </div>
  )
}
