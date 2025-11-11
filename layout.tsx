import './globals.css'

export const metadata = {
  title: 'Anay - Portfolio',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}