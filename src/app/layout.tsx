import './globals.css'
import icon from "../assets/icon.png"

export const metadata = {
  title: 'C.O.V.E.R | Agência de Marketing',
  description: 'Agência de Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
      <meta name="description" content="Agência de Marketing" />
      <meta name="keywords" content="Agência, Marketing" />
      <meta name="author" content="Óscar Jeremias" />
        <link rel="icon" type="image/x-icon" href={icon.src} />
      </head>
      <body className="flex justify-center items-center flex-col bg-white">{children}</body>
    </html>
  )
}
