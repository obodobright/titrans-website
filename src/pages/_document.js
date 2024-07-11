import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title=" Technology Training and IT Consultancy - Titrans Technology">
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="14x14" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>

        <meta
          name="keywords"
          content="Technology,Technology Training Programs, IT Training Courses, Tech Skills Training, Software Development Training, Cloud Computing Training, AI Training Courses,IT Security Consulting,IT Systems Integration"
        />
        <meta
          name="description"
          content=" Technology Training and IT Consultancy - Titrans Technology"
        />
        <meta name="viewport" content="width=device-width" />
        <meta name="fragment" content="!" />
        <meta name="referrer" content="always" />
        <meta name="robots" content="index, follow" />
        <meta
          name="theme-color"
          content="#F4B004
"
        />
        <meta name="title" content="Titrans Technology |  Tech Education and Mentorship" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://titrans-website.vercel.app/" />
        <meta
          property="og:title"
          content=" Technology Training and IT Conssultancy - Titrans Technology"
        />
        <meta property="og:description" content="  Technology Training and IT Conssultancy" />
        <meta property="og:image" content="https://titrans-website.vercel.app/titrans-logo.png" />
        <link rel="canonical" href="https://titrans-website.vercel.app/"></link>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://titrans-website.vercel.app/" />
        <meta
          property="twitter:title"
          content="Titrans Technology |  Tech Education and Mentorship"
        />
        <meta
          property="twitter:description"
          content="Titrans Technology |  Tech Education and Mentorship"
        />
        <meta
          property="twitter:image"
          content="https://titrans-website.vercel.app/titrans-logo.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Titrans Technology",
              url: "https://titrans-website.vercel.app",
              logo: "https://titrans-website.vercel.app/titrans-logo.png",
              sameAs: [
                "https://twitter.com/TitransTech",
                "https://ng.linkedin.com/in/titrans-technology-165bab1a9",
                "https://web.facebook.com/p/Titrans-Technology-100067238292329",
                "https://www.instagram.com/titranstech?igsh=aGc3MWxlNTh2OGg2",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
