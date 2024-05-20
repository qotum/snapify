import MANIFEST from "@/constants/seo/manifest";
import type { Metadata } from "next";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

type MetadataProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string[];
  thumbnailUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  noImageIndex?: boolean;
};

const devMode = process.env.APP_ENV !== "production";

export const generateMetadata = ({
  title,
  subtitle,
  description,
  keywords,
  thumbnailUrl,
  noIndex,
  noFollow,
  noImageIndex,
}: MetadataProps): Metadata => {
  title = `${title ? `${title} - ` : ""}${MANIFEST.APP_NAME}${
    subtitle ? ` • ${subtitle}` : ""
  }`;

  description = description || MANIFEST.APP_DESCRIPTION;

  const openGraph: OpenGraph = {
    type: "website",
    url: MANIFEST.APP_URL,
    title,
    description,
    images: [
      {
        url:
          thumbnailUrl ||
          `${MANIFEST.APP_URL}/static/images/open-graph/open-graph-image.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: MANIFEST.APP_LOCALE,
    alternateLocale: MANIFEST.APP_ALTERNATE_LOCALE,
    countryName: MANIFEST.APP_COUNTRY_NAME,
    siteName: MANIFEST.APP_NAME,
    emails: MANIFEST.APP_EMAILS,
  };

  return {
    title,
    description,
    keywords,
    openGraph,
    robots: {
      googleBot: {
        index: noIndex || !devMode,
        follow: noFollow || !devMode,
      },
      index: noIndex || !devMode,
      follow: noFollow || !devMode,
      noimageindex: noImageIndex || !devMode,
    },
    twitter: {
      card: "summary_large_image",
      site: MANIFEST.APP_URL,
    },
    icons: [{ rel: "shortcut icon", url: "static/images/favicon/favicon.ico" }],
    applicationName: MANIFEST.APP_NAME,
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      title,
      startupImage: "/static/images/hero-1.jpg", //"/static/images/splash/splash-screen.jpg",
      statusBarStyle: "default",
    },
  };
};
