import type { Metadata } from "next";
import "./globals.css";
import { buildMetadata } from "./seo";

export const metadata: Metadata = buildMetadata("ar");

export const viewport = {
  themeColor: "#061420",
};

// Runs before paint so the correct lang/dir is applied instantly on direct
// loads of /en, without waiting for React to hydrate. Content itself is
// always correctly server-rendered per route by AppProviders in each page —
// this only corrects the shared <html> tag's attributes.
const noFlashScript = `
(function () {
  try {
    var isEn = location.pathname.indexOf("/en") === 0;
    document.documentElement.lang = isEn ? "en" : "ar";
    document.documentElement.dir = isEn ? "ltr" : "rtl";
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
