import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" /> */}
<link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
<link rel="icon" href="/icon.svg" type="image/x-icon" />
      {/* <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400&amp;display=swap" rel="stylesheet" /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}