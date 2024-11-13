import localFont from "next/font/local";
import "@/app/globals.css";
import MenuPrincipal from "@/components/menu-principal";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"/>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex `}>

        <MenuPrincipal/>
  
     
        <main className="overflow-y-auto grow mx-2 pb-6">
        {children}
        </main>
      </body>
    </html>
  );
}
