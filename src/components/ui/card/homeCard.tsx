import Image from "next/image"
import { TypographyP } from "../typography"
import { Button } from "../button"
import { ArrowIcon } from "../icons/home"

const homeCard = () => {
  return <div></div>
}

export default homeCard

export function DoctorCard({ image, text }: { image: string; text: string }) {
  return (
    <div className="flex h-full items-center justify-center gap-4 rounded-2xl bg-[#fff] dark:bg-slate-900 p-1">
      <div className="h-full w-[117px] flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          width={100}
          height={100}
          alt="Doctor"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <TypographyP className="mt-0 text-[14px] text-[#545454] dark:text-slate-300">{text}</TypographyP>
        <Button
          variant="link"
          className="text-primary mt-1 h-auto justify-start p-0 text-[12px] font-[700] dark:text-primary/90"
        >
          Read More <ArrowIcon />
        </Button>
      </div>
    </div>
  )
}

export function WeatherCard({ image }: { image: string }) {
  return (
    <div className="h-[32.35px] w-[44px] flex-shrink-0 overflow-hidden rounded-lg">
      <Image
        unoptimized
        src={image || "/placeholder.svg"}
        width={100}
        height={100}
        alt="Weather icon"
        className="h-full w-full object-cover"
      />
    </div>
  )
}
