import './globals.css'


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
      <body className="flex justify-center items-center flex-col bg-blue-500">{children}</body>
    </html>
  )
}
