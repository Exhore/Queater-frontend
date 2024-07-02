import { Dictionary } from '@/app/[lang]/dictionaries'
import Button from '@/components/atoms/button/button'
import { ReadexProText } from '@/components/atoms/texts/readex_pro_text'
import { SatoshiText } from '@/components/atoms/texts/satoshi_text'
import Image from 'next/image'

interface DiscoverLanzaroteProps {
  dict: Dictionary
}

export default function DiscoverLanzarote({ dict }: DiscoverLanzaroteProps) {
  const options = [
    {
      number: '/1/',
      title: dict.home.discover.firstbox,
      description: dict.home.discover.firstbox_text,
    },
    {
      number: '/2/',
      title: dict.home.discover.secondbox,
      description: dict.home.discover.secondbox_text,
    },
    {
      number: '/3/',
      title: dict.home.discover.thirdbox,
      description: dict.home.discover.thirdbox_text,
    },
  ]
  return (
    <section className="mx-auto px-4 py-2">
      <div className="flex flex-col">
        <div>
          <SatoshiText
            text={dict.home.discover.lanzarote}
            fontSize="24px"
            className="pb-2 leading-[43px] text-[#332C2C]"
          />
        </div>
        <ReadexProText
          text={dict.home.discover.unique}
          fontSize="38px"
          style="w400"
          className="leading-9"
        />
      </div>

      {/* small image with text */}
      <div className="relative flex max-w-8xl flex-col pt-6 lg:flex-row lg:justify-between lg:pt-8">
        <div className="-top-7 right-0 flex items-center gap-4 lg:absolute lg:gap-10 lg:rounded-full lg:rounded-r lg:border-[14px] lg:border-[#ffffff] lg:bg-[#ffffff]">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/home/palmtree.avif'
            }
            alt="Discover Lanzarote"
            width={387}
            height={177}
            unoptimized
            className="max-h-[60px] max-w-[200px] lg:max-h-[177px] lg:max-w-[387px]"
          />

          <div className="flex flex-col items-center justify-center">
            <SatoshiText text="35+" fontSize="60px" />
            <SatoshiText
              text={dict.home.discover.years}
              fontSize="20px"
              className="text-dark-grey"
            />
          </div>
        </div>
        {/* big image with text */}
        <div className="flex">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH +
              '/images/home/famara_mobile.avif'
            }
            alt="Discover Lanzarote"
            width={1216}
            height={631}
            unoptimized
            className="mt-7 min-h-[335px] rounded-2xl object-cover"
          />
        </div>

        <div className="absolute bottom-3 left-4 right-0 max-w-[400px] md:max-w-[512px] lg:bottom-10 lg:left-10">
          <SatoshiText
            text={dict.home.discover.photo_title}
            fontSize="40px"
            style="medium"
            className="pb-4 text-white md:leading-[54px] lg:pb-6"
          />
          <div className="w-fit">
            <Button
              text={dict.home.discover.contact_button}
              href="/contact"
              white
            />
          </div>
        </div>
      </div>
      {/* section above */}
      <div className="mt-7 flex flex-col items-center justify-center gap-4 md:mt-14 lg:flex-row lg:gap-[118px]">
        {options.map((option, index) => (
          <div
            className="onHoverLong flex h-fit max-w-[330px] flex-col text-pretty rounded-3xl px-[30px] py-[45px] hover:bg-blue hover:text-white lg:min-h-[400px]"
            key={index}
          >
            <ReadexProText
              text={option.number}
              fontSize="26px"
              className="items-start pb-[15px]"
            />
            <ReadexProText
              text={option.title}
              fontSize="38px"
              className="pb-[15px]"
            />
            <SatoshiText
              text={option.description}
              fontSize="18px"
              className=""
            />
          </div>
        ))}
      </div>
    </section>
  )
}
