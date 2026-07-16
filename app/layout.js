import './globals.css';

export const metadata = {
  title: 'Immaculate Chichi | Model Portfolio',
  description: 'Luxury fashion portfolio featuring runway, editorial, and philanthropic work.',
  keywords: ['model portfolio', 'fashion', 'editorial', 'runway', 'beauty queen'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
