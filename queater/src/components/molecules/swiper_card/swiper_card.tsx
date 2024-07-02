import Arrow from '@/components/atoms/svg/arrow'
import Bed from '@/components/atoms/svg/bed'
import Check from '@/components/atoms/svg/check'
import DoubleCheck from '@/components/atoms/svg/double_check'
import HomeIcon from '@/components/atoms/svg/home_icon'
import Info from '@/components/atoms/svg/info'
import LacationRounded from '@/components/atoms/svg/location_rounded'
import Phone from '@/components/atoms/svg/phone'
import Price from '@/components/atoms/svg/price'
import ResizeScreen from '@/components/atoms/svg/resize_screen'
import Shower from '@/components/atoms/svg/shower'
import SquareMeters from '@/components/atoms/svg/square_meters'
import TypeIcon from '@/components/atoms/svg/type_icon'
import Warning from '@/components/atoms/svg/warning'
import { SatoshiText } from '@/components/atoms/texts/satoshi_text'
import Image from 'next/image'

interface SwiperCardProps {
  image: string
  title: string
  location: string
  beds: string
  shower: string
  homeMeters: string
  squareMeters: string
  price: string
}
export default function SwiperCard(props: SwiperCardProps) {
  return (
    <>
      <div className="w-fullrounded-xl shadow-lg">
        <Image
          width={576}
          height={432}
          src={props.image}
          alt={''}
          unoptimized
          className="mb-4 w-full rounded-lg object-cover"
        />
        {/* cONTENT */}
        <div className="divide-gray-light flex flex-col gap-3 divide-y-[1px]">
          {/* UP */}
          <div className="flex flex-col gap-2">
            {/* TITLE */}
            <SatoshiText
              text={props.title}
              style="medium"
              className="text-white"
              fontSize="24px"
            />
            {/* ADDRESS */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-3">
                <LacationRounded />
                <SatoshiText
                  text={props.location}
                  className="text-white opacity-60"
                  fontSize="20px"
                  style="light"
                />
              </div>
              <SatoshiText
                text={props.price}
                className="block text-white sm:hidden"
                fontSize="24px"
                style="medium"
              />
            </div>
          </div>
          {/* DOWN */}
          <div className="flex flex-col items-center justify-between gap-2 pt-3 sm:flex-row">
            {/* CARACTERISTICS */}
            <div className="flex flex-row items-center gap-6">
              <div className="flex flex-row items-center gap-2">
                <Bed />
                <SatoshiText
                  text={props.beds}
                  className="text-white"
                  style="light"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <Shower />
                <SatoshiText
                  text={props.shower}
                  className="text-white"
                  style="light"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <HomeIcon />
                <SatoshiText
                  text={props.homeMeters}
                  className="text-white"
                  style="light"
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <SquareMeters />
                <SatoshiText
                  text={props.squareMeters}
                  className="text-white"
                  style="light"
                />
              </div>
            </div>
            {/* PRICE */}
            <SatoshiText
              text={props.price}
              className="hidden text-white sm:block"
              fontSize="24px"
              style="medium"
            />
          </div>
        </div>
      </div>
    </>
  )
}
