import { cn } from "<components>/lib/utils"
import type React from "react"

interface TypographyProps {
    children: React.ReactNode
    className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
    return (
        <h1
            className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50", className)}
        >
            {children}
        </h1>
    )
}

export function TypographyH2({ children, className }: TypographyProps) {
    return (
        <h2
            className={cn(
                "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 first:mt-0",
                className,
            )}
        >
            {children}
        </h2>
    )
}

export function TypographyH3({ children, className }: TypographyProps) {
    return (
        <h3
            className={cn("scroll-m-20 text-2xl font-semibold tracking-tight text-slate-700 dark:text-slate-50", className)}
        >
            {children}
        </h3>
    )
}

export function TypographyH4({ children, className }: TypographyProps) {
    return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight text-slate-700 dark:text-slate-50", className)}>
            {children}
        </h4>
    )
}

export function TypographyP({ children, className }: TypographyProps) {
    return (
        <p className={cn("leading-7 text-slate-700 dark:text-slate-300 [&:not(:first-child)]:mt-6", className)}>
            {children}
        </p>
    )
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
    return (
        <blockquote
            className={cn(
                "mt-6 border-l-2 border-slate-300 dark:border-slate-700 pl-6 italic text-slate-700 dark:text-slate-300",
                className,
            )}
        >
            {children}
        </blockquote>
    )
}

export function TypographyLead({ children, className }: TypographyProps) {
    return <p className={cn("text-xl text-slate-600 dark:text-slate-400", className)}>{children}</p>
}

export function TypographyLarge({ children, className }: TypographyProps) {
    return <div className={cn("text-lg font-semibold text-slate-700 dark:text-slate-50", className)}>{children}</div>
}

export function TypographySmall({ children, className }: TypographyProps) {
    return (
        <small className={cn("text-sm leading-none font-medium text-slate-700 dark:text-slate-300", className)}>
            {children}
        </small>
    )
}

export function TypographyMuted({ children, className }: TypographyProps) {
    return <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>{children}</p>
}
