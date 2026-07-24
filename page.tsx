import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import {
  Callout,
  PageHero,
  Prose,
  Section,
  SectionHeading,
  StatCard,
} from '@/components/content'

export const metadata: Metadata = {
  title: 'Structures & Values | Beyond the Street',
  description:
    'How the Indian Act, the child welfare system, and the economy keep Indigenous housing injustice going, and the clash of values underneath it.',
}

export default function StructuresPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 03"
        title="Social Structures & Value Systems"
        intro="Discrimination is not only personal. It is built right into our institutions. Housing injustice keeps going because of how funding, child welfare, and the economy are set up, and whose values those systems follow."
      />

      <Section>
        <SectionHeading>Federal control and funding gaps</SectionHeading>
        <Prose>
          <p>
            Under the <em>Indian Act</em>, the federal government is in charge of
            housing on reserves. In reality, that has meant years of
            underfunding and unsafe conditions like overcrowding, mould, and
            fire risks.
          </p>
          <p>
            When homes are unsafe or missing, people move to cities. There, they
            often run into racism from landlords in the private rental market.
          </p>
        </Prose>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <StatCard
            value="17×"
            label="Inuit are about 17 times more likely to die in a house fire, mostly because of poor and overcrowded housing."
            source="Indigenous Watchdog (2022)"
          />
          <StatCard
            value="Higher risk"
            label="Statistics Canada links being Indigenous, and other overlapping identities, to a greater risk of unsheltered homelessness."
            source="Statistics Canada (2022)"
          />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading>The child welfare pipeline</SectionHeading>
        <Prose>
          <p>
            Indigenous families are watched more closely by the child welfare
            system, so their kids get taken into foster care more often. This
            builds a pipeline: young people who age out of care are much more
            likely to become homeless. And the fear of losing their children can
            push families away from the help they need.
          </p>
        </Prose>

        <Callout title="A cycle, not an accident">
          Removal, instability, and homelessness feed into each other across
          generations. To break the cycle, we have to change the institutions
          that drive it, not tell families to just try harder.
        </Callout>
      </Section>

      <Section className="pt-0">
        <SectionHeading>Economic exclusion</SectionHeading>
        <Prose>
          <p>
            Job barriers make everything worse. Indigenous skills and experience
            are often ignored or undervalued in hiring, which limits the steady
            income people need to keep housing.
          </p>
        </Prose>
      </Section>

      <Section className="pt-0">
        <SectionHeading>A clash of value systems</SectionHeading>
        <Prose>
          <p>
            Underneath these institutions is a deeper clash of values. A lot of
            housing programs are built around settler assumptions and quietly
            treat them as normal or universal.
          </p>
        </Prose>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-muted/60 p-5">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Settler value system
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Private property ownership</li>
              <li>Individualism and self-reliance</li>
              <li>The nuclear family as the default household</li>
            </ul>
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent/8 p-5">
            <h3 className="font-serif text-lg font-semibold text-accent">
              Many Indigenous value systems
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/90">
              <li>Community care for the land</li>
              <li>Reciprocity and shared responsibility</li>
              <li>Collective and multi-generational well-being</li>
            </ul>
          </div>
        </div>

        <Prose>
          <p>
            When housing models ignore these values, they are not just a bad
            cultural fit, they often just do not work. Solutions built around
            community and connection to land tend to work better because they
            actually match the people they serve.
          </p>
        </Prose>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/norms"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back: Norms
          </Link>
          <Link
            href="/change"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Next: Social change &amp; institutions
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>
    </>
  )
}
