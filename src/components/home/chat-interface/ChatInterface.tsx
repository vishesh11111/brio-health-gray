"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "<components>/components/ui/button"
import { motion } from "framer-motion"
import { HistoryPanel } from "./history-panel"
import type { SearchEngineProps } from "../Home_After_Search"
import { WikiIcon } from "<components>/components/ui/icons/chat"
import { TypographyH4 } from "<components>/components/ui/typography"
import { WebsitePanel } from "./websitePanel"
import Search_engine from "<components>/components/search_engine/search_engine"
import { useQueryState } from "<components>/lib/use-query-state"
import { ScrollArea } from "@radix-ui/react-scroll-area"

const dataBadge = [
  "Show more detail on this topic?",
  "Tell me about radiology",
  "What are the main branches of pathology?",
]

type Card = {
  title: string
  url: string
  description: string
}

export const ChatInterface: React.FC<SearchEngineProps> = ({ handleGenerateId }) => {
  const [isXXLScreen, setIsXXLScreen] = useState(false)
  const [isHistoryOpen, setIsHistoryOpen] = useQueryState("history", {
    defaultValue: "close",
    parse: (value) => value || "close", // Return the value or default to "close"
    serialize: (value) => value, // Just return the string value
  })

  const [isWebOpen, setIsWebOpen] = useQueryState("website", {
    defaultValue: "close",
    parse: (value) => value || "close", // Return the value or default to "close"
    serialize: (value) => value, // Just return the string value
  })
  const [chosenCard, setChosenCard] = useState({
    title: "",
    url: "",
    description: "",
  })

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setIsXXLScreen(window.innerWidth >= 2000) // 2xl breakpoint in Tailwind
    }

    // Set initial width
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Define the history panel width
  const historyPanelWidth = isWebOpen !== "close" ? 498 : 380

  // Calculate the margin to center the content when history is closed
  // and shift it to the left when history is open (only for screens below XXL)
  const isHistoryPanelOpen = isHistoryOpen !== "close" || isWebOpen !== "close"
  const isHistoryPanelOpens = isHistoryOpen !== "close"
  const isWebPanelOpen = isWebOpen !== "close"

  const calculateMargin = () => {
    if (isXXLScreen) {
      // On XXL screens, always keep search engine centered
      return {
        marginRight: "auto",
        marginLeft: "auto",
      }
    }

    if (!isHistoryPanelOpen) {
      return {
        marginRight: "auto",
        marginLeft: "auto",
      }
    }

    // When history is open on smaller screens, shift search engine to the left
    return {
      marginRight: `${historyPanelWidth}px`,
      marginLeft: "auto",
    }
  }

  // Calculate the styles for the component
  const marginStyles = calculateMargin()

  // Calculate the margin for the search engine component only
  const calculateSearchEngineMargin = () => {
    if (isXXLScreen) {
      // On XXL screens, always keep search engine centered
      return { marginRight: "auto", marginLeft: "auto" }
    }

    if (!isHistoryPanelOpen) {
      return { marginRight: "auto", marginLeft: "auto" }
    }

    // When history is open on smaller screens, shift search engine to the left
    return {
      marginRight: `${historyPanelWidth}px`,
      marginLeft: "auto",
    }
  }

  const handleChooseCard = (card: { title: string; url: string; description: string }) => {
    setIsHistoryOpen("close")
    setChosenCard(card)
    setIsWebOpen("open")
  }

  return (
    <div className="flex flex-col">
      <ScrollArea>
        <div className="relative h-[80%] flex-grow bg-transparent">
          {/* Main content that centers or shifts left based on history panel state */}
          <motion.div
            animate={marginStyles}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`max-w-4xl px-2 py-4 ${isXXLScreen && isHistoryPanelOpen ? "mx-auto" : ""}`}
          >
            <div className="mb-4 flex items-center justify-center">
              <div className="text-primary text-[16px] font-[400] dark:text-primary/90">Today, 2:30 PM</div>
            </div>

            {/* message Todo  */}
            <div className="flex items-end justify-end">
              <div className="rounded-xl bg-[#D5DEE9] dark:bg-slate-700 px-4 py-2 text-[16px] dark:text-slate-200">
                Tell me about pathology ?
              </div>
            </div>
            {/*  */}
            <div className="space-y-6">
              {/* Sources Available section - always centered on XXL screens */}
              <div className={`bg-transparent p-4 ${isXXLScreen ? "mx-auto" : ""}`}>
                <div className="mb-4 flex items-center justify-between">
                  <TypographyH4 className="text-lg font-semibold ">Sources Available</TypographyH4>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="cursor-pointer rounded-xl bg-[#fff] dark:bg-slate-900 p-3 hover:bg-slate-200 dark:hover:bg-slate-800 md:col-span-2"
                      onClick={() =>
                        handleChooseCard({
                          title: "Pathology: The Clinical Description of Human Disease",
                          url: "https://www.wikipedia.org/wiki/Pathology:The_Clinical_Description_of_Human_Disease",
                          description:
                            "Pathology is a branch of medical science that focuses on the study and diagnosis of diseases. It encompasses the understanding of disease processes, their causes, development, and the structural and functional changes that occur in cells, tissues, and organs as a result of these diseases.",
                        })
                      }
                    >
                      <div className="text-primary text-[16px] font-medium dark:text-primary/90">
                        Pathology: The Clinical Description of Human Disease
                      </div>
                      <div className="text-primary mt-2 flex items-center gap-1 text-[10px] dark:text-primary/80">
                        <WikiIcon />
                        www.Wikipedia.com
                      </div>
                    </div>
                  ))}
                  <div className="flex max-w-[85px] flex-col items-center justify-center gap-y-3 rounded-xl bg-[#fff] dark:bg-slate-900 p-3 md:col-span-1">
                    <div className="text-primary mt-2 flex items-center gap-1 text-[10px] dark:text-primary/80">
                      <WikiIcon />
                      <WikiIcon />
                      <WikiIcon />
                    </div>
                    <TypographyH4 className="text-primary text-[16px] font-[400] dark:text-primary/90">
                      +5 More
                    </TypographyH4>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <h2 className="text-primary mb-2 text-lg font-semibold dark:text-primary/90">Pathology - Overview</h2>
                <p className="mb-4 text-sm text-[#576578] dark:text-slate-300">
                  Pathology is a critical branch of medical science that focuses on the study and diagnosis of diseases.
                  It encompasses the understanding of disease processes, their causes, development, and the structural
                  and functional changes that occur in cells, tissues, and organs as a result of these diseases.
                </p>

                <h2 className="text-primary mb-2 text-lg font-semibold dark:text-primary/90">Definition and Scope</h2>
                <p className="mb-4 text-sm text-[#576578] dark:text-slate-300">
                  {`The term "pathology" is derived from the Greek words pathos (meaning suffering) and logos (meaning
                                study). This discipline aims to investigate the origins and nature of diseases, including their etiology
                                (the cause of the disease) and pathogenesis (the development process of the disease).`}
                </p>

                <div className="text-sm text-[#576578] dark:text-slate-300">
                  <p className="mb-2">{"Pathology is divided into various sub-disciplines, including:"}</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Anatomical Pathology: Focuses on the examination of surgical specimens and autopsies to diagnose
                      diseases based on structural changes.
                    </li>
                    <li>
                      Clinical Pathology: Involves laboratory analysis of bodily fluids (like blood and urine) to
                      diagnose diseases.
                    </li>
                    <li>Cytopathology: Examines individual cells to detect disease.</li>
                    <li>Hematopathology: Studies blood-related diseases.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {dataBadge?.map((item) => (
                  <Button
                    key={item}
                    variant="outline"
                    size="sm"
                    className="border border-[#D8D8D8] dark:border-slate-700 bg-[#fff] dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <WebsitePanel
            isOpen={isWebPanelOpen}
            onClose={() => setIsWebOpen("close")}
            width={historyPanelWidth}
            website={{
              title: "Pathology - Overview",
              url: "https://www.wikipedia.org/wiki/pathology",
              description:
                "Pathology is a critical branch of medical science that focuses on the study and diagnosis of diseases.",
            }}
          />
          {/* History panel */}
          <HistoryPanel
            isOpen={isHistoryPanelOpens}
            onClose={() => setIsHistoryOpen("close")}
            width={historyPanelWidth}
          />
        </div>
      </ScrollArea>
      {/* Search engine component fixed at the bottom */}
      <div className="sticky bottom-0 z-10 w-full p-4">
        <motion.div
          animate={calculateSearchEngineMargin()}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="max-w-4xl"
        >
          <Search_engine handleGenerateId={handleGenerateId} className="max-w-4xl" />
        </motion.div>
      </div>
    </div>
  )
}
