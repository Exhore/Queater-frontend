import { Dictionary } from '@/app/[lang]/dictionaries'
import Button from '@/components/atoms/button/button'
import { InterText } from '@/components/atoms/texts/inter_text'
import Image from 'next/image'

interface ContactSeaImageProps {
  dict: Dictionary
}

export default function ContactSeaImage({ dict }: ContactSeaImageProps) {
  return (
    <>
      <div className="relative mx-auto flex h-[420px] w-full max-w-[1368px]">
        {/* imagen */}
        <Image
          src={
            process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/search_page/sea.avif'
          }
          width={1368}
          height={420}
          alt={'a sea'}
          unoptimized
          className="h-full w-full rounded-3xl object-cover object-bottom"
        />
        {/* textos */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center text-pretty border-2 p-4 text-[white] sm:flex-row xl:p-0">
          <InterText
            text={dict.searchpage.seatitle}
            fontSize="64px"
            style="w400"
            className="max-w-[612px] text-center leading-[70px]"
          />
          {/* segundo texto */}
          <div className="mt-10 flex flex-col gap-[42px] md:ml-[70px]">
            <InterText
              text={dict.searchpage.seadescription}
              fontSize="16px"
              style="w400"
              className="max-w-[385px] leading-5 text-[#D9D9D9]"
            />
            {/* button */}
            <Button
              text={dict.searchpage.seacontact_button}
              href="/contact"
              white
              whitearrow
            />
          </div>
        </div>
      </div>
    </>
  )
}
