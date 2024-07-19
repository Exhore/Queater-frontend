import { IconProps } from '@/interfaces/icon'

interface Props extends IconProps {
  large?: boolean
  isHovered?: boolean
  white?: boolean
}

export const IArrowLarge: React.FC<Props> = ({
  large = false,
  isHovered = false,
  ...atributes
}) => {
  return (
    <svg
      width="54"
      height="16"
      viewBox="0 0 54 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...atributes}
    >
      <path
        d={`M1 8L${isHovered ? 60 : 53} 8`}
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: 'all 0.3s ease-in-out' }}
      />
      <path
        d={isHovered ? 'M53 1L60 8L53 15' : 'M46 1L53 8L46 15'}
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: 'all 0.3s ease-in-out' }}
      />
    </svg>
  )
}
