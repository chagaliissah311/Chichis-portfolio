import './globals.css';

export const metadata = {
  title: 'Emmaculate Chichi | Model Portfolio',
  description: 'Luxury fashion portfolio featuring runway, editorial, and philanthropic work.',
  keywords: ['model portfolio', 'fashion', 'editorial', 'runway', 'beauty queen'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
