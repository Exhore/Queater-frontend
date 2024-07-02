import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '../globals.css'
import localFont from 'next/font/local'
import { LangOptions, getDictionary } from './dictionaries'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

const satoshiRegular = localFont({
  src: '../fonts/Satoshi-Regular.otf',
  display: 'auto',
  variable: '--font-satoshi-regular',
})
const satoshiBold = localFont({
  src: '../fonts/Satoshi-Bold.otf',
  display: 'swap',
  variable: '--font-satoshi-bold',
})
const satoshiLight = localFont({
  src: '../fonts/Satoshi-Light.otf',
  display: 'swap',
  variable: '--font-satoshi-light',
})
const satoshiMedium = localFont({
  src: '../fonts/Satoshi-Medium.otf',
  display: 'swap',
  variable: '--font-satoshi-Medium',
})
const satoshiBlack = localFont({
  src: '../fonts/Satoshi-Black.otf',
  display: 'swap',
  variable: '--font-satoshi-black',
})

export const metadata: Metadata = {
  title: 'Queater',
  description: '',
  alternates: {
    canonical: 'https://queater.com/',
  },
}

interface Props {
  params: {
    lang: LangOptions
  }
  children: React.ReactNode
}

export default async function RootLayout({ children, params }: Props) {
  const imagePath = `${process.env.NEXT_PUBLIC_IMAGES_PATH}/images/opengraph.png`
  const dict = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
      {/* opengraph */}
      <head>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content={imagePath} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="169" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Queater" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_IMAGES_PATH} />
      </head>
      {/* viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* body */}
      <body
        className={`flex h-full w-full max-w-8xl flex-col ${satoshiRegular.variable} ${satoshiBold.variable} ${satoshiLight.variable} ${satoshiMedium.variable} ${satoshiBlack.variable} ${nunito}`}
      >
        {children}
      </body>
    </html>
  )
}
