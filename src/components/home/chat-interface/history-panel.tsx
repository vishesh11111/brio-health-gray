"use client"

import { Button } from "<components>/components/ui/button"
import { Input } from "<components>/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { TypographyH4 } from "<components>/components/ui/typography"
import { TypographyP } from "<components>/components/ui/typography"
import { CancelIcon, DeleteIcon, SearchIcon } from "<components>/components/ui/icons/chat"

interface HistoryPanelProps {
  isOpen: boolean
  onClose: () => void
  width: number
}

interface HistoryItem {
  id: number
  query: string
  response: string
  date: string
}

export function HistoryPanel({ isOpen, onClose, width }: HistoryPanelProps) {
  // Mock history data
  const historyItems: HistoryItem[] = [
    {
      id: 1,
      query: "Tell me about pathology",
      response:
        "Pathology is a critical branch of medical science that focuses on the study and diagnosis of diseases.",
      date: "March 10, 2023",
    },
    {
      id: 2,
      query: "Tell me about pathology",
      response:
        "Pathology is a critical branch of medical science that focuses on the study and diagnosis of diseases.",
      date: "March 15, 2023",
    },
    {
      id: 3,
      query: "Tell me about pathology",
      response:
        "Pathology is a critical branch of medical science that focuses on the study and diagnosis of diseases.",
      date: "March 20, 2023",
    },
    {
      id: 4,
      query: "Tell me about pathology",
      response:
        "Pathology is a critical branch of medical science that focuses on the study and diagnosis of diseases.",
      date: "March 25, 2023",
    },
    {
      id: 5,
      query: "Tell me about pathology",
      response:
        "Pathology is a critical branch of medical science that focuses on the study and diagnosis of diseases.",
      date: "March 30, 2023",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
            duration: 0.3,
          }}
          style={{ width: `${width}px` }}
          className="fixed top-[68px] right-0 z-50 flex h-[calc(100vh-100px)] w-[380px] flex-col rounded-2xl bg-slate-100 dark:bg-slate-900 shadow-lg"
        >
          {/* Fixed header section */}
          <div className="flex items-center justify-between px-4 pt-4">
            <TypographyH4 className="text-lg font-semibold dark:text-white">History</TypographyH4>
            <Button variant="ghost" onClick={onClose} className="dark:hover:bg-slate-800">
              <CancelIcon />
            </Button>
          </div>

          {/* Fixed search section */}
          <div className="px-4 pt-4 pb-2">
            <div className="relative rounded-xl border border-[#DCE4EE] dark:border-slate-700 bg-[#fff] dark:bg-slate-800">
              <Input
                placeholder="Search Your Chats"
                className="pl-8 text-[14px] text-[#7A889C] dark:text-slate-300 placeholder:text-[#7A889C] dark:placeholder:text-slate-400 dark:bg-slate-800"
              />
              <div className="absolute top-2.5 left-2.5 h-4 w-4 dark:text-slate-400">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Scrollable history items section */}
          <div className="flex-1 w-[102.5%] overflow-y-auto px-4 pb-4">
            <div className="space-y-3">
              {historyItems.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer rounded-lg bg-[#fff] dark:bg-slate-800 p-3 hover:bg-gray-50 dark:hover:bg-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <TypographyP className="text-sm font-medium dark:text-white">{item.query}</TypographyP>
                    <Button variant="ghost" size="icon" className="h-6 w-6 p-1 dark:hover:bg-slate-700">
                      <DeleteIcon />
                    </Button>
                  </div>
                  <TypographyP className="mt-1 line-clamp-2 text-xs text-gray-500 dark:text-slate-400">
                    {item.response}
                  </TypographyP>
                  <div className="mt-2 flex items-center text-xs text-gray-400 dark:text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <Button variant="ghost" className="dark:hover:bg-slate-800">
              <TypographyH4 className="text-[16px] font-[700] dark:text-white">View All</TypographyH4>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
