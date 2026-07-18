export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem', background: '#f8f0f3', color: '#24121d' }}>
      <div style={{ maxWidth: '520px', width: '100%', textAlign: 'center', background: '#fff', borderRadius: '24px', padding: '2rem', boxShadow: '0 18px 64px rgba(36,18,29,0.12)' }}>
        <h1 style={{ margin: '0 0 1rem', fontSize: '2rem' }}>Page not found</h1>
        <p style={{ margin: '0 0 1rem', color: '#4f3b43' }}>The page you are looking for does not exist or has been moved.</p>
        <a href="/" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.95rem 1.5rem', borderRadius: '999px', background: '#b67f34', color: '#fff', textDecoration: 'none' }}>
          Return home
        </a>
      </div>
    </main>
  );
}
