/**
 * SEO.jsx — Drop this into src/components/SEO.jsx
 *
 * Usage in any page:
 *   <SEO
 *     title="Services | UM Web Solutions"
 *     description="We build React, Django, full-stack websites..."
 *     path="/services"
 *   />
 */

import { Helmet } from "react-helmet-async";

const BASE_URL = "https://umwebsolutions.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = "UM Web Solutions";

export default function SEO({
  title,
  description,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  schema = null, // optional page-specific JSON-LD
}) {
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Page-specific structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}