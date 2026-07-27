// Small stroke-style icons (24x24 viewBox), color inherited via currentColor.
// Kept local to the book promo section for now.

export function IconBook(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5V4.5Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </svg>
  );
}

export function IconStack(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

export function IconPen(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
    </svg>
  );
}

export function IconBox(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 8 12 3 3 8l9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="currentColor"
      strokeWidth="1.2" strokeLinejoin="round" {...props}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

export function IconCart(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export function IconLeaf(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M20 3c-8 0-14 5.5-14 13 0 2 .4 3.6 1 5 1.4-4.8 4.6-8.7 9-11-3.6 2.9-6 7-6.8 11.6C10.8 21.6 12.4 22 14 22c7.5 0 13-6 13-14 0-1.8-.2-3.6-.6-5-2 0-4.3-.1-6.4 0Z" />
    </svg>
  );
}

export function IconHeart(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 21s-7.5-4.6-10.2-9.3C.2 8.9 1.3 5.4 4.6 4.2c2-.7 4.1 0 5.4 1.7l2 2.6 2-2.6c1.3-1.7 3.4-2.4 5.4-1.7 3.3 1.2 4.4 4.7 2.8 7.5C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

export function IconBulb(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.05V17h6v-2.25c0-.85.4-1.55 1-2.05A7 7 0 0 0 12 2Z"
        fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}
export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.38c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.4a8.14 8.14 0 0 1 2.4 5.79c0 4.53-3.68 8.25-8.16 8.25Zm4.5-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.44.06-.67.31-.23.25-.87.86-.87 2.09 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"/>
    </svg>
  );
}

export function IconChili(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 3c1.5 1 1 2.5 0 3.5" />
      <path d="M6 6c5-1 12 1 13 7-1 6-8 8-13 6-3-1.2-4.5-4-3.5-7C3.3 9.3 5.5 6.4 6 6Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

export function IconCoconut(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="13" r="8" fill="currentColor" fillOpacity="0.15" />
      <path d="M9 6.5C8 4.5 8.5 2.5 10 2c1 2 1 3.5.5 5" strokeLinecap="round" />
      <path d="M15 6.5c1-2 .5-4 -1-4.5-1 2-1 3.5-.5 5" strokeLinecap="round" />
      <path d="M9 13c0-1.8 1.4-3.2 3-3.2s3 1.4 3 3.2-1.4 3.5-3 3.5-3-1.7-3-3.5Z" />
    </svg>
  );
}

export function IconBowl(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3.5 12h17c-.6 4.6-4.3 8-8.5 8s-7.9-3.4-8.5-8Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M8.5 4.5c-.6.9-.5 2 .3 2.6" />
      <path d="M12 3.5c-.4 1 0 2.1 1 2.6" />
      <path d="M15.3 4.8c.5 1-.1 2-.9 2.4" />
    </svg>
  );
}

export function IconSpices(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 10h12l-1.4 8.2a2 2 0 0 1-2 1.8H9.4a2 2 0 0 1-2-1.8L6 10Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M4 10h16" />
      <path d="M9 6.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5" />
    </svg>
  );
}

export function IconLotus(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21c-4-1.4-7-4.6-7-8.8C7 11 9.6 10 12 10s5 1 7 2.2C19 16.4 16 19.6 12 21Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 10c-1.5-2-1.5-5 0-7 1.5 2 1.5 5 0 7Z" />
      <path d="M8 11c-2-1.3-3.2-3.7-3-6 2 .3 3.9 1.7 4.8 3.8" />
      <path d="M16 11c2-1.3 3.2-3.7 3-6-2 .3-3.9 1.7-4.8 3.8" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
