import { GeneralProps } from '@/interfaces/lang-props'
import { Metadata, ResolvingMetadata } from 'next'
import { getDictionary } from './dictionaries'
import { IArrowLarge } from '@/components/atoms/svg/IArrow'
import { NunitoText } from '@/components/atoms/texts/nunito_text'
import { SatoshiText } from '@/components/atoms/texts/satoshi_text'

export async function generateMetadata(
  { params: { lang } }: GeneralProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const dict = await getDictionary(lang)

  return {
    title: `${dict.metadata.title}`,
    description: dict.metadata.description,
    alternates: {
      canonical: `https://`,
    },
    /* keywords: dict.general.metadata.home.keywords, */
  }
}

export default async function Home({ params: { lang } }: GeneralProps) {
  const dict = await getDictionary(lang)
  return (
    <main className="flex h-full w-full max-w-8xl flex-col">
      {dict.metadata.title}
      <IArrowLarge />
      <NunitoText text="NUNITO" style="w700" fontSize="64px" className="" />
      <SatoshiText
        text="Satoshi"
        style="regular"
        fontSize="60px"
        className=""
      />
    </main>
  )
}
