export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '20px 0', background: '#fff' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.05em', color: 'var(--text)' }}>
          Jency<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <p style={{ fontSize: 12, color: 'var(--text-subtle)', fontWeight: 400 }}>
          &copy; {new Date().getFullYear()} Jency Sodvadiya — MERN Stack Developer
        </p>
        <p style={{ fontSize: 12, color: 'var(--text-subtle)', fontWeight: 400 }}>
          Built with Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
