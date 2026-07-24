import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Callout,
  PageHero,
  Prose,
  Section,
  SectionHeading,
  StatCard,
} from '@/components/content'
import { HomelessnessChart } from '@/components/homelessness-chart'

export const metadata: Metadata = {
  title: 'Background | Beyond the Street',
  description:
    'A short background on Indigenous homelessness in Canada, the numbers behind it, and how the discrimination shows up today.',
}

export default function BackgroundPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 01"
        title="Background & How the Discrimination Shows Up"
        intro="Indigenous homelessness is not a story about lazy or careless people. It is a direct result of colonization, past trauma, and systems that keep leaving Indigenous Peoples out."
      />

      <Section>
        <SectionHeading>What the issue really is</SectionHeading>
        <Prose>
          <p>
            Most people picture homelessness as simply not having a house.
            Indigenous scholars define it in a bigger way: as losing your
            connections to land, family, culture, and community. Colonial
            policies like residential schools, the Sixties Scoop, and forced
            moves caused those losses.
          </p>
          <p>
            Why does the definition matter? If we call homelessness a personal
            choice, we look for personal fixes. If we see it as the result of
            policy, we look for justice instead.
          </p>
        </Prose>

        <Callout title="The main idea">
          Indigenous homelessness is a symptom of ongoing colonization, not a
          bunch of separate personal failures.
        </Callout>
      </Section>

      <Section className="pt-0">
        <SectionHeading>The numbers</SectionHeading>
        <Prose>
          <p>
            The size of the gap is shocking. These numbers come from national
            counts and Statistics Canada, and the same pattern shows up across
            the country.
          </p>
        </Prose>

        <HomelessnessChart />

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <StatCard
            value="33%"
            label="Of Canada's homeless population is Indigenous, even though Indigenous Peoples are only about 5% of everyone."
            source="Everyone Counts 2024"
          />
          <StatCard
            value="34%"
            label="Of First Nations people experiencing homelessness were completely unsheltered, compared to 18% who were in shelters."
            source="Everyone Counts 2024"
          />
          <StatCard
            value="~90%"
            label="In some northern cities like Yellowknife, almost everyone experiencing homelessness is Indigenous."
            source="NIHC / NAHRC"
          />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading>How it shows up in society</SectionHeading>

        <div className="mt-6 space-y-8">
          <article>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Encampments and &quot;hidden&quot; homelessness
            </h3>
            <Prose>
              <p>
                In cities like Edmonton and Vancouver, tent camps have grown
                because there is not enough affordable, culturally safe housing.
                People often call this a public-order problem, but it is really
                a housing problem.
              </p>
              <p>
                A lot of Indigenous homelessness is also hidden. Many families
                are crammed into overcrowded homes or couch-surf, and some avoid
                shelters out of fear that child welfare will take their kids.
                Street counts miss most of them.
              </p>
            </Prose>
          </article>

          <div className="overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/encampment.jpg"
              alt="A makeshift shelter built from tarps and poles in an overgrown field, an example of hidden homelessness in Canada."
              width={1600}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="bg-card px-4 py-3 text-xs text-muted-foreground">
              A makeshift shelter in Canada. Much Indigenous homelessness is
              &quot;hidden&quot; and never shows up in official street counts.
              Photo: waferboard (CC BY 2.0).
            </p>
          </div>

          <article>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Poor housing on reserves
            </h3>
            <Prose>
              <p>
                On many reserves, homes are overcrowded and badly maintained,
                with problems like mould and fire hazards. When housing is unsafe
                or just not available, people leave for cities, where they often
                face racism when trying to rent.
              </p>
            </Prose>
          </article>

          <div className="overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/nwt-home.jpg"
              alt="A single home on the coast of a remote northern community in the Northwest Territories."
              width={1600}
              height={1200}
              className="h-auto w-full object-cover"
            />
            <p className="bg-card px-4 py-3 text-xs text-muted-foreground">
              A home in a remote northern community. In the North, housing is
              limited and expensive, which pushes overcrowding. Photo: dvs (CC
              BY 2.0).
            </p>
          </div>

          <article>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Health effects
            </h3>
            <Prose>
              <p>
                Unstable housing is closely tied to worse mental health and more
                chronic illness. Bad or unsafe housing does not just come from
                poor health, it actually causes it.
              </p>
            </Prose>
          </article>
        </div>
      </Section>

      <Section className="pt-0">
        <Link
          href="/norms"
          className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          Next: Norms before and after
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Section>
    </>
  )
}
