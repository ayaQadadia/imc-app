import './input.css'
import Providers from "@/app/providers";
import Head from "@/app/head";

export default function RootLayout({ children}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head/>
          <body>
            <Providers>{children}</Providers>
          </body>
    </html>
  )
}
