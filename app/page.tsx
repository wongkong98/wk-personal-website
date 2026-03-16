'use client';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./theme-toggle'), { ssr: false });

const highlights = [
  {
    value: "<1s",
    label: "inspection flow target",
    detail: "Optimized rendering for AI-driven factory inspection software.",
  },
  {
    value: "400+",
    label: "healthcare providers supported",
    detail: "Built and maintained clinic systems used in daily operations.",
  },
  {
    value: "3",
    label: "software roles across SEA",
    detail: "Experience spanning manufacturing, healthtech, and fintech.",
  },
];

const focusAreas = [
  "Full-stack product development",
  "Performance tuning and debugging",
  "Frontend to backend system integration",
  "File import, export, and workflow tooling",
];

const skillGroups = [
  {
    title: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Frameworks and tools",
    items: [
      ".NET Framework",
      ".NET Core",
      "Angular",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Docker",
      "Git",
      "Vercel",
    ],
  },
  {
    title: "Data and architecture",
    items: [
      "MS SQL Server",
      "Supabase (PostgreSQL)",
      "RESTful APIs",
      "OOP",
      "SDLC",
      "Agile/Scrum",
    ],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Soda Vision Pte Ltd",
    location: "Singapore",
    period: "Apr 2025 - Present",
    summary:
      "Building AI-powered inspection software that has to stay fast, stable, and deployment-ready on production lines.",
    bullets: [
      "Engineered high-performance factory inspection interfaces and tuned rendering so each inspection workflow stays under one second.",
      "Connected frontend systems with Python-based AI backends, including resilient file uploads and progress tracking for large model packages.",
      "Planned and deployed software directly onto production lines while coordinating smooth, zero-downtime rollouts with operations teams.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Assurance Technology Pte Ltd",
    location: "Singapore",
    period: "Jul 2023 - Apr 2025",
    summary:
      "Maintained and improved clinic management systems used by healthcare providers every day.",
    bullets: [
      "Built and maintained clinic management software with VB.NET, C#, and SQL Server for more than 400 healthcare providers.",
      "Optimized legacy application flows and complex SQL queries to reduce latency and improve the experience for clinic staff.",
      "Raised code quality through reviews and engineering best practices that helped reduce post-deployment bugs.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "iFAST Capital Sdn Bhd",
    location: "Malaysia",
    period: "Nov 2022 - May 2023",
    summary:
      "Contributed to investment platform development in a team environment focused on performance and maintainability.",
    bullets: [
      "Developed and tested parts of the company investment platform using Angular and Java.",
      "Helped reduce manual data entry time by improving product workflows and implementation quality.",
      "Collaborated with senior engineers on refactoring efforts to strengthen maintainability and application performance.",
    ],
  },
];

const education = {
  degree: "Bachelor of Information Technology",
  school: "Tunku Abdul Rahman University",
  date: "May 2023",
};

const contactLinks = [
  {
    label: "Email",
    href: "mailto:contact@wongkong.com",
    value: "contact@wongkong.com",
  },
  { label: "Website", href: "https://www.wongkong.com", value: "wongkong.com" },
  { label: "Phone", href: "tel:+6586202312", value: "+65 8620 2312" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-8rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(247,148,29,0.24),_transparent_68%)] blur-2xl dark:bg-[radial-gradient(circle,_rgba(14,165,233,0.18),_transparent_68%)]" />
        <div className="absolute right-[-10rem] top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(25,118,210,0.18),_transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_68%)]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(9,28,52,0.16),_transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(148,163,184,0.12),_transparent_72%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-6 rounded-[2rem] border border-white/55 bg-white/78 px-6 py-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur transition-colors md:px-8 md:py-8 dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_30px_80px_rgba(2,6,23,0.55)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex w-fit items-center rounded-full border border-slate-300/70 bg-slate-950 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-50 dark:border-white/12 dark:bg-white/7 dark:text-slate-100">
              Singapore-based full-stack developer
            </div>
            <ThemeToggle />
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Wong Kong
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-7xl">
                  Building reliable software for real production environments.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                  Full-stack software developer with experience across AI
                  inspection systems, clinic operations software, and fintech
                  product development. Strong in debugging edge cases,
                  integrating frontend systems with APIs, and shipping features
                  that hold up in day-to-day use.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-orange-400 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-orange-500 dark:border-white/12 dark:bg-sky-500 dark:text-slate-100 dark:hover:border-sky-500/60 dark:hover:bg-sky-900"
                  href="mailto:contact@wongkong.com"
                >
                  Contact me
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 dark:border-white/12 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-400/60 dark:hover:bg-slate-900"
                  href="/Wong-Kong-Resume.docx"
                >
                  Download resume
                </a>
              </div>
            </div>

            <div className="grid gap-3 rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-5 text-sm text-slate-200 sm:grid-cols-3 lg:w-[25rem] lg:grid-cols-1 dark:border-white/10 dark:bg-slate-900/90">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  Based in
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  Singapore PR
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  Current focus
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  Computer Vision, AWS, CI/CD
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  Strength
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  Turning complex systems into dependable user experiences
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-t border-slate-200/80 pt-6 dark:border-white/10 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-5 transition-colors dark:border-white/10 dark:bg-white/6"
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-slate-50">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-colors md:p-8 dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_24px_70px_rgba(2,6,23,0.45)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Professional summary
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-9 text-slate-700 dark:text-slate-300">
              I enjoy building software that works under pressure, whether that
              means keeping AI inspection tools responsive on the factory floor
              or improving healthcare systems relied on by hundreds of
              providers. My work usually sits at the intersection of product
              experience, system performance, and practical delivery.
            </p>
          </article>

          <aside className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 text-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.16)] transition-colors md:p-8 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_24px_70px_rgba(2,6,23,0.55)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
              Core focus
            </p>
            <div className="mt-5 grid gap-3">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 dark:border-white/12 dark:bg-white/4"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-colors md:p-8 dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_24px_70px_rgba(2,6,23,0.45)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Experience
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-slate-50">
                Roles that shaped how I build
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              My background spans industrial software, healthcare systems, and
              fintech products, with a consistent focus on usability,
              maintainability, and production readiness.
            </p>
          </div>

          <div className="mt-8 grid gap-6">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/85 p-5 transition-colors md:p-6 dark:border-white/10 dark:bg-white/6"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-slate-50">
                      {job.role}
                    </p>
                    <p className="mt-1 text-base font-medium text-slate-700 dark:text-slate-300">
                      {job.company} / {job.location}
                    </p>
                  </div>
                  <p className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 dark:border-white/12 dark:bg-slate-900 dark:text-slate-300">
                    {job.period}
                  </p>
                </div>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                  {job.summary}
                </p>

                <div className="mt-5 grid gap-3">
                  {job.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl bg-white px-4 py-4 text-sm leading-7 text-slate-700 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.16)] transition-colors dark:bg-slate-900/80 dark:text-slate-300 dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <article className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-colors md:p-8 dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_24px_70px_rgba(2,6,23,0.45)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Technical skills
            </p>
            <div className="mt-6 grid gap-4">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-5 transition-colors dark:border-white/10 dark:bg-white/6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {group.title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors dark:border-white/12 dark:bg-slate-900/80 dark:text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 text-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.16)] transition-colors md:p-8 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_24px_70px_rgba(2,6,23,0.55)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                Education
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {education.degree}
              </h2>
              <p className="mt-2 text-base leading-8 text-slate-300">
                {education.school}
              </p>
              <p className="mt-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 dark:border-white/12 dark:bg-white/4">
                Completed {education.date}
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-colors md:p-8 dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_24px_70px_rgba(2,6,23,0.45)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-slate-50">
                Open to conversations about thoughtful software work.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                If you are building products that need a dependable engineer
                who can move between frontend, backend, and operational
                realities, I would be happy to connect.
              </p>

              <div className="mt-6 grid gap-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/6 dark:hover:border-sky-400/50 dark:hover:bg-white/10"
                  >
                    <span className="font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {item.label}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
