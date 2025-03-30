
import React from "react";

export default function CleanomicsLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Commercial Cleaning Reinvented</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Cleanomics combines professional cleaning with AI-powered operations, QR-code check-ins, and automated reporting — all delivered by trusted franchise partners.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white py-2 px-6 rounded-2xl shadow hover:bg-green-700">
            Request a Quote
          </button>
          <button className="border border-green-600 text-green-600 py-2 px-6 rounded-2xl hover:bg-green-50">
            Start a Franchise
          </button>
        </div>
      </section>
    </div>
  );
}
