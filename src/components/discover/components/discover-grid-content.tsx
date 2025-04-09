"use client"
import { ArrowRight, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { type JSX, useEffect } from "react"
import { useState } from "react"
import ASSETS from "../../../../shared/assets"
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from "<components>/components/ui/typography"

// Define the Topic interface
interface Topic {
  name: string
  prompt: string
}
interface NewsItem {
  id: number
  source: string
  sourceUrl: string
  title: string
}

// Type the topics array
const topics: Topic[] = [
  { name: "All", prompt: "top healthcare headlines" },
  { name: "For You", prompt: "personalized healthcare news" },
  { name: "Medical Research", prompt: "recent advances in medical research" },
  {
    name: "Medical Conditions",
    prompt: "updates on common medical conditions",
  },
  { name: "Medical Practice", prompt: "medical practice news and updates" },
  { name: "World Health", prompt: "global health developments and challenges" },
  { name: "Healthcare Industry", prompt: "trends in the healthcare industry" },
  { name: "Preventive Care", prompt: "preventive health tips and news" },
]

export function DiscoverGridContent(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0])
  // Sample news data - in a real app, you might fetch this from an API
  const allNewsItems: NewsItem[] = [
    {
      id: 1,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Innovative {'Poop Pill'} Shows Promise in Pancreatic Cancer Treatment",
    },
    {
      id: 2,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Innovative {'Poop Pill'} Shows Promise in Pancreatic Cancer Treatment",
    },
    {
      id: 3,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Innovative {'Poop Pill'} Shows Promise in Pancreatic Cancer Treatment",
    },
    {
      id: 4,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Innovative {'Poop Pill'} Shows Promise in Pancreatic Cancer Treatment",
    },
    // Additional items for second slide
    {
      id: 5,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "New Study Reveals Benefits of Mediterranean Diet for Heart Health",
    },
    {
      id: 6,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Breakthrough in Alzheimer's Research: Early Detection Method Discovered",
    },
    {
      id: 7,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "COVID-19 Long-Term Effects: What We Know After Three Years",
    },
    {
      id: 8,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Mental Health Awareness: New Resources for Healthcare Providers",
    },
    // Additional items for third slide
    {
      id: 9,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Telemedicine Adoption Rates Soar in Rural Communities",
    },
    {
      id: 10,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Artificial Intelligence in Diagnostics: Promising Results in Clinical Trials",
    },
    {
      id: 11,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Vaccine Development: New Platform Shows Potential for Multiple Diseases",
    },
    {
      id: 12,
      source: "www. Wikipedia.com",
      sourceUrl: "#",
      title: "Healthcare Equity: Initiatives to Address Disparities in Treatment Access",
    },
  ]

  // Group news items into slides (4 items per slide)
  const itemsPerSlide = 4
  const slides = []

  for (let i = 0; i < allNewsItems.length; i += itemsPerSlide) {
    slides.push(allNewsItems.slice(i, i + itemsPerSlide))
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const topicsContainerRef = React.useRef<HTMLDivElement>(null)

  const scrollTopics = (direction: "left" | "right") => {
    if (topicsContainerRef.current) {
      const container = topicsContainerRef.current
      const scrollAmount = 200 // Adjust scroll amount as needed

      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  useEffect(() => {
    // Add a style to hide scrollbars
    const style = document.createElement("style")
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div>
      <div className="sticky top-[-20px] left-0 z-20 w-full dark:my-3 px-2 py-2 bg-white dark:bg-slate-900 pb-6">
        <TypographyH1 className="mb-5 text-center font-bold dark:text-white">Discover Health</TypographyH1>
        <div className="relative flex items-center">
          <button
            onClick={() => scrollTopics("left")}
            className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-gray-100 dark:hover:bg-slate-700"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-[#00285D] dark:text-slate-300"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={topicsContainerRef}
            className="scrollbar-hide flex w-full overflow-x-auto px-10 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {topics.map((topic) => (
              <button
                key={topic.name}
                className={`mr-2 rounded-md px-4 py-2 whitespace-nowrap transition-colors focus:ring focus:ring-slate-400 ${selectedTopic.name === topic.name
                  ? "bg-gray-500 dark:bg-slate-700 text-white"
                  : "text-slate-900 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                  }`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTopics("right")}
            className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-gray-100 dark:hover:bg-slate-700"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-[#00285D] dark:text-slate-300"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <div className="bg-slate-100 dark:bg-slate-800 h-[472px] rounded-[16px]">
            <div className="px-5 py-4">
              <TypographyH2 className="mb-4 text-base text-slate-700 font-bold">Top Stories</TypographyH2>
              <div className="relative">
                {slides.map((slideItems, slideIndex) => (
                  <div
                    key={`slide-${slideIndex}`}
                    className={`transition-opacity duration-500 ${slideIndex === currentSlide ? "block opacity-100" : "hidden opacity-0"
                      }`}
                  >
                    <div className="space-y-6">
                      {slideItems.map((item) => (
                        <div key={item.id} className="mb-6 last:mb-0">
                          <div className="mb-2 flex items-center">
                            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                              <span className="text-xs font-bold text-black">W</span>
                            </div>
                            <a href={item.sourceUrl} className="text-sm text-slate-700 hover:underline">
                              {item.source}
                            </a>
                          </div>

                          <TypographyH3 className="text-base leading-tight text-slate-700 dark:text-slate-300">
                            {item.title}
                          </TypographyH3>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1 rounded-full transition-all ${index === currentSlide ? "w-8 bg-slate-700 dark:bg-white" : "w-4 bg-slate-700 dark:bg-white/50"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <a
                  href="#"
                  className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300  hover:underline"
                >
                  View More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-4 overflow-hidden rounded-[16px]">
            <Image
              src={ASSETS.discoverWeather || "/placeholder.svg"}
              width={335}
              height={186}
              className="h-[186px] w-full"
              alt="weather"
            />
            <div className="absolute top-0 left-0 h-full w-full px-6 py-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-normal text-white">Weather Forecast</span>
                <button className="text-white">
                  <MoreHorizontal size={22} />
                </button>
              </div>
              <TypographyP className="text-sm font-normal text-white">Monday 06</TypographyP>
              <TypographyH2 className="text-[48px] leading-[1.3] font-bold text-white">72℉</TypographyH2>
              <TypographyP className="text-primary text-sm font-normal">Air Quality - 24 (Good) </TypographyP>
              <TypographyP className="text-primary text-sm font-normal"> Cloudy Showering</TypographyP>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <div className="bg-slate-100 dark:bg-slate-800 overflow-hidden rounded-[16px]">
              <div>
                <Image
                  src={ASSETS.discoverCard1 || "/placeholder.svg"}
                  width={335}
                  height={216}
                  className="h-[216px] w-full object-cover object-top"
                  alt="discover"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                    <span className="text-xs font-bold text-black">W</span>
                  </div>
                  <a href="#" className="text-sm text-slate-700 dark:text-white hover:underline">
                    www. Wikipedia.com
                  </a>
                </div>
                <TypographyH3 className="mb-3 text-base leading-normal font-bold text-slate-700 dark:text-white hover:underline">
                  {`Innovative 'Poop Pill' Shows Promise in Pancreatic Cancer Treatment`}
                </TypographyH3>
                <Link
                  href="#"
                  className="flex items-center text-base font-bold text-slate-700 dark:text-white hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="rounded-[16px] bg-white dark:bg-slate-800 p-4">
              <TypographyH3 className="font-sm mb-2 font-bold dark:text-white">Todays Catchup</TypographyH3>
              <Image
                src={ASSETS.discoverCard2 || "/placeholder.svg"}
                width={310}
                height={125}
                className="h-[125px] w-full rounded-[8px]"
                alt="img-2"
              />

              <div className="mt-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-slate-300">Today</span>
                  <button className="text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-300">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <TypographyH3 className="mb-2 text-base leading-[1.1] text-black dark:text-white">
                  Female Doctors Outnumber Male Doctors in the UK for the First Time
                </TypographyH3>

                <TypographyP className="mb-3 text-sm leading-[1.1] text-[#8B939E] dark:text-slate-400">
                  Canadian researchers are conducting a clinical trial involving 20 patients to assess whether a pill
                  containing healthy bacteria from human feces can enhance the immune system and improve...
                </TypographyP>

                <div className="flex items-center text-sm text-gray-500 dark:text-slate-400">
                  <span className="font-semibold">VOX</span>
                  <span className="mx-1">|</span>
                  <span>2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-4">
            <Image
              src={ASSETS.discoverCard3 || "/placeholder.svg"}
              width={694}
              height={300}
              className="h-[300px] w-full rounded-[16px]"
              alt="discover"
            />
            <div className="absolute bottom-0 w-full p-6">
              <div className="mb-2 flex items-center">
                <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                  <span className="text-xs font-bold text-black">W</span>
                </div>
                <Link href="#" className="text-sm text-white hover:underline">
                  www.Wikipedia.com
                </Link>
              </div>
              <TypographyH2 className="mb-3 text-2xl font-bold text-white">
                Innovative {"Poop Pill"} Shows Promise in Pancreatic Cancer Treatment
              </TypographyH2>
              <Link href="#" className="flex items-center text-base font-bold text-white hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-4">
        <div className="relative col-span-4">
          <Image
            src={ASSETS.discoverCard3 || "/placeholder.svg"}
            width={694}
            height={300}
            className="h-[300px] w-full rounded-[16px]"
            alt="discover"
          />
          <div className="absolute bottom-0 w-full p-6">
            <div className="mb-2 flex items-center">
              <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                <span className="text-xs font-bold text-black">W</span>
              </div>
              <Link href="#" className="text-sm text-white hover:underline">
                www.Wikipedia.com
              </Link>
            </div>
            <TypographyH2 className="mb-3 text-2xl font-bold text-white">
              Innovative {"Poop Pill"} Shows Promise in Pancreatic Cancer Treatment
            </TypographyH2>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-slate-100 dark:bg-slate-800 overflow-hidden rounded-[16px]">
            <div>
              <Image
                src={ASSETS.discoverCard1 || "/placeholder.svg"}
                width={335}
                height={216}
                className="h-[156px] w-full object-cover object-top"
                alt="discover"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center">
                <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                  <span className="text-xs font-bold text-black">W</span>
                </div>
                <a href="#" className="text-sm text-slate-700 dark:text-white hover:underline">
                  www. Wikipedia.com
                </a>
              </div>
              <TypographyH3 className="mb-3 text-base leading-normal font-bold text-slate-700 dark:text-white hover:underline">
                Innovative {"Poop Pill"} Shows Promise in Pancreatic Cancer Treatment
              </TypographyH3>
              <Link href="#" className="flex items-center text-base font-bold text-slate-700 dark:text-white hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 py-4">
        <div className="col-span-2">
          <div className="bg-slate-100 dark:bg-slate-800 h-[472px] rounded-[16px]">
            <div className="px-5 py-4">
              <TypographyH2 className="mb-4 text-base font-bold text-slate-700">Top Stories</TypographyH2>
              <div className="relative">
                {slides.map((slideItems, slideIndex) => (
                  <div
                    key={`slide-${slideIndex}`}
                    className={`transition-opacity duration-500 ${slideIndex === currentSlide ? "block opacity-100" : "hidden opacity-0"
                      }`}
                  >
                    <div className="space-y-6">
                      {slideItems.map((item) => (
                        <div key={item.id} className="mb-6 last:mb-0">
                          <div className="mb-2 flex items-center">
                            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                              <span className="text-xs font-bold text-black">W</span>
                            </div>
                            <a href={item.sourceUrl} className="text-sm text-slate-700 hover:underline">
                              {item.source}
                            </a>
                          </div>

                          <TypographyH3 className="text-base leading-tight text-slate-700 dark:text-slate-300">
                            {item.title}
                          </TypographyH3>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <a href="#" className="flex items-center text-sm font-medium text-slate-700 hover:underline">
                  View More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-4 overflow-hidden rounded-[16px]">
            <Image
              src={ASSETS.discoverWeather || "/placeholder.svg"}
              width={335}
              height={186}
              className="h-[186px] w-full"
              alt="weather"
            />
            <div className="absolute top-0 left-0 h-full w-full px-6 py-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-normal text-white">Weather Forecast</span>
                <button className="text-white">
                  <MoreHorizontal size={22} />
                </button>
              </div>
              <TypographyP className="text-sm font-normal text-white">Monday 06</TypographyP>
              <TypographyH2 className="text-[48px] leading-[1.3] font-bold text-white">72℉</TypographyH2>
              <TypographyP className="text-primary text-sm font-normal">Air Quality - 24 (Good) </TypographyP>
              <TypographyP className="text-primary text-sm font-normal"> Cloudy Showering</TypographyP>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <div className="bg-slate-100 dark:bg-slate-800 overflow-hidden rounded-[16px]">
              <div>
                <Image
                  src={ASSETS.discoverCard1 || "/placeholder.svg"}
                  width={335}
                  height={216}
                  className="h-[216px] w-full object-cover object-top"
                  alt="discover"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                    <span className="text-xs font-bold text-black">W</span>
                  </div>
                  <a href="#" className="text-sm text-slate-700 dark:text-white hover:underline">
                    www. Wikipedia.com
                  </a>
                </div>
                <TypographyH3 className="mb-3 text-base leading-normal font-bold text-slate-700 dark:text-white hover:underline">
                  Innovative {"Poop Pill"} Shows Promise in Pancreatic Cancer Treatment
                </TypographyH3>
                <Link href="#" className="flex items-center text-base font-bold text-slate-700 dark:text-white hover:underline">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="rounded-[16px] bg-white dark:bg-slate-800 p-4">
              <TypographyH3 className="font-sm mb-2 font-bold dark:text-white">Todays Catchup</TypographyH3>
              <Image
                src={ASSETS.discoverCard2 || "/placeholder.svg"}
                width={310}
                height={125}
                className="h-[125px] w-full rounded-[8px]"
                alt="img-2"
              />

              <div className="mt-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-slate-300">Today</span>
                  <button className="text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-300">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <TypographyH3 className="mb-2 text-base leading-[1.1] text-black dark:text-white">
                  Female Doctors Outnumber Male Doctors in the UK for the First Time
                </TypographyH3>

                <TypographyP className="mb-3 text-sm leading-[1.1] text-[#8B939E] dark:text-slate-400">
                  Canadian researchers are conducting a clinical trial involving 20 patients to assess whether a pill
                  containing healthy bacteria from human feces can enhance the immune system and improve...
                </TypographyP>

                <div className="flex items-center text-sm text-gray-500 dark:text-slate-400">
                  <span className="font-semibold">VOX</span>
                  <span className="mx-1">|</span>
                  <span>2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-4">
            <Image
              src={ASSETS.discoverCard3 || "/placeholder.svg"}
              width={694}
              height={300}
              className="h-[300px] w-full rounded-[16px]"
              alt="discover"
            />
            <div className="absolute bottom-0 w-full p-6">
              <div className="mb-2 flex items-center">
                <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                  <span className="text-xs font-bold text-black">W</span>
                </div>
                <Link href="#" className="text-sm text-white hover:underline">
                  www.Wikipedia.com
                </Link>
              </div>
              <TypographyH2 className="mb-3 text-2xl font-bold text-white">
                Innovative {"Poop Pill"} Shows Promise in Pancreatic Cancer Treatment
              </TypographyH2>
              <Link href="#" className="flex items-center text-base font-bold text-white hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
