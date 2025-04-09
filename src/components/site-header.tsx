'use client'
import { Button } from "<components>/components/ui/button"
import { Separator } from "<components>/components/ui/separator"
import { SidebarTrigger } from "<components>/components/ui/sidebar"
import { ModeToggle } from "./layout/ThemeToggle/theme-toggle"
import { DocumentIcon } from "./ui/icons/home"
import { useQueryState } from 'nuqs';
import { TypographyP, TypographySmall } from "./ui/typography"
import { usePathname, useRouter } from "next/navigation"

export function SiteHeader() {
  const [history, setHistory] = useQueryState('history', {
    defaultValue: 'close',
    parse: (value) => value || 'close', // Return the value or default to "close"
    serialize: (value) => value // Just return the string value
  });
  const [isWebOpen, setIsWebOpen] = useQueryState('website', {
    defaultValue: 'close',
    parse: (value) => value || 'close', // Return the value or default to "close"
    serialize: (value) => value // Just return the string value
  });

  const pathname = usePathname();


  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="ml-auto flex items-center gap-2">

          <ModeToggle />
          {pathname == "/" && <div
            onClick={() => {
              setIsWebOpen('close');
              setHistory(history === 'close' ? 'open' : 'close');
            }}
            className='flex cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 px-[10px] py-[8px]'
          >
            <DocumentIcon />
            <TypographySmall>
              Chat History
            </TypographySmall>
          </div>}
          {/* <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button> */}
        </div>
      </div>
    </header>
  )
}
