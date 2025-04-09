'use client'
import { useTheme } from "next-themes"
import Image from "next/image"

export const EarthIcon = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    // <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F7FAFF] dark:bg- p-[1px]">
    <Image
      width={100}
      height={100}
      className="h-[15px] w-[15px]"
      unoptimized
      src={resolvedTheme === "dark" ? "/designer/earth.svg" : "/home/globe.svg"}
      alt="Globe icon"
    />
    // </div>
  )
}

export const AttachmentIcon = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    // <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F7FAFF] dark:bg-slate-800 p-[2px]">
    <Image
      width={100}
      className="h-[15px] w-[15px]"
      height={100}
      unoptimized
      src={resolvedTheme === "dark" ? "/designer/attachment.svg" : "/home/attachment.svg"}
      alt="Attachment icon"
    />
    // </div>
  )
}

export const SendChatIcon = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Image
      width={100}
      className="h-[30px] w-[30px] "
      unoptimized
      height={100}
      src={resolvedTheme === "dark" ? "/designer/send.svg" : "/home/send.svg"}
      alt="Send message icon"
    />
  )
}

export const DocumentIcon = () => {
  return (
    <Image
      width={100}
      className="h-[15.83px] w-[15.77px]"
      unoptimized
      height={100}
      src="/home/document.svg"
      alt="Document icon"
    />
  )
}

export const LogoIcon = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return <Image width={100} className="h-[29.94px] w-[62px]"
    unoptimized
    height={100}
    src={resolvedTheme === "light" ? "/designer/logo.svg" : "/logo.svg"}
    alt="Logo" />
}

export const ArrowIcon = () => {
  return (
    <Image
      width={100}
      className="h-[8.02px] w-[14.63px] object-contain"
      unoptimized
      height={100}
      src="/home/arrow.svg"
      alt="Arrow icon"
    />
  )
}
