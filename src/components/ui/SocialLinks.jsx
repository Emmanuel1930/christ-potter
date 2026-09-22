import { church } from "../../lib/content";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      <a href={church.facebookUrl} target="_blank" rel="noreferrer" aria-label="Christ the Potter Church on Facebook">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 8.5h2V5.2c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.84 1.8-4.84 5.1V13H6.5v3.6h2.76V23h3.6v-6.4h2.65l.42-3.6h-3.07V10.5c0-1.04.28-1.75 1.74-1.75Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a href={church.youtubeUrl} target="_blank" rel="noreferrer" aria-label="Christ the Potter Church on YouTube">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M22 12s0-3.2-.4-4.7a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.5a2.6 2.6 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7a2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.5a2.6 2.6 0 0 0 1.8-1.8c.4-1.5.4-4.7.4-4.7Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path d="M10 9.5v5l4.5-2.5Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
