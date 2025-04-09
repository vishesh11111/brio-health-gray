"use client"

import type React from "react"

import { useState, useEffect, useRef, type KeyboardEvent } from "react"
import { useForm } from "react-hook-form"
// import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod"
import { ImageIcon, FileText, FileArchive, X, GlobeIcon } from "lucide-react"

import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem } from "../ui/form"
import { Card, CardContent } from "../ui/card"
import { TypographySmall } from "../ui/typography"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "<components>/lib/utils"
import { Textarea } from "../ui/textarea"
import { AttachmentIcon, EarthIcon, SendChatIcon } from "../ui/icons/home"

const formSchema = z.object({
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
})

type SearchEngineProps = {
  handleGenerateId: () => void
  className?: string
}

const Search_engine: React.FC<SearchEngineProps> = ({ handleGenerateId, className }) => {
  const [attachmentPopoverOpen, setAttachmentPopoverOpen] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea function
  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      // Reset height to auto to get the correct scrollHeight
      textareaRef.current.style.height = "auto"
      // Set the height to scrollHeight to expand the textarea
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  // Call resize on initial render and when content changes
  useEffect(() => {
    autoResizeTextarea()
    // Add event listener for future changes
    const textarea = textareaRef.current
    if (textarea) {
      textarea.addEventListener("input", autoResizeTextarea)
      return () => {
        textarea.removeEventListener("input", autoResizeTextarea)
      }
    }
  }, [])

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Check if the question is empty or just whitespace
    if (values.question.trim() === "") {
      return
    }

    console.log(values, selectedFiles)
    // Handle form submission
    handleGenerateId()
    // Reset the form after submission
    form.reset()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles((prev) => [...prev, ...Array.from(e.target.files || [])])
      setAttachmentPopoverOpen(false)
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema)
    // defaultValues: {
    //     question: "What are the symptoms of seasonal allergies?",
    // },
  })

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      // Only submit if the form is valid
      if (form.formState.isValid && form.getValues().question.trim() !== "") {
        document.getElementById("submit-button")?.click()
      }
    }
  }

  return (
    <div>
      <Card
        className={cn(
          "w-full max-w-3xl rounded-3xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-2 py-2 shadow-sm",
          className,
        )}
      >
        <CardContent className="px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {selectedFiles.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="group relative">
                      {file.type.startsWith("image/") ? (
                        <div className="h-16 w-16 overflow-hidden rounded-md border border-slate-200  dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                          <img
                            src={URL.createObjectURL(file) || "/placeholder.svg"}
                            alt={file.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                          {file.type.includes("pdf") ? (
                            <FileText className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                          ) : file.type.includes("zip") || file.type.includes("archive") ? (
                            <FileArchive className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                          ) : (
                            <FileText className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                          )}
                        </div>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-slate-300 dark:hover:bg-slate-600"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Ask any medical questions..."
                        className="max-h-[100px] resize-none overflow-auto border-0 text-[16px] font-[400] dark:bg-transparent text-[#00285DBD] dark:text-slate-300 shadow-none placeholder:text-[#00285DBD] dark:placeholder:text-slate-400 focus-visible:ring-0"
                        // ref={textareaRef} // TODO Vishesh
                        onKeyDown={handleKeyDown}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-end gap-x-2">
                <div className="flex gap-2">
                  <Button type="button" size="icon2" variant="ghost" className="p-1">
                    <EarthIcon />
                  </Button>

                  <Popover open={attachmentPopoverOpen} onOpenChange={setAttachmentPopoverOpen}>
                    <PopoverTrigger asChild>
                      <Button type="button" size="icon2" variant="ghost" className="p-1">
                        <AttachmentIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-2 dark:bg-slate-900 dark:border-slate-800" align="start">
                      <div className="grid gap-1">
                        <TypographySmall className="mb-1 font-medium">Attach a file</TypographySmall>

                        <label className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                          <ImageIcon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                          <TypographySmall>Image</TypographySmall>
                          <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                        </label>

                        <label className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                          <FileText className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                          <TypographySmall>Document</TypographySmall>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.txt"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>

                        <label className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                          <FileArchive className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                          <TypographySmall>Other Files</TypographySmall>
                          <input type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                <Button
                  id="submit-button"
                  type="submit"
                  size="icon1"
                  className="h-[30px] w-[30px] cursor-pointer rounded-full bg-transparent hover:bg-transparent "
                  disabled={!form.formState.isValid || form.getValues().question?.trim() === ""}
                >
                  <SendChatIcon />
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Search_engine
