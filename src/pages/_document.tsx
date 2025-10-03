import { Html, Head, Main, NextScript } from "next/document";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "μment - Kickstart Your Project Journey",
  description: "μment is a platform designed to help you kickstart your project journey with ease. Explore our features and get started today!",
  openGraph: {
    title: "μment - Kickstart Your Project Journey",
    description: "μment is a platform designed to help you kickstart your project journey with ease. Explore our features and get started today!",
    url: "https://µment-2025.vercel.app",
    siteName: "μment",
    // images: [{}],
    locale: "en_US",
    type: "website",
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
