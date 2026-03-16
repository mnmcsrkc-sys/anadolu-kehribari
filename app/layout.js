export const metadata = {
  title: 'Anadolu Kehribarı',
  description: 'Zaman Yoktur.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}