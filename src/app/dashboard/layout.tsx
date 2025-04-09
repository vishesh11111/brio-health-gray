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
import React, { Suspense } from "react"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <Suspense>
                <SidebarInset>
                    <SiteHeader />
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2 px-7 py-5">
                            {children}
                        </div>
                    </div>
                </SidebarInset>
            </Suspense>
        </SidebarProvider>
    )
}
