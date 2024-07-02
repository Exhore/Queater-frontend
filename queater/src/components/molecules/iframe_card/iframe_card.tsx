import { Dictionary } from '@/app/[lang]/dictionaries'
import Phone from '@/components/atoms/svg/phone'
import { InterText } from '@/components/atoms/texts/inter_text'
import Image from 'next/image'

interface IframeCardProps {
  dict: Dictionary
}

export default function IframeCard({ dict }: IframeCardProps) {
  return (
    <>
      <div className="flex max-w-[319px] flex-col rounded-[14px] bg-[white] p-4 text-black shadow-xl md:p-8">
        {/* olsen logo + title + subtitle box */}
        <div className="flex items-center border-b-2 pb-2 md:pb-5">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/logo_olsen.avif'
            }
            alt={'Olsen Estate logo'}
            width={58}
            height={56}
            unoptimized
          />
          <div className="ml-5 flex flex-col">
            <InterText
              text={dict.contact.card_title}
              style="w600"
              fontSize="14px"
              className="leading-4"
            />
            <InterText
              text={dict.contact.card_subtitle}
              style="w400"
              fontSize="12px"
              className="mt-1 leading-[14px]"
            />
          </div>
        </div>
        {/* location box */}
        <div className="mt-2 flex flex-col border-b-2 pb-2 md:mt-5 md:pb-5">
          <InterText
            text={dict.contact.location}
            style="w600"
            fontSize="14px"
            className="leading-4"
          />
          <InterText
            text={dict.contact.location_address}
            style="w400"
            fontSize="12px"
            className="mt-1 leading-4 md:mt-3"
          />
        </div>
        {/* svg + tel box */}
        <div className="mt-2 flex items-center gap-2 md:mt-5 md:gap-4">
          <Phone />
          <InterText
            text={'+61 3 8762 3100'}
            style="w600"
            fontSize="14px"
            className="leading-4 opacity-50"
          />
        </div>
      </div>
    </>
  )
}
