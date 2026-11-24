'use client';

import React from 'react';

/**
 * Motif Buku Terbuka Abstrak — DESIGN.MD Section 11.E
 */
export function OpenBookLogo({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="12" fill="#2457D6" />
      <path
        d="M12 16C12 14.3431 13.3431 13 15 13H21.5C22.8807 13 24 14.1193 24 15.5V34.5C24 33.6716 23.3284 33 22.5 33H15C13.3431 33 12 31.6569 12 30V16Z"
        fill="#FFFFFF"
      />
      <path
        d="M36 16C36 14.3431 34.6569 13 33 13H26.5C25.1193 13 24 14.1193 24 15.5V34.5C24 33.6716 24.6716 33 25.5 33H33C34.6569 33 36 31.6569 36 30V16Z"
        fill="#EAF0FF"
      />
      <circle cx="24" cy="8.5" r="2" fill="#EAF0FF" />
    </svg>
  );
}

/**
 * Ornamen Geometris Abstrak & Dot-Grid — DESIGN.MD Section 11.A & 11.D
 * Hanya digunakan di Login / Hero Dashboard (TIDAK pernah di ruang ujian).
 */
export function HeroGeometricBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Lingkaran besar dengan opacity rendah */}
      <div className="animate-float-slow absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#2457D6] opacity-[0.07]" />
      {/* Rounded rectangle diputar 15 derajat */}
      <div className="absolute top-16 right-12 h-44 w-44 rotate-12 rounded-[32px] border-2 border-[#2457D6] opacity-[0.08]" />
      {/* Half-circle arc */}
      <svg
        className="absolute bottom-8 left-10 h-36 w-36 text-[#2457D6] opacity-[0.1]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M10 110 A 50 50 0 0 1 110 110"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M26 110 A 34 34 0 0 1 94 110"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>
      {/* Pattern dot-grid 6x6 — DESIGN.MD Section 11.D */}
      <svg
        className="absolute top-10 left-1/2 h-28 w-28 -translate-x-1/2 text-[#2457D6] opacity-[0.14]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 6 }).map((__, c) => (
            <circle key={`${r}-${c}`} cx={10 + c * 16} cy={10 + r * 16} r="2" />
          ))
        )}
      </svg>
    </div>
  );
}

/**
 * Ilustrasi Empty State Vektor — DESIGN.MD Section 11.B
 * Karakter sederhana di meja dengan lembar checklist dan tanaman kecil.
 */
export function EmptyExamIllustration({ className = 'w-40 h-32' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Latar lingkaran lembut */}
      <circle cx="100" cy="78" r="56" fill="#EAF0FF" />
      {/* Meja */}
      <rect x="36" y="110" width="128" height="6" rx="3" fill="#2457D6" fillOpacity="0.25" />
      {/* Laptop / Lembar Checklist */}
      <rect
        x="62"
        y="68"
        width="54"
        height="42"
        rx="6"
        fill="#FFFFFF"
        stroke="#2457D6"
        strokeWidth="2"
      />
      <path d="M74 82H102" stroke="#2457D6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M74 91H96" stroke="#8791A5" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M74 100H88" stroke="#8791A5" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="68" cy="82" r="2" fill="#16845B" />
      <circle cx="68" cy="91" r="2" fill="#2457D6" />
      {/* Tanaman kecil di samping */}
      <rect x="128" y="94" width="16" height="16" rx="3" fill="#3267E8" fillOpacity="0.2" />
      <path
        d="M136 94C136 84 128 80 128 80C128 80 134 76 136 86C138 76 144 80 144 80C144 80 136 84 136 94Z"
        fill="#16845B"
      />
    </svg>
  );
}
