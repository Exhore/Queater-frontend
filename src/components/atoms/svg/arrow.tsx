import { IconProps } from '@/interfaces/icon'

export default function Arrow(props: IconProps) {
  return (
    <svg
      width="54"
      height="15"
      viewBox="0 0 54 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M1 7.5L53 7.5"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M46 0.5L53 7.5L46 14.5"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
