import type React from "react"
import { cn } from "<components>/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground dark:text-foreground lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground first:mt-0",
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
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground dark:text-foreground",
        className,
      )}
    >
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn("scroll-m-20 text-xl font-semibold tracking-tight text-foreground dark:text-foreground", className)}
    >
      {children}
    </h4>
  )
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn("leading-7 text-foreground dark:text-foreground [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-border dark:border-border pl-6 italic text-foreground dark:text-foreground",
        className,
      )}
    >
      {children}
    </blockquote>
  )
}

export function TypographyLead({ children, className }: TypographyProps) {
  return <p className={cn("text-xl text-muted-foreground dark:text-muted-foreground", className)}>{children}</p>
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return <div className={cn("text-lg font-semibold text-foreground dark:text-foreground", className)}>{children}</div>
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn("text-sm leading-none font-medium text-foreground dark:text-foreground", className)}>
      {children}
    </small>
  )
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return <p className={cn("text-sm text-muted-foreground dark:text-muted-foreground", className)}>{children}</p>
}
