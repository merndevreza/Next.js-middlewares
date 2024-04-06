import "./globals.css";

export const metadata = {
  title: "Middleware",
  description: "Next.js middleware",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
