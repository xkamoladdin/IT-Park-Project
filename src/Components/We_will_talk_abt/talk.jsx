import React, { useState } from "react";
import themes from "./themes"
export default function EventDetails() {
  const [active, setActive] = useState(0);
  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">We will talk about:</h2>
        {themes.map((theme, i) => (
          <div key={i} className="mb-4">
            <button
              onClick={() => setActive(i)}
              className="flex items-start gap-2 text-left w-full"
            >
              <span className={`text-red-500 font-bold text-lg`}>{active === i ? "−" : "+"}</span>
              <span className={`font-semibold ${active === i ? "text-black" : "text-red-500"}`}>{theme.title}</span>
            </button>
            {active === i && (
              <p className="mt-2 text-gray-600 text-sm pl-6">{theme.content}</p>
            )}
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase">Time</h3>
          <p className="text-red-500 font-semibold text-lg">August 5, 11:00 – 14:00</p>
          <p className="text-sm text-gray-500">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase">Price</h3>
          <p className="text-red-500 font-semibold">Free</p>
          <p className="text-sm text-gray-500">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
        </div>
        <a href="#" className="text-red-500 text-xs uppercase font-semibold underline block mb-4">
          Event on Facebook
        </a>
        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded hover:opacity-90 transition">
          Join the event
        </button>
      </div>
    </div>
  );
}
