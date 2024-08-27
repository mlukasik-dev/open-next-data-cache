import type { PropsWithChildren } from "react";
import { notFound } from "next/navigation";
import "../../global.css";

import { SUPPORTED_LANGS } from "../../i18n";

export default function RootLayout({
  params: { lang },
  children,
}: PropsWithChildren<{ params: { lang: string } }>) {
  if (!SUPPORTED_LANGS.includes(lang)) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [];
}
