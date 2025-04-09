"use client"


import { AppSidebar } from "<components>/components/app-sidebar"
import { ChartAreaInteractive } from "<components>/components/chart-area-interactive"
import { DataTable } from "<components>/components/data-table"
import { SectionCards } from "<components>/components/section-cards"
import { SiteHeader } from "<components>/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "<components>/components/ui/sidebar"

import data from "./data.json"
import DashboardLayout from "./layout"
import HomeSearch from "<components>/components/home/Home"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <HomeSearch />
    </DashboardLayout>
  )
}
