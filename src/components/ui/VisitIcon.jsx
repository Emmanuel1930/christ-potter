const paths = {
  pin: (
    <>
      <path
        d="M12 21s-7-6.2-7-11.6C5 5.4 8.1 3 12 3s7 2.4 7 6.4C19 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 9.5h16M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  phone: (
    <path
      d="M6.5 4h2.8l1.2 4-2 1.4a10.5 10.5 0 0 0 5.1 5.1l1.4-2 4 1.2v2.8c0 1-.9 1.7-1.8 1.5-6-1.2-10.7-5.9-11.9-11.9C4.8 4.9 5.5 4 6.5 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
};

export default function VisitIcon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name] ?? null}
    </svg>
  );
}
