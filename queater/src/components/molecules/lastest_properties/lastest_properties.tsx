'use client'
import { SatoshiText } from '@/components/atoms/texts/satoshi_text'
import Link from 'next/link'
import { useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IArrowLarge } from '@/components/atoms/svg/iarrow'
import SwiperCard from '../swiper_card/swiper_card'

export default function LastestProperties() {
  const [isHovered, setIsHovered] = useState(false)

  const cards = [
    {
      title: 'Luxurious Mansion with Spectacular Views',
      location: 'Playa Blanca',
      bed: '7',
      shower: '7',
      homeMeters: '670 m',
      squareMeters: '4.828 m',
      price: '200.000€',
      image: '/images/swiper/swiper.avif',
    },
    {
      title: 'Luxurious Mansion with Spectacular Views',
      location: 'Playa Blanca',
      bed: '7',
      shower: '7',
      homeMeters: '670 m',
      squareMeters: '4.828 m',
      price: '200.000€',
      image: '/images/swiper/swiper.avif',
    },
    {
      title: 'Luxurious Mansion with Spectacular Views',
      location: 'Playa Blanca',
      bed: '7',
      shower: '7',
      homeMeters: '670 m',
      squareMeters: '4.828 m',
      price: '200.000€',
      image: '/images/swiper/swiper.avif',
    },
    {
      title: 'Luxurious Mansion with Spectacular Views',
      location: 'Playa Blanca',
      bed: '7',
      shower: '7',
      homeMeters: '670 m',
      squareMeters: '4.828 m',
      price: '200.000€',
      image: '/images/swiper/swiper.avif',
    },
    {
      title: 'Luxurious Mansion with Spectacular Views',
      location: 'Playa Blanca',
      bed: '7',
      shower: '7',
      homeMeters: '670 m',
      squareMeters: '4.828 m',
      price: '200.000€',
      image: '/images/swiper/swiper.avif',
    },
  ]
  return (
    <div className="flex h-fit max-h-[917px] w-full flex-col gap-14 bg-darker-blue py-14 !pl-5 md:py-28 xl:!pl-0">
      {/* Title */}
      <div className="mx-auto flex w-full max-w-[1211px] flex-col items-center justify-between gap-4 md:flex-row">
        <SatoshiText
          text={'Lastest Properties for Sale in Lanzarote'}
          style="black"
          className="text-white"
          fontSize="40px"
        />
        <Link
          href={'/'}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex w-full flex-row justify-end gap-7 md:w-fit"
        >
          <SatoshiText
            text={'SEE MORE'}
            fontSize="14px"
            style="black"
            className="shrink-0 text-white"
          />
          {/* ARROW */}
          <IArrowLarge
            large={isHovered}
            isHovered={isHovered}
            className="w-20"
          />
        </Link>
      </div>
      {/* Swiper */}
      <div className="w-full">
        <Swiper
          spaceBetween={44}
          slidesPerView={'auto'} // Mostrar una diapositiva a la vez
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className={` ${index === 0 ? 'swiper-margin-left' : ''} ${cards.length && index === cards.length - 1 ? 'swiper-margin-right' : ''} !w-[300px] sm:!w-[576px]`}
            >
              <SwiperCard
                image={card.image}
                title={card.title}
                location={card.location}
                beds={card.bed}
                shower={card.shower}
                homeMeters={card.homeMeters}
                squareMeters={card.squareMeters}
                price={card.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
