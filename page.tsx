import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const sections = [
  {
    href: '/background',
    number: '01',
    title: 'Background & How It Shows Up',
    description:
      'What Indigenous homelessness is, the numbers behind it, and how the discrimination shows up in Canada today.',
  },
  {
    href: '/norms',
    number: '02',
    title: 'Norms: Before & After',
    description:
      'The old beliefs that blamed individuals, and the new norm that treats housing as a human right.',
  },
  {
    href: '/structures',
    number: '03',
    title: 'Social Structures & Values',
    description:
      'How the Indian Act, child welfare, and the economy keep this problem going, and whose values our systems follow.',
  },
  {
    href: '/change',
    number: '04',
    title: 'Social Change & Institutions',
    description:
      'Where change is already happening, where it still needs to happen, and which institutions have to step up.',
  },
  {
    href: '/theory',
    number: '05',
    title: 'Theory & My Questions',
    description:
      'The social theory that best explains this change, plus the questions I still have about the issue.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/trc-huntsville1.jpg"
            alt="People gather around an Every Child Matters flag and a land acknowledgement stone at a National Day for Truth and Reconciliation event in Huntsville, Ontario."
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/65" />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col px-5 py-24 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-widest text-background/80">
            A Social Justice Project
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-background text-balance md:text-6xl">
            Beyond the Street: Decolonizing Housing Justice for Indigenous
            Peoples in Canada
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/85 text-pretty">
            Indigenous homelessness is not just bad luck or bad choices. It is
            the result of colonization, broken systems, and years of unfair
            policy. This project looks at how that discrimination works, how
            attitudes are changing, and what still needs to change.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/background"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
            >
              Start with the background
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/references"
              className="inline-flex items-center gap-2 rounded-md border border-background/40 px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              View references
            </Link>
          </div>
        </div>
      </section>

      {/* Framing statement */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Why this matters
        </p>
        <p className="mt-4 font-serif text-2xl leading-snug text-foreground text-balance md:text-3xl">
          Indigenous Peoples are only about{' '}
          <span className="text-primary">5% of Canada&apos;s population</span>,
          but they make up around{' '}
          <span className="text-primary">33% of people who are homeless</span>.
          That gap is about policy, not about people.
        </p>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
          This site treats housing as a human right and puts Indigenous-led
          solutions first. The goal is to move the conversation &quot;beyond the
          street&quot; and look at the real, colonial roots of the problem.
        </p>
      </section>

      {/* Section navigation */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="font-serif text-3xl font-semibold text-primary/40 transition-colors group-hover:text-primary">
                {s.number}
              </span>
              <h2 className="mt-3 font-serif text-xl font-semibold text-card-foreground">
                {s.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {s.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read section
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
