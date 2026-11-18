import { useId } from 'react';
import brandMark from '../assets/brand/aeroframe-mark.svg';
import { BRAND_GLYPHS } from '../config/brandGlyphs';

export function AppBrand() {
  const gradientId = useId();

  return (
    <div className="logo" role="img" aria-label="AeroFrame 航影" title="AeroFrame · 航影">
      <img className="brand-mark" src={brandMark} width="38" height="38" alt="" aria-hidden="true" />
      <span className="brand-lockup" aria-hidden="true">
        <svg className="brand-wordmark" viewBox="0 -211 1358 222" fill="none">
          <defs>
            <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="604" y1="0" x2="1358" y2="-160">
              <stop stopColor="#2FD0EC" />
              <stop offset=".48" stopColor="#22A8E8" />
              <stop offset="1" stopColor="#1E7FD8" />
            </linearGradient>
          </defs>
          {BRAND_GLYPHS.map(({ letter, x, path }, index) => (
            <path
              key={`${letter}-${index}`}
              d={path}
              transform={`translate(${x} 0) scale(.306 -.2595)`}
              fill={index < 4 ? 'currentColor' : `url(#${gradientId})`}
              stroke={index < 4 ? 'currentColor' : `url(#${gradientId})`}
              strokeWidth="6.1"
              strokeLinejoin="round"
            />
          ))}
        </svg>
        <span className="brand-caption">
          <span className="brand-name-zh">航影</span>
          <span className="brand-caption-rule" />
          <span className="brand-descriptor">AVIATION PHOTO LIBRARY</span>
        </span>
      </span>
    </div>
  );
}
