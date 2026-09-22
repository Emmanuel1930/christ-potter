const paths = {
  family: (
    <>
      <path d="M12 30V16l8-8 8 8v14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M17 30v-8h6v8" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  youth: (
    <>
      <circle cx="20" cy="14" r="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 31c1.5-6 6-9 11-9s9.5 3 11 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  scripture: (
    <path d="M8 20h24M8 12h24M8 28h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  ),
  worship: (
    <path
      d="M20 6v28M8 14c4-3 8-3 12 0s8 3 12 0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  outreach: (
    <path
      d="M20 4l4 8 9 1-6.5 6 1.5 9-8-4.5-8 4.5 1.5-9L7 13l9-1 4-8Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  ),
  care: (
    <>
      <path d="M11 26c0-8 4-14 9-16 5 2 9 8 9 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 26h18v4H11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
};

export default function MinistryIcon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {paths[name] ?? null}
    </svg>
  );
}
