'use client'
import Link from 'next/link'
import { useState } from 'react'
import { SatoshiText } from '../texts/satoshi_text'

interface Props {
  text: string
  href: string
  whitearrow?: boolean
  white?: boolean
  arrow?: boolean
}

export default function Button({
  text,
  href,
  whitearrow,
  arrow,
  white,
}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const togglewhite = isHovered ? !whitearrow : whitearrow

  const buttonClassname = `group/button flex flex-row rounded-full w-fit pl-6 pr-4 py-[18px] gap-3 items-center justify-center ${!arrow ? 'pr-6' : ''} ${white ? 'bg-transparent text-white' : `${togglewhite ? 'bg-transparent text-blue border-blue' : 'bg-light-blue text-white'}`} border`

  const textClassname = `${white ? 'text-white' : `${togglewhite ? 'text-blue' : 'text-white'}`}`

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-fit"
    >
      <div className={buttonClassname}>
        <SatoshiText text={text} fontSize={'14px'} className={textClassname} />
      </div>
    </Link>
  )
}
