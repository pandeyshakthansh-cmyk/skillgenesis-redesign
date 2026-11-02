import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, GraduationCap, FlaskConical, Rocket, Brain, Database,
  FileCode, Layers, Cloud, ShieldCheck, Blocks, Compass, Check, Target, Users, FolderSearch,
  Handshake, Briefcase, BarChart3, Megaphone, Wallet, PenTool, Lightbulb, MessageSquare, LineChart,
} from "lucide-react";
import hero from "@/assets/hero-students.jpg";
import employers from "@/assets/employers.jpg";
import team from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillGenesis — Thinking Beyond Degrees" },
      { name: "description", content: "Practical skills, real-world experience and career readiness for students, colleges and employers." },
      { property: "og:title", content: "SkillGenesis — Thinking Beyond Degrees" },
      { property: "og:description", content: "Turn your ambition into practical skills, real-world experience and career opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Home", "Explore Courses", "Internships", "For Colleges", "For Employers", "About Us", "Contact"];

function Brand() {
  return (
    <span className="font-brand text-xl font-extrabold tracking-tight">
      <span className="text-brand-blue">Skill</span>
      <span className="text-gold-deep">Genesis</span>
    </span>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-xl font-extrabold text-navy-foreground">
        G
      </span>
      <span className="flex flex-col leading-none">
        <Brand />
        <span className="mt-1 font-brand text-[9px] font-medium uppercase tracking-[0.3em] whitespace-nowrap text-muted-foreground">
          Thinking Beyond Degrees
        </span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-6 px-6 py-4 lg:px-12 2xl:px-28">
        <Logo />
        <nav className="hidden items-center gap-6 2xl:gap-8 xl:flex">
          {nav.map((n) => (
            <a key={n} href="#" className="whitespace-nowrap text-[15px] font-semibold text-navy/80 transition-colors hover:text-navy">{n}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden rounded-full border border-navy/20 px-6 py-3 text-[15px] font-semibold text-navy hover:bg-navy/5 md:inline-flex whitespace-nowrap">Join SkillGenesis</a>
          <a href="#" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gold px-6 py-3 text-[15px] font-semibold text-navy hover:brightness-105">
            Explore Programs <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Badge() {
  const text = "THINKING • BEYOND • DEGREES • ";
  return (
    <div className="absolute -right-6 -top-6 grid h-32 w-32 place-items-center rounded-full bg-gold shadow-xl">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]">
        <defs><path id="c" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
        <text className="fill-navy font-brand text-[9.5px] font-medium" letterSpacing="3.2">
          <textPath href="#c">{text}</textPath>
        </text>
      </svg>
      <Sparkles className="h-8 w-8 text-navy" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-[1680px] items-center gap-16 px-6 py-16 lg:grid-cols-[1.3fr_1fr] lg:px-28 lg:py-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Skills • Experience • Career Readiness</p>
          <h1 className="mt-8 text-6xl font-extrabold leading-[1.02] tracking-tight md:text-8xl">
            Thinking Beyond<br />Degrees.<br /><span className="text-gold">Building Careers.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-xl font-light leading-relaxed text-navy-foreground/80">
            Turn your ambition into practical skills, real-world experience, and career opportunities. SkillGenesis helps you prepare for the world of work through industry-relevant learning and experiential opportunities.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-navy">Explore Programs <ArrowRight className="h-4 w-4" /></a>
            <a href="#" className="inline-flex rounded-full border border-navy-foreground/30 px-8 py-4 font-semibold">Discover Our Mission</a>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="Students learning together" width={1024} height={1152} className="aspect-[5/6] w-full rounded-[2rem] object-cover" />
          <Badge />
          <div className="absolute -bottom-6 -left-10 rounded-2xl bg-ivory p-5 text-navy shadow-2xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep"><Briefcase className="h-4 w-4" /> Live Industry Project</p>
            <p className="mt-2 font-bold">Sprint 03 · Customer churn model</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const methodology = [
  { n: "01", title: "Learn", desc: "Build strong conceptual and technical foundations.", icon: GraduationCap },
  { n: "02", title: "Apply", desc: "Use knowledge through tools, assignments and simulations.", icon: PenTool },
  { n: "03", title: "Solve", desc: "Work on practical challenges and develop solutions.", icon: Lightbulb },
  { n: "04", title: "Demonstrate", desc: "Showcase skills through projects, portfolios and presentations.", icon: Rocket },
];

function MethodNode({ m, className }: { m: (typeof methodology)[number]; className?: string }) {
  return (
    <div className={`w-64 rounded-2xl border border-navy/10 bg-ivory p-5 text-left shadow-lg ${className ?? ""}`}>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-gold"><m.icon className="h-5 w-5" /></span>
        <div>
          <p className="font-brand text-[10px] font-medium uppercase tracking-[0.25em] text-gold-deep">{m.n}</p>
          <p className="font-brand text-lg font-extrabold text-navy">{m.title}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">{m.desc}</p>
    </div>
  );
}

function Methodology() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1680px] px-6 py-20 lg:px-28 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-navy"><span className="h-px w-10 bg-gold-deep" />The SkillGenesis Methodology<span className="h-px w-10 bg-gold-deep" /></p>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-navy md:text-6xl">Learn. Apply. Solve. <span className="text-gold-deep">Demonstrate.</span></h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-navy/70">Knowledge becomes valuable when you know how to apply it. Every learning experience moves you closer to practical competence.</p>
        </div>

        {/* Desktop: radial flowchart */}
        <div className="relative mx-auto mt-16 hidden h-[560px] w-[560px] lg:block">
          <svg viewBox="0 0 560 560" className="absolute inset-0 h-full w-full">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" className="fill-gold-deep" />
              </marker>
            </defs>
            <circle cx="280" cy="280" r="190" fill="none" className="stroke-navy/15" strokeWidth="2" strokeDasharray="6 8" />
            <path d="M 414 148 A 190 190 0 0 1 470 280" fill="none" className="stroke-gold-deep" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <path d="M 470 280 A 190 190 0 0 1 414 412" fill="none" className="stroke-gold-deep" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <path d="M 146 412 A 190 190 0 0 1 90 280" fill="none" className="stroke-gold-deep" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <path d="M 90 280 A 190 190 0 0 1 146 148" fill="none" className="stroke-gold-deep" strokeWidth="2.5" markerEnd="url(#arrow)" />
          </svg>
          <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy text-center shadow-2xl">
            <div>
              <p className="font-brand text-2xl font-extrabold leading-tight"><span className="text-brand-blue">Skill</span><span className="text-gold">Genesis</span></p>
              <p className="mt-2 font-brand text-[9px] font-medium uppercase tracking-[0.3em] text-navy-foreground/60">Thinking Beyond Degrees</p>
            </div>
          </div>
          <MethodNode m={methodology[0]} className="absolute left-1/2 top-0 -translate-x-1/2" />
          <MethodNode m={methodology[1]} className="absolute right-0 top-1/2 -translate-y-1/2" />
          <MethodNode m={methodology[2]} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
          <MethodNode m={methodology[3]} className="absolute left-0 top-1/2 -translate-y-1/2" />
        </div>

        {/* Mobile: vertical flowchart */}
        <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-2 lg:hidden">
          <div className="grid w-full place-items-center rounded-2xl bg-navy px-6 py-5 text-center shadow-xl">
            <p className="font-brand text-xl font-extrabold"><span className="text-brand-blue">Skill</span><span className="text-gold">Genesis</span></p>
            <p className="mt-1 font-brand text-[9px] font-medium uppercase tracking-[0.3em] text-navy-foreground/60">Thinking Beyond Degrees</p>
          </div>
          {methodology.map((m) => (
            <div key={m.n} className="flex w-full flex-col items-center gap-2">
              <ArrowRight className="h-5 w-5 rotate-90 text-gold-deep" />
              <MethodNode m={m} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const tags = ["Python", "SQL", "Analytics", "Cloud", "Communication", "Finance", "AI"];
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1680px] px-6 py-28 lg:px-28">
        <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-navy"><span className="h-px w-10 bg-gold-deep" />The Modern Education Gap</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <h2 className="text-5xl font-extrabold tracking-tight text-navy md:text-6xl">
            Education Is the Beginning. <span className="text-gold-deep">Your Skills Take You Further.</span>
          </h2>
          <p className="text-xl font-light leading-relaxed text-navy/70">
            Academic knowledge matters, but employers also look for practical skills, relevant experience, problem-solving ability, and workplace readiness. SkillGenesis aims to help learners bridge that gap.
          </p>
        </div>
        <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex min-h-[560px] flex-col justify-between rounded-[2rem] bg-navy p-12 text-navy-foreground">
            <div className="flex justify-between">
              <span className="grid h-14 w-14 place-items-center rounded-xl border border-navy-foreground/20"><GraduationCap className="h-5 w-5 text-gold" /></span>
              <span className="font-bold text-gold">01</span>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => <span key={t} className="rounded-full border border-navy-foreground/20 px-4 py-2 text-sm font-semibold">{t}</span>)}
              </div>
              <h3 className="mt-10 text-4xl font-extrabold">Learn Relevant Skills</h3>
              <p className="mt-3 text-navy-foreground/70">Build in-demand capabilities through industry-aligned programs.</p>
            </div>
          </div>
          <div className="grid gap-6">
            {[
              { n: "02", i: FlaskConical, t: "Gain Real Experience", d: "Explore project-based learning and internship opportunities." },
              { n: "03", i: Rocket, t: "Prepare for Careers", d: "Build portfolios, sharpen interview skills and step into work with confidence." },
            ].map(({ n, i: I, t, d }) => (
              <div key={n} className="rounded-[2rem] border border-border bg-card p-12">
                <div className="flex justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-xl border border-border"><I className="h-5 w-5 text-gold-deep" /></span>
                  <span className="font-bold text-gold-deep">{n}</span>
                </div>
                <div className="mt-14 flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-navy">{t}</h3>
                    <p className="mt-3 text-lg text-brand-blue/80">{d}</p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-navy-foreground"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const cats = {
  Technical: [
    { i: Brain, t: "Artificial Intelligence and Machine Learning", d: "Build, train and evaluate models that solve real business problems." },
    { i: Database, t: "Data Analytics and SQL", d: "Query, clean and visualise data to drive confident decisions." },
    { i: FileCode, t: "Python Programming", d: "Write clean, practical Python for automation, data and apps." },
    { i: Layers, t: "Full-Stack Development", d: "Ship complete web products, from interface to database." },
    { i: Cloud, t: "Cloud Computing", d: "Deploy and scale applications on modern cloud platforms." },
    { i: ShieldCheck, t: "Cybersecurity", d: "Protect systems, networks and data from real-world threats." },
    { i: Blocks, t: "Product & UI/UX Design", d: "Design intuitive digital products people love to use." },
  ],
  "Business & Non-Technical": [
    { i: BarChart3, t: "Business Analytics", d: "Turn numbers into strategy with structured analysis." },
    { i: Megaphone, t: "Digital Marketing", d: "Plan and run campaigns that grow brands online." },
    { i: Wallet, t: "Finance & Accounting", d: "Master the financial foundations every business runs on." },
    { i: PenTool, t: "Content & Communication", d: "Write, present and persuade with clarity." },
    { i: Lightbulb, t: "Entrepreneurship", d: "Validate ideas and build ventures from scratch." },
    { i: MessageSquare, t: "Sales & Client Relations", d: "Build relationships and close with confidence." },
    { i: LineChart, t: "Product Management", d: "Lead products from discovery to launch." },
  ],
};

function Categories() {
  const [tab, setTab] = useState<keyof typeof cats>("Technical");
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1680px] px-6 pb-28 lg:px-28">
        <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-navy"><span className="h-px w-10 bg-gold-deep" />Explore Learning Categories</p>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-3xl text-5xl font-extrabold tracking-tight text-navy md:text-6xl">Skills for the Careers of Tomorrow</h2>
          <div className="flex rounded-full border border-border bg-card p-2">
            {(Object.keys(cats) as (keyof typeof cats)[]).map((k) => (
              <button key={k} onClick={() => setTab(k)} className={`rounded-full px-7 py-3 font-semibold transition-colors ${tab === k ? "bg-navy text-navy-foreground" : "text-navy"}`}>{k}</button>
            ))}
          </div>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cats[tab].map(({ i: I, t, d }) => (
            <div key={t} className="group flex flex-col rounded-3xl border border-transparent bg-card p-8 transition hover:border-gold hover:shadow-xl">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-navy"><I className="h-5 w-5 text-gold" /></span>
              <h3 className="mt-10 text-2xl font-bold tracking-tight text-navy">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
              <a href="#" className="mt-auto flex items-center gap-2 pt-10 font-semibold text-gold-deep group-hover:text-navy">Explore Programs <ArrowRight className="h-4 w-4" /></a>
            </div>
          ))}
          <div className="flex flex-col rounded-3xl bg-navy p-8 text-navy-foreground">
            <Compass className="h-8 w-8 text-gold" />
            <h3 className="mt-10 text-2xl font-bold">Not sure where to start?</h3>
            <p className="mt-3 text-navy-foreground/70">Talk to an advisor and find the right path for you.</p>
            <a href="#" className="mt-auto flex items-center gap-2 pt-10 font-semibold text-gold">Get guidance <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Employers() {
  const items = ["Pre-skilled candidate pipeline", "Custom hiring & training programs", "Sponsored capstone projects", "Internship partnerships"];
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[1680px] items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-28">
        <div>
          <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-navy"><span className="h-px w-10 bg-gold-deep" />For Employers & Recruiters</p>
          <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-navy">Hire talent that's ready on day one.</h2>
          <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-navy/70">Access a pipeline of skilled, project-tested learners. Co-design programs that build exactly the capabilities your teams need.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {items.map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 font-medium text-navy"><Check className="h-4 w-4 text-gold-deep" />{i}</div>
            ))}
          </div>
          <a href="#" className="mt-12 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-5 font-semibold text-navy-foreground">Hire from SkillGenesis <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="relative">
          <img src={employers} alt="Recruiter receiving a candidate's portfolio" loading="lazy" width={1280} height={896} className="w-full rounded-[2rem] object-cover" />
          <span className="absolute left-6 top-6 rounded-full bg-ivory/90 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-navy">For Employers & Recruiters</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  const vals = [
    { i: Target, t: "Industry-aligned curriculum", d: "Programs shaped around the skills employers are asking for." },
    { i: Users, t: "Mentors from the field", d: "Learn from professionals who do the work every day." },
    { i: FolderSearch, t: "Portfolio-first learning", d: "Every program ends with work you can show." },
    { i: Handshake, t: "A connected ecosystem", d: "Students, colleges and employers growing together." },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1680px] px-6 py-32 lg:px-28">
        <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-navy"><span className="h-px w-10 bg-gold-deep" />About SkillGenesis · Our Mission</p>
        <h2 className="mt-8 max-w-6xl text-5xl font-extrabold leading-tight tracking-tight text-navy md:text-6xl">
          We believe a degree should be the start of a career story, not the end of a learning one.
        </h2>
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <img src={team} alt="Team collaborating on a laptop" loading="lazy" width={1152} height={960} className="w-full rounded-[2rem] object-cover" />
          <div>
            <p className="text-xl font-light leading-relaxed text-navy/80">
              SkillGenesis is an emerging EdTech startup bridging the gap between academic education and industry expectations. We help students develop practical skills, gain industry exposure through internships and prepare confidently for career opportunities.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {vals.map(({ i: I, t, d }) => (
                <div key={t} className="rounded-3xl border border-border bg-cream/50 p-8">
                  <I className="h-7 w-7 text-gold-deep" />
                  <h3 className="mt-6 text-xl font-bold text-navy">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-[1680px] flex-wrap items-center justify-between gap-6 px-6 py-12 lg:px-28">
        <span className="font-brand text-xl font-extrabold"><span className="text-navy-foreground">Skill</span><span className="text-gold">Genesis</span></span>
        <p className="text-sm text-navy-foreground/60">© 2026 SkillGenesis. Thinking beyond degrees.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Methodology />
      <Pillars />
      <Categories />
      <Employers />
      <About />
      <Footer />
    </div>
  );
}
