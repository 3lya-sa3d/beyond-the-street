import Link from 'next/link'
import { navLinks } from '@/lib/nav-links'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="font-serif text-lg font-semibold text-foreground">
              Beyond the Street
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A student research project examining Indigenous homelessness in
              Canada as a matter of justice, not charity.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Explore</h2>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">
              If you need support
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Hope for Wellness Help Line (First Nations, Inuit &amp; Métis):
              <br />
              <span className="font-medium text-foreground">
                1-855-242-3310
              </span>{' '}
              — available 24/7.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
            We acknowledge that housing justice for Indigenous Peoples is
            inseparable from land, treaties, and self-determination. This site is
            created for educational purposes and centres Indigenous-led
            solutions. Imagery is illustrative and does not depict identifiable
            individuals or communities.
          </p>
        </div>
      </div>
    </footer>
  )
}
