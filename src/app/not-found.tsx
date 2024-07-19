import { NunitoText } from '@/components/atoms/texts/nunito_text'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <Link href="/">
        <NunitoText
          text=" 404 error de test - go back to home"
          style="w400"
          fontSize="24px"
          className=""
        />
      </Link>
    </div>
  )
}
