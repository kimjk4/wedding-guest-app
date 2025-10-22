export const metadata = { title: 'Wedding Guest App' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="mx-auto max-w-3xl p-4">{children}</div>
      </body>
    </html>
  )
}