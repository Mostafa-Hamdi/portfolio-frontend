export default function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82c-1.06-.94-1.73-2.29-1.75-3.82h-3.4v13.4c0 1.66-1.34 3-3 3-1.66 0-3-1.34-3-3s1.34-3 3-3c.31 0 .61.05.9.13V8.98c-.3-.04-.6-.06-.9-.06-3.34 0-6 2.7-6 6s2.66 6 6 6 6-2.7 6-6V9.13c1.34.98 2.99 1.55 4.75 1.55V7.28c-.98 0-1.9-.28-2.6-.75-.35-.23-.68-.51-1-.71z" />
    </svg>
  );
}
