import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/content'

export const metadata: Metadata = {
  title: 'References | Beyond the Street',
  description:
    'Sources and citations for the Beyond the Street housing justice project.',
}

type Reference = {
  author: string
  year: string
  title: string
  publisher: string
}

const references: Reference[] = [
  {
    author: 'Canadian Human Rights Commission',
    year: '2026',
    title:
      'Two years after landmark report, renewed action is needed',
    publisher: 'chrc-ccdp.gc.ca',
  },
  {
    author: 'Government of Canada',
    year: '2025',
    title: 'Everyone Counts 2024: Highlights Report, Part 2',
    publisher: 'housing-infrastructure.canada.ca',
  },
  {
    author: 'Indigenous Watchdog',
    year: '2022',
    title: 'Housing Conditions',
    publisher: 'indigenouswatchdog.org',
  },
  {
    author: 'Native Youth Alliance for Human Rights',
    year: 'n.d.',
    title: 'Indigenous Homelessness',
    publisher: 'nihc-cnasa.ca',
  },
  {
    author: 'Statistics Canada',
    year: '2022',
    title: 'A portrait of Canadians who have been homeless',
    publisher: 'www150.statcan.gc.ca',
  },
]

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sources"
        title="References"
        intro="This project draws on government reports, national statistics, and Indigenous-led organizations. Sources are listed in alphabetical order."
      />

      <Section>
        <ol className="space-y-5">
          {references.map((ref) => (
            <li
              key={ref.title}
              className="rounded-lg border border-border bg-card p-5"
            >
              <p className="text-base leading-relaxed text-card-foreground">
                <span className="font-semibold">{ref.author}</span>. (
                {ref.year}). <span className="italic">{ref.title}</span>.{' '}
                <span className="text-muted-foreground">{ref.publisher}</span>
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-lg border-l-4 border-accent bg-accent/8 py-4 pl-5 pr-4">
          <p className="text-sm leading-relaxed text-foreground/90 text-pretty">
            Statistics are presented as reported by these sources and may be
            updated as new national counts are released. This site is an
            educational project and is not affiliated with the organizations
            cited.
          </p>
        </div>
      </Section>
    </>
  )
}
