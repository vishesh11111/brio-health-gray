"use client"

import type React from "react"
import Link from "next/link"
import { DoctorCard, WeatherCard } from "../ui/card/homeCard"
import { TypographyH3, TypographyLarge, TypographyMuted, TypographySmall } from "../ui/typography"
import Search_engine from "../search_engine/search_engine"

type SearchEngineProps = {
  handleGenerateId: () => void
}

const Home_Before_Search: React.FC<SearchEngineProps> = ({ handleGenerateId }) => {
  return (
    <div className="flex min-h-[calc(100vh-105px)] flex-col items-center justify-between">
      <div className="m-auto w-full max-w-3xl lg:px-4 py-6">
        <TypographyH3 className="mb-6 text-center  dark:text-slate-200">
          What&apos;s Your Health Question?
        </TypographyH3>
        <Search_engine handleGenerateId={handleGenerateId} />
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {["About", "Pricing", "Career", "Blog", "Get Involved", "Help"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <TypographySmall>{item}</TypographySmall>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-12 lg:px-6">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          {/* Weather Card - Full width on mobile, fixed width on desktop */}
          <div className="w-full rounded-2xl bg-white dark:bg-slate-900 px-3 py-2 shadow-sm lg:max-w-[202px] lg:min-w-[202px]">
            <div className="flex items-center justify-between">
              <TypographyLarge className="text-2xl  dark:text-slate-200 sm:text-3xl">
                72°F
              </TypographyLarge>
              <div className="ml-2">
                <WeatherCard image="/home/doctor/weather.png" />
              </div>
            </div>
            <div className="w-full text-left">
              <TypographySmall className="text-xs text-[#64748B] dark:text-slate-400">
                Jabalpur, Madhya Pradesh
              </TypographySmall>
              <ul className="mt-1 pl-4" style={{ listStyleType: "none" }}>
                <li className="relative flex items-center">
                  <span className="absolute top-1/2 -left-3 h-[2px] w-[2px] -translate-y-1/2 rounded-full bg-[#64748B] dark:bg-slate-400"></span>
                  <TypographySmall className="text-xs text-[#64748B] dark:text-slate-400">
                    Air Quality - 24 (Good)
                  </TypographySmall>
                </li>
              </ul>
            </div>
          </div>

          {/* Doctor Cards - Stack on mobile, grid on tablet and up */}
          <div className="grid flex-1 gap-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2">
            <DoctorCard
              image="/home/doctor/doc1.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit nisl, pellentesque Lorem ipsum dolor sit amet."
            />
            <DoctorCard
              image="/home/doctor/doc2.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit nisl, pellentesque Lorem ipsum dolor sit amet."
            />
          </div>
        </div>
        <div className="my-5">
          <TypographyMuted className="text-center text-[12px] font-[400]  dark:text-slate-400">
            BRIO Health provides AI-powered medical insights for informational purposes only. It does not replace
            clinical judgment or professional medical advice.
          </TypographyMuted>
          <TypographyMuted className="text-center text-[12px] font-[400] dark:text-slate-400">
            Verify information with authoritative sources before making medical decisions.
          </TypographyMuted>
        </div>
      </div>
    </div>
  )
}

export default Home_Before_Search
