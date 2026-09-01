import type { Metadata } from "next";
import { AppProviders } from "../providers";
import { buildMetadata, buildJsonLd } from "../seo";
import Home from "../Home";

export const metadata: Metadata = buildMetadata("en");

const jsonLd = buildJsonLd("en");

export default function Page() {
  return (
    <AppProviders lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </AppProviders>
  );
}
