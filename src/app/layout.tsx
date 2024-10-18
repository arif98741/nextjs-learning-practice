export const metadata = {
  title: "Next.js Home",
  description: "home description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
        }}
      >
        <header
          style={{
            background: "lightblue",
            padding: "1rem",
          }}
        >
          Header
        </header>

        {children}

        <footer
          style={{
            background: "#ddd",
            padding: "1rem",
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}
