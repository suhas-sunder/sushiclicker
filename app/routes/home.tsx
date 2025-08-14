import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title =
    "Sushi Clicker | Idle Sushi Game, Upgrades, Recipes, and Japanese Food Facts";
  const description =
    "Play Sushi Clicker, an idle clicker where you craft sushi, unlock upgrades, hire staff, and grow a bustling kitchen. Learn real Japanese food facts, sushi terms, and regional dishes while you play.";
  const canonical = "https://www.sushiclicker.com/";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },
    {
      name: "keywords",
      content:
        "sushi clicker, idle game, cookie clicker style, sushi game, sushi upgrades, sashimi, nigiri, maki, ramen, tempura, onigiri, Japanese food facts, sushi terms, sushi recipes",
    },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
    // Replace with a real image when ready (1200x630 recommended)
    {
      property: "og:image",
      content: "https://www.sushiclicker.com/og-image.jpg",
    },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },

    // Canonical
    { rel: "canonical", href: canonical } as any,
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    message:
      "Fresh rice is on the stove. Knives are sharp. Let the clicking begin.",
    lastUpdatedISO: new Date().toISOString(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const lastUpdated = new Date(loaderData?.lastUpdatedISO ?? Date.now());
  const lastUpdatedDisplay = lastUpdated.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 text-slate-900">
      {/* Skip link */}
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      {/* Top nav */}
      <header className="mb-10">
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-5 text-sm">
            <li>
              <a href="#play" className="hover:underline">
                How to Play
              </a>
            </li>
            <li>
              <a href="#upgrades" className="hover:underline">
                Upgrades
              </a>
            </li>
            <li>
              <a href="#staff" className="hover:underline">
                Staff
              </a>
            </li>
            <li>
              <a href="#achievements" className="hover:underline">
                Achievements
              </a>
            </li>
            <li>
              <a href="#facts" className="hover:underline">
                Food Facts
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="content" className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Sushi Clicker. Craft sushi, grow a kitchen, learn real food facts
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          Click to make nigiri and maki, unlock faster knives, automate prep,
          and expand your sushi bar. Sushi Clicker blends idle gameplay with
          real Japanese cuisine knowledge so every session teaches something
          new.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/"
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white"
          >
            Play now
          </a>
          <a
            href="#upgrades"
            className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2"
          >
            See upgrades
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-600" aria-live="polite">
          {loaderData?.message} Last updated {lastUpdatedDisplay}.
        </p>
      </section>

      {/* How to Play */}
      <section id="play" aria-labelledby="play-title" className="mb-12">
        <h2 id="play-title" className="text-2xl font-bold">
          How to play Sushi Clicker
        </h2>
        <p className="mt-3 text-slate-700">
          Tap the sushi to earn rice points. Spend points on tools and helpers
          that increase sushi per click and sushi per second. Unlock new
          recipes, reach milestones, and open specialty stations for ramen,
          tempura, and desserts.
        </p>
        <ul className="mt-4 list-disc pl-5 text-slate-700">
          <li>Click the sushi to gain rice points</li>
          <li>
            Buy knives, rice cookers, and rolling mats to boost production
          </li>
          <li>Hire staff to automate prep and serving</li>
          <li>Unlock new recipes and themed stations as you progress</li>
        </ul>
      </section>

      {/* Upgrades */}
      <section id="upgrades" aria-labelledby="upgrades-title" className="mb-12">
        <h2 id="upgrades-title" className="text-2xl font-bold">
          Upgrades and recipes
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Kitchen tools</h3>
            <p className="mt-2 text-slate-700">
              Faster rice cookers, sharper knives, and premium rolling mats
              increase output and quality.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Recipe unlocks</h3>
            <p className="mt-2 text-slate-700">
              Start with cucumber maki and salmon nigiri. Move into dragon
              rolls, chirashi bowls, and seasonal sets.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Specialty stations</h3>
            <p className="mt-2 text-slate-700">
              Ramen, tempura, and dessert bars add depth and new upgrade paths
              for steady growth.
            </p>
          </article>
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Events and goals</h3>
            <p className="mt-2 text-slate-700">
              Time based challenges, seasonal menus, and collection goals reward
              active and idle play.
            </p>
          </article>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" aria-labelledby="staff-title" className="mb-12">
        <h2 id="staff-title" className="text-2xl font-bold">
          Hire skilled staff
        </h2>
        <p className="mt-3 text-slate-700">
          Recruit sushi chefs, rice masters, and servers. Each role boosts
          passive income and unlocks team perks.
        </p>
        <ul className="mt-4 list-disc pl-5 text-slate-700">
          <li>Sous chef for knife skill multipliers</li>
          <li>Rice master for consistent base production</li>
          <li>Server for combo streak bonuses and tips</li>
        </ul>
      </section>

      {/* Achievements */}
      <section
        id="achievements"
        aria-labelledby="achievements-title"
        className="mb-12"
      >
        <h2 id="achievements-title" className="text-2xl font-bold">
          Achievements and goals
        </h2>
        <p className="mt-3 text-slate-700">
          Earn badges for production milestones, perfect service streaks, and
          recipe mastery. Share progress and compare with friends.
        </p>
      </section>

      {/* Food Facts and Learning */}
      <section id="facts" aria-labelledby="facts-title" className="mb-12">
        <h2 id="facts-title" className="text-2xl font-bold">
          Sushi terms and Japanese food facts
        </h2>
        <p className="mt-3 text-slate-700">
          Learn while you play. Short fact cards explain ingredients, regional
          styles, and common terms. Content focuses on clarity and respect for
          Japanese cuisine.
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Nigiri vs maki</h3>
            <p className="mt-2 text-slate-700">
              Nigiri is a hand formed rice base with a topping. Maki is rolled
              sushi cut into bite size pieces.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Rice matters</h3>
            <p className="mt-2 text-slate-700">
              Sushi rice uses short grain rice seasoned with vinegar, sugar, and
              salt for proper texture.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Wasabi and ginger</h3>
            <p className="mt-2 text-slate-700">
              Wasabi adds heat. Pickled ginger refreshes the palate between
              bites.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Regional variety</h3>
            <p className="mt-2 text-slate-700">
              Styles vary by region. Ingredients and presentation reflect local
              traditions.
            </p>
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-title" className="mb-16">
        <h2 id="faq-title" className="text-2xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-5">
          <details>
            <summary className="cursor-pointer font-semibold">
              Is Sushi Clicker free to play
            </summary>
            <p className="mt-2 text-slate-700">
              Yes. The core game is free to play in the browser. Optional
              upgrades may be available later.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Does progress continue while idle
            </summary>
            <p className="mt-2 text-slate-700">
              Idle systems award passive income when you are away, then apply it
              when you return.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Will there be leaderboards
            </summary>
            <p className="mt-2 text-slate-700">
              Community features are planned. Score sharing and weekly goals are
              likely.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Does the game include real recipes
            </summary>
            <p className="mt-2 text-slate-700">
              Food facts and terms are educational. Simple recipe ideas may be
              included for learning.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Sushi Clicker. All rights reserved.</p>
        <p className="mt-1">
          Play an idle clicker about sushi and learn real food facts as you grow
          your kitchen.
        </p>
      </footer>

      {/* JSON-LD Schema: WebSite, VideoGame, BreadcrumbList, FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sushi Clicker",
              url: "https://www.sushiclicker.com/",
              inLanguage: "en",
              description:
                "Idle sushi game with upgrades, staff, and real Japanese food facts. Play in the browser and grow a virtual kitchen.",
            },
            {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: "Sushi Clicker",
              genre: ["Idle", "Clicker", "Simulation"],
              applicationCategory: "Game",
              url: "https://www.sushiclicker.com/",
              operatingSystem: "Web",
              gamePlatform: "Web",
              description:
                "Cookie Clicker style idle game themed around sushi. Click to craft sushi, unlock upgrades, hire staff, and learn food facts.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.sushiclicker.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Play",
                  item: "https://www.sushiclicker.com/play",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Sushi Clicker free to play",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The core game is free to play in the browser. Optional upgrades may be available later.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does progress continue while idle",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Idle systems award passive income when you are away, then apply it when you return.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will there be leaderboards",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Community features are planned. Score sharing and weekly goals are likely.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
