'use client';

export default function ErrorPage({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem', background: '#f8f0f3', color: '#24121d' }}>
          <div style={{ maxWidth: '520px', width: '100%', textAlign: 'center', background: '#fff', borderRadius: '24px', padding: '2rem', boxShadow: '0 18px 64px rgba(36,18,29,0.12)' }}>
            <h1 style={{ margin: '0 0 1rem', fontSize: '2rem' }}>Something went wrong</h1>
            <p style={{ margin: '0 0 1rem', color: '#4f3b43' }}>An unexpected error occurred while loading the page. Please try again.</p>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#7f4b62' }}>{error?.message}</pre>
            <button style={{ marginTop: '1.5rem', padding: '0.95rem 1.5rem', borderRadius: '999px', border: '1px solid #b67f34', background: '#b67f34', color: '#fff', cursor: 'pointer' }} onClick={() => reset()}>
              Reload page
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
