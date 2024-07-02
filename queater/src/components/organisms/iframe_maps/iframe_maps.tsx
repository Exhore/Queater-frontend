import { Dictionary } from '@/app/[lang]/dictionaries'
import IframeCard from '@/components/molecules/iframe_card/iframe_card'

interface IframeMapsProps {
  dict: Dictionary
}

export default function IframeMaps({ dict }: IframeMapsProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-9xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3494.099417497511!2d-13.832172851877102!3d28.86566083675483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1718873661669!5m2!1sen!2ses"
        width="1328"
        height="425"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-3xl"
      ></iframe>
      <div className="absolute bottom-14 flex md:left-16 md:top-20">
        <IframeCard dict={dict} />
      </div>
    </div>
  )
}
