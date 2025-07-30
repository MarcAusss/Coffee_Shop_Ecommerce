'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const LeafletMap = dynamic(() => import('../components/LeafletMap'), {
  ssr: false,
});

export default function MessageSection() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left: Map */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full">
        <LeafletMap />
      </div>

      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <form className="w-full max-w-md space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input id="name" name="name" type="text" className="w-full border px-3 py-2 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" className="w-full border px-3 py-2 rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full border px-3 py-2 rounded-md" />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
