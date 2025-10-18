import React from 'react';

export default function ProductCard({product}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-green-600 font-bold">₹{product.price.toLocaleString()}</p>
      <div className="mt-3">
        <a className="inline-block bg-blue-600 text-white px-3 py-2 rounded" href={`https://wa.me/917667202122?text=Interested%20in%20${encodeURIComponent(product.name)}`}>
          Buy on WhatsApp
        </a>
      </div>
    </div>
  )
}
