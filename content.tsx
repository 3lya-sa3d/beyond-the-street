import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro: string
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          {intro}
        </p>
      </div>
    </section>
  )
}

export function Section({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn('mx-auto max-w-3xl px-5 py-12 md:py-16', className)}>
      {children}
    </section>
  )
}

export function SectionHeading({
  children,
  id,
}: {
  children: ReactNode
  id?: string
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
    >
      {children}
    </h2>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/90 [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
      {children}
    </div>
  )
}

export function StatCard({
  value,
  label,
  source,
}: {
  value: string
  label: string
  source?: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <p className="font-serif text-4xl font-semibold text-primary">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-card-foreground text-pretty">
        {label}
      </p>
      {source && (
        <p className="mt-3 text-xs text-muted-foreground">Source: {source}</p>
      )}
    </div>
  )
}

export function Callout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-accent bg-accent/8 py-4 pl-5 pr-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        {title}
      </p>
      <div className="mt-2 text-base leading-relaxed text-foreground/90">
        {children}
      </div>
    </div>
  )
}

export function Pullquote({
  children,
  cite,
}: {
  children: ReactNode
  cite: string
}) {
  return (
    <figure className="my-8 border-l-4 border-primary pl-6">
      <blockquote className="font-serif text-xl leading-snug text-foreground text-pretty md:text-2xl">
        {children}
      </blockquote>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        — {cite}
      </figcaption>
    </figure>
  )
}
