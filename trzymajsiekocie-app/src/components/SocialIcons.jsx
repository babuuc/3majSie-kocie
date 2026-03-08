export function TikTokIcon({ size = 18, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function LinktreeIcon({ size = 18, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 417 512"
      fill="currentColor"
      className={className}
    >
      <path d="M164.1 71.6 81.4 154.3l49.5 49.5 82.8-82.8 82.7 82.8 49.5-49.5-82.7-82.7 82.7-82.8L296.4.3 213.7 83 131 .3 81.4 49.8l82.7 82.8zm-82.7 199.3 49.5 49.5 82.8-82.8 82.7 82.8 49.5-49.5-82.7-82.8h116.1v-70H279.7L213.7 184l-66-66.1H.3v70h116.1zM179.5 372h68.3v140h-68.3z" />
    </svg>
  );
}
