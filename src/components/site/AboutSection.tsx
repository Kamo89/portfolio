import { brand, technologies } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { TechnologyBadge } from "./TechnologyBadge";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section className="border-t border-line" aria-labelledby="about-heading">
      <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About"
            title={<span id="about-heading">{brand.owner}</span>}
          />
          <p className="mt-4 font-display text-sm tracking-[0.16em] text-primary">
            {brand.role.toUpperCase()}
          </p>
          <div className="mt-6 grid gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a developer and software tester who enjoys turning ideas into things people can actually use. Through SitesByKamo, I build websites and digital products for businesses, entrepreneurs, brands and early-stage ideas — from professional business websites and ecommerce experiences to products that need to be designed, built and tested from the ground up.
            </p>
            <p>
              My background in software testing has shaped the way I build. I don't just think about how something looks; I think about how it works, what could break, how people will use it, and whether it solves the problem it was created for. That means bringing together development, UI/UX, automation, testing and problem-solving throughout the process.
            </p>
            <p>
              I've worked across web development and software testing, building with technologies such as HTML, CSS, JavaScript, Java, Python, SQL, Selenium and Appium, while also exploring modern tools and frameworks to turn ideas into working products.
            </p>
            <p>
              SitesByKamo is where I bring all of that together.
            </p>
            <p>
              Whether I'm building a website for a business, developing a digital product like HairGo, creating an ecommerce experience, or experimenting with a new idea, my goal is the same: build something useful, make it work properly, and make it feel like a real product, not just another nice-looking website.
            </p>
          </div>
        </div>

        <Reveal delay={100}>
          <p className="eyebrow">Technologies used across these projects</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {technologies.map((t) => (
              <li key={t}>
                <TechnologyBadge label={t} />
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {[
              { value: "14", label: "Projects & products" },
              { value: "6", label: "Industries" },
              { value: "100%", label: "Mobile-first builds" },
            ].map((s) => (
              <div key={s.label} className="bg-background p-6">
                <p className="font-display text-3xl font-semibold">{s.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}