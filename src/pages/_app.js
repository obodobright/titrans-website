import "@/styles/globals.css";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${syne.className} font-lato`}>
      <Component {...pageProps} />
    </main>
  );
}
