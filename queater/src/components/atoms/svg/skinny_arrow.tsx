import React from 'react'
import { IconProps } from '@/interfaces/icon'

interface Props extends IconProps {
  whitearrow?: boolean
}

export const SkinnyArrow: React.FC<Props> = ({
  color,
  size = 13,
  whitearrow = false,
  ...attributes
}) => {
  const fillColor = whitearrow ? '#0578AE' : '#FFFFFF'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M8.78115 4.83343L5.20515 1.25743L6.14795 0.314628L11.3334 5.50009L6.14795 10.6855L5.20515 9.74273L8.78115 6.16676L0.666748 6.16676L0.666748 4.83343L8.78115 4.83343Z"
        fill={fillColor}
      />
    </svg>
  )
}
