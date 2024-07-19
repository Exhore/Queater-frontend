'use client'
import { forwardRef, useEffect, useRef } from 'react'

export interface SatoshiTextProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  style?: 'light' | 'regular' | 'medium' | 'bold' | 'black'
  fontSize?:
    | '14px'
    | '16px'
    | '18px'
    | '20px'
    | '24px'
    | '36px'
    | '40px'
    | '44px'
    | '60px'
  className?: string
}

export const SatoshiText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  SatoshiTextProps
>(
  (
    {
      text,
      tag = 'p',
      style = 'regular',
      fontSize = '16px',
      className = 'text-black',
    },
    ref,
  ) => {
    useEffect(() => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.innerHTML = text
      }
    }, [text, ref])

    function getSize() {
      switch (fontSize) {
        case '14px':
          return 'text-[14px]'
        case '16px':
          return 'text-[16px]'
        case '18px':
          return 'text-[18px]'
        case '20px':
          return 'text-[16px] md:text-[20px]'
        case '24px':
          return 'text-[16px] md:text-[20px] lg:text-[24px]'
        case '36px':
          return 'text-[24px] md:text-[28px] lg:text-[36px]'
        case '40px':
          return 'text-[30px] lg:text-[40px]'
        case '60px':
          return 'text-[32px] md:text[40px] lg:text-[60px]'
      }
    }

    function getStyle() {
      switch (style) {
        case 'light':
          return 'font-satoshi-light'
        case 'regular':
          return 'font-satoshi-regular'
        case 'medium':
          return 'font-satoshi-medium'
        case 'bold':
          return 'font-satoshi-bold'
        case 'black':
          return 'font-satoshi-black'
      }
    }

    let globalStyle = ` ${getSize()} leading-normal ${getStyle()} antialiased`

    function getTag() {
      switch (tag) {
        case 'h1':
          return (
            <h1 ref={ref} className={`${globalStyle} ${className}`}>
              {text}
            </h1>
          )
        case 'h2':
          return (
            <h2 ref={ref} className={`${globalStyle} ${className}`}>
              {text}
            </h2>
          )
        case 'h3':
          return (
            <h3 ref={ref} className={`${globalStyle} ${className}`}>
              {text}
            </h3>
          )
        case 'h4':
          return (
            <h4 ref={ref} className={`${globalStyle} ${className}`}>
              {text}
            </h4>
          )
        case 'h5':
          return (
            <h5 ref={ref} className={`${globalStyle} ${className}`}>
              {text}
            </h5>
          )
        case 'h6':
          return (
            <h6 ref={ref} className={`${globalStyle} ${className}`}>
              {text}
            </h6>
          )
        case 'p':
          return (
            <p ref={ref} className={`${globalStyle} ${className}`}>
              {text}
            </p>
          )
      }
    }

    return <>{getTag()}</>
  },
)

SatoshiText.displayName = 'SatoshiText'
