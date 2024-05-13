import "@/styles/globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${lato.className} font-lato`}>
      <Component {...pageProps} />
    </main>
  );
}
