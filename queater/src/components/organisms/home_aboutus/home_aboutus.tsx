import { Dictionary } from '@/app/[lang]/dictionaries'
import SectionLayout from '@/components/atoms/section_layout/section_layout'
import Arrow from '@/components/atoms/svg/arrow'
import { InterText } from '@/components/atoms/texts/inter_text'
import { SatoshiText } from '@/components/atoms/texts/satoshi_text'
import Image from 'next/image'

interface HomeAboutUsProps {
  dict: Dictionary
}

export default function HomeAboutUs({ dict }: HomeAboutUsProps) {
  return (
    <section className="mx-auto mt-10 flex w-full max-w-10xl flex-col items-center px-4 md:flex-row xl:px-10">
      {/* foto */}
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Image
          src={
            process.env.NEXT_PUBLIC_IMAGES_PATH +
            '/images/home/olsen_estate.avif'
          }
          width={608}
          alt="Olsen Estate location"
          height={460}
          unoptimized
          priority
          className="rounded-3xl object-cover md:h-[450px] md:w-[350px] lg:w-[608px]"
        />
        {/* textos */}
        <div className="mt-5 flex flex-col gap-1 text-[#332C2C] md:mt-0 md:gap-3 md:pl-20">
          <SatoshiText
            text={dict.home.about_us.title}
            fontSize="24px"
            style="medium"
            className="leading-7 md:leading-[59px]"
          />
          <SatoshiText
            text={dict.home.about_us.subtitle}
            fontSize="44px"
            style="bold"
            className="mt-2 leading-7 md:leading-[59px]"
          />
          <SatoshiText
            text={dict.home.about_us.text}
            fontSize="18px"
            style="regular"
            className="mt-2 leading-4 text-[#a39f9f] md:mt-3 md:leading-8"
          />
          {/* boton about us faltante */}
          <div className="flex items-baseline">
            <InterText
              text={dict.home.about_us.button}
              fontSize="16px"
              style="w400"
              className="mt-2 leading-4 md:mt-3"
            />
            <Arrow className="ml-7" />
          </div>
        </div>
      </div>
    </section>
  )
}
