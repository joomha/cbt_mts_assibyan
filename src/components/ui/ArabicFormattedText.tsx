'use client';

import React from 'react';

const ARABIC_CHAR_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

export function containsArabic(text: string): boolean {
  return ARABIC_CHAR_REGEX.test(text);
}

/**
 * Apakah mayoritas huruf pada baris ini adalah huruf Arab?
 * Jika ya, tampilkan dengan dir="rtl" dan ukuran font Amiri yang nyaman.
 */
export function isMostlyArabic(text: string): boolean {
  const clean = text.replace(/<\/?u>/g, '').replace(/[0-9\s.,?!:;()\-_"'/]/g, '');
  if (!clean) return false;
  let arabicCount = 0;
  for (const ch of clean) {
    if (ARABIC_CHAR_REGEX.test(ch)) arabicCount++;
  }
  return arabicCount / clean.length >= 0.45;
}

/**
 * Merender teks dengan dukungan:
 * - Tag garis bawah `<u>...</u>` dari dokumen soal asli
 * - Deteksi segmen huruf Arab otomatis agar menggunakan font Amiri (harakat jelas)
 */
export function renderFormattedSegments(line: string): React.ReactNode[] {
  // Pisahkan berdasarkan tag <u>...</u>
  const parts = line.split(/(<u>[\s\S]*?<\/u>)/g);

  return parts.map((part, idx) => {
    const isUnderlined = part.startsWith('<u>') && part.endsWith('</u>');
    const content = isUnderlined ? part.slice(3, -4) : part;
    if (!content) return null;

    // Pisahkan segmen Arab dan Latin di dalam content
    const subSegments = content.split(
      /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+(?:\s+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+)*)/g
    );

    const renderedSubs = subSegments.map((seg, sIdx) => {
      if (!seg) return null;
      if (containsArabic(seg)) {
        return (
          <span key={sIdx} className="arabic-text inline-block px-1" dir="rtl">
            {seg}
          </span>
        );
      }
      return <React.Fragment key={sIdx}>{seg}</React.Fragment>;
    });

    if (isUnderlined) {
      return (
        <u
          key={idx}
          className="underline decoration-[#2457D6] decoration-2 underline-offset-4 font-semibold"
        >
          {renderedSubs}
        </u>
      );
    }

    return <React.Fragment key={idx}>{renderedSubs}</React.Fragment>;
  });
}

interface ArabicFormattedTextProps {
  text: string;
  className?: string;
}

export function ArabicFormattedText({ text, className = '' }: ArabicFormattedTextProps) {
  if (!text) return null;
  const lines = text.split('\n');

  return (
    <div className={`question-content space-y-2 ${className}`}>
      {lines.map((line, i) => {
        const mostlyAr = isMostlyArabic(line);
        return (
          <p
            key={i}
            dir={mostlyAr ? 'rtl' : 'ltr'}
            className={`${
              mostlyAr
                ? 'arabic-text text-right text-[23px] sm:text-[25px] leading-[2.2]'
                : 'text-left leading-[1.65]'
            }`}
          >
            {renderFormattedSegments(line)}
          </p>
        );
      })}
    </div>
  );
}
