import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import {
  PageHero,
  Prose,
  Pullquote,
  Section,
  SectionHeading,
} from '@/components/content'

export const metadata: Metadata = {
  title: 'Norms | Beyond the Street',
  description:
    'How norms around Indigenous homelessness are shifting from blaming individuals toward treating housing as a human right.',
}

const oldNorms = [
  {
    title: 'Blame the individual',
    body: 'The idea that homelessness is caused by personal choices, like addiction or laziness, instead of bigger barriers.',
  },
  {
    title: 'Fit in or fail',
    body: 'Expecting Indigenous people to use non-Indigenous systems and services with no cultural support at all.',
  },
  {
    title: 'Out of sight, out of mind',
    body: 'Only counting visible, street-level homelessness and ignoring the hidden kind.',
  },
]

const newNorms = [
  {
    title: 'Blame the system',
    body: 'Seeing housing problems as a result of colonial policy, like residential schools and underfunding on reserves.',
  },
  {
    title: 'Cultural safety',
    body: 'Accepting that real solutions have to be Indigenous-led and connected to culture, including land-based healing.',
  },
  {
    title: 'Housing is a human right',
    body: 'Moving from charity to a rights-based approach that lines up with UNDRIP and the right to a decent home.',
  },
]

export default function NormsPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 02"
        title="Norms: Before, After, and What's Next"
        intro="Norms are the shared, usually unspoken beliefs that shape how a society reacts to an issue. Around Indigenous homelessness, those norms are clearly changing, away from blame and toward accountability."
      />

      <Section>
        <SectionHeading>The old norms we inherited</SectionHeading>
        <Prose>
          <p>
            For a long time, people talked about homelessness like it was
            entirely the person&apos;s fault. These old norms made it easy to
            ignore the real causes.
          </p>
        </Prose>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {oldNorms.map((n) => (
            <div
              key={n.title}
              className="rounded-lg border border-border bg-muted/60 p-5"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {n.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {n.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading>The new norms taking over</SectionHeading>
        <Prose>
          <p>
            A newer set of norms is spreading through policy, research, and
            public opinion. Each one moves the blame off the individual and onto
            the systems and history that created the crisis.
          </p>
        </Prose>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {newNorms.map((n) => (
            <div
              key={n.title}
              className="rounded-lg border border-primary/25 bg-primary/5 p-5"
            >
              <h3 className="font-serif text-lg font-semibold text-primary">
                {n.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90 text-pretty">
                {n.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading>Proof that the norm is changing</SectionHeading>
        <Prose>
          <p>
            You can see the change in how cities handle encampments. The old way
            was punishing: police, sweeps, and removals. Newer city plans focus
            more on outreach and actually connecting people to housing instead
            of just moving them along.
          </p>
          <p>
            National human-rights groups back this up. Two years after a big
            report on the right to housing, the Canadian Human Rights Commission
            said more action is needed. That is a sign that quick, temporary
            fixes are no longer seen as good enough.
          </p>
        </Prose>

        <Pullquote cite="Canadian Human Rights Commission (2026)">
          Two years after a landmark report, renewed action is needed to make
          the right to housing real for Indigenous Peoples.
        </Pullquote>

        <div className="my-8 overflow-hidden rounded-lg border border-border">
          <Image
            src="/images/trc-huntsville3.jpg"
            alt="Community members in ribbon skirts drum beside an Every Child Matters flag at a National Day for Truth and Reconciliation event."
            width={1600}
            height={1067}
            className="h-auto w-full object-cover"
          />
          <p className="bg-card px-4 py-3 text-xs text-muted-foreground">
            A National Day for Truth and Reconciliation event in Huntsville,
            Ontario. Public events like this show the norm shifting toward
            accountability and respect. Photo: Maksim Sokolov (CC BY-SA 4.0).
          </p>
        </div>

        <Prose>
          <p>
            The future norm this points to is simple: housing is a right that
            governments have to protect, and solutions are built with Indigenous
            communities, not just for them.
          </p>
        </Prose>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/background"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back: Background
          </Link>
          <Link
            href="/structures"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Next: Structures &amp; values
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>
    </>
  )
}
