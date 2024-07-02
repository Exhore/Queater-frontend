import { IconProps } from '@/interfaces/icon'

export default function ResizeScreen(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M1.33325 4.66683V3.00016C1.33325 2.55814 1.50885 2.13421 1.82141 1.82165C2.13397 1.50909 2.55789 1.3335 2.99992 1.3335H4.66659M1.33325 11.3335V13.0002C1.33325 13.4422 1.50885 13.8661 1.82141 14.1787C2.13397 14.4912 2.55789 14.6668 2.99992 14.6668H4.66659M11.3333 1.3335H12.9999C13.4419 1.3335 13.8659 1.50909 14.1784 1.82165C14.491 2.13421 14.6666 2.55814 14.6666 3.00016V4.66683M11.3333 14.6668H12.9999C13.4419 14.6668 13.8659 14.4912 14.1784 14.1787C14.491 13.8661 14.6666 13.4422 14.6666 13.0002V11.3335"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
