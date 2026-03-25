"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Blocks,
  Bot,
  BrainCircuit,
  ChevronDown,
  Code2,
  FlaskConical,
  GraduationCap,
  Landmark,
  Lightbulb,
  Menu,
  Microscope,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Video,
  WandSparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type MenuKey = "schools" | "philosophy" | "platform";

const desktopMenu = [
  { key: "schools", label: "AI For Schools" },
  { key: "philosophy", label: "Philosophy" },
  { key: "platform", label: "Our AI Platform" },
] as const;

const mobileLinks = [
  { label: "Use Cases", href: "#use-cases" },
  { label: "Blog", href: "#blog" },
  { label: "Resources", href: "#resources" },
];

type Product = {
  name: string;
  subtitle: string;
  benefit: string;
  href: string;
  icon: LucideIcon;
};

const products: Product[] = [
  {
    name: "Cypher",
    subtitle: "Learning Companion",
    benefit: "Personalized guidance that adapts to each learner's pace and confidence.",
    href: "https://www.aireadyschool.com/cypher",
    icon: BrainCircuit,
  },
  {
    name: "Morpheus",
    subtitle: "Teaching Agent",
    benefit: "Cuts teacher prep time with ready-to-adapt lesson and assessment support.",
    href: "https://www.aireadyschool.com/morpheus",
    icon: Bot,
  },
  {
    name: "Zion",
    subtitle: "Tool Suite",
    benefit: "One secure workspace for planning, content creation, and classroom workflows.",
    href: "https://www.aireadyschool.com/our-ai-platform",
    icon: Blocks,
  },
  {
    name: "NEO",
    subtitle: "Innovation Lab",
    benefit: "Helps schools pilot AI safely with clear governance and fast experimentation.",
    href: "https://www.aireadyschool.com/our-ai-platform",
    icon: FlaskConical,
  },
  {
    name: "Matrix",
    subtitle: "Infrastructure",
    benefit: "Enterprise-grade controls, identity, and compliance built for school systems.",
    href: "https://www.aireadyschool.com/our-ai-platform",
    icon: ShieldCheck,
  },
];

const schoolSolutions = [
  {
    title: "Cypher - Learning Companion",
    text: "Personalized learning guidance for every student.",
  },
  {
    title: "Morpheus - Teaching Agent",
    text: "AI planning support that gives teachers time back.",
  },
  {
    title: "Zion - AI Tool Suite",
    text: "30+ tools for content, assessment, and class workflows.",
  },
  {
    title: "NEO - AI Innovation Lab",
    text: "Hands-on AI experimentation with strong guardrails.",
  },
  {
    title: "Matrix - AI Infrastructure",
    text: "Secure deployment, identity, and governance for schools.",
  },
];

const philosophyItems = [
  "It's Time to Reset Education",
  "Holistic Education with AI",
  "What is an Ideal School?",
];

const platformHubs = [
  { title: "Learning Hub", text: "AI learning tools for education", icon: BookOpen },
  { title: "Creative Hub", text: "Image, video, and audio creation", icon: PenTool },
  { title: "Project Hub", text: "Coding and model playgrounds", icon: Code2 },
  { title: "Research Hub", text: "Research facilitators for deeper inquiry", icon: Microscope },
];

function MegaMenu({ activeMenu }: { activeMenu: MenuKey | null }) {
  if (!activeMenu) {
    return null;
  }

  return (
    <div className="absolute left-1/2 top-full z-40 mt-3 hidden w-[min(95vw,880px)] -translate-x-1/2 rounded-3xl border border-line bg-surface p-4 shadow-[0_20px_60px_rgba(42,36,27,0.15)] lg:block">
      {activeMenu === "schools" && (
        <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-2xl border border-line/80 bg-surface-strong/55 p-4">
            <p className="text-sm font-semibold text-ink-soft">AI Solutions for Your School</p>
            <div className="mt-2 space-y-2">
              {schoolSolutions.map((solution) => (
                <article
                  key={solution.title}
                  className="rounded-xl p-3 transition-colors hover:bg-surface hover:shadow-sm"
                >
                  <h4 className="font-semibold tracking-tight text-ink">{solution.title}</h4>
                  <p className="text-sm text-ink-soft">{solution.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-line/80 bg-brand-soft p-4">
              <p className="text-sm font-semibold text-brand">Why AI Ready School?</p>
              <p className="mt-2 text-sm text-ink-soft">The one and only unified AI platform built for schools.</p>
              <div className="mt-4 rounded-xl border border-brand/20 bg-surface px-3 py-2 text-sm font-semibold text-brand">
                Human + AI in balance
              </div>
            </div>
            <div className="rounded-2xl border border-line/80 bg-surface-strong p-4">
              <p className="text-sm font-semibold text-ink-soft">Also</p>
              <ul className="mt-2 space-y-2 text-sm font-medium text-ink">
                <li>Global AI Talent Show</li>
                <li>AI Clubs</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeMenu === "philosophy" && (
        <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-line/80 bg-surface-strong/60 p-4">
            <p className="text-sm font-semibold text-ink-soft">Featured Thinking</p>
            <div className="mt-2 space-y-2">
              {philosophyItems.map((item, idx) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-surface px-3 py-3 text-base font-semibold text-ink"
                >
                  {item}
                  {idx === 0 && <ArrowRight size={16} className="text-brand" />}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line/80 bg-gradient-to-br from-[#1d1f2f] to-[#2d3042] p-5 text-white">
            <p className="text-xs uppercase tracking-[0.16em] text-rose-200">Philosophy in Action</p>
            <h4 className="mt-2 font-display text-2xl font-semibold">Teach curiosity, not dependency.</h4>
            <p className="mt-2 text-sm text-white/80">
              We design tools that help children ask better questions, collaborate, and create.
            </p>
          </div>
        </div>
      )}

      {activeMenu === "platform" && (
        <div className="grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl border border-line/80 bg-surface-strong/55 p-4">
            <p className="text-sm font-semibold text-ink-soft">A Complete Set of AI Tools</p>
            <div className="mt-2 space-y-2">
              {platformHubs.map((hub) => {
                const Icon = hub.icon;
                return (
                  <article
                    key={hub.title}
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface hover:shadow-sm"
                  >
                    <span className="rounded-lg bg-brand-soft p-2 text-brand">
                      <Icon size={16} />
                    </span>
                    <div>
                      <h4 className="font-semibold tracking-tight text-ink">{hub.title}</h4>
                      <p className="text-sm text-ink-soft">{hub.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-line/80 bg-surface-strong p-4">
              <p className="text-sm font-semibold text-ink-soft">Also Check</p>
              <ul className="mt-2 space-y-2 text-sm font-medium text-ink">
                <li>Become a Partner</li>
                <li>Our Clients</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand/25 bg-brand-soft p-4">
              <p className="text-sm font-semibold text-brand">Why AI Ready School?</p>
              <p className="mt-2 text-sm text-ink-soft">The one and only AI platform for schools.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-ink">
      <header className="sticky-top z-50 border-bottom border-line/70 bg-white/95">
        <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
          <nav className="navbar navbar-expand-lg mx-auto w-100 max-w-7xl px-4 px-lg-5 py-3">
            <Link href="/" className="navbar-brand d-flex align-items-center gap-2 m-0">
              <span className="font-display text-2xl font-bold tracking-tight text-brand">AI Ready</span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#f0ac3c]">School</span>
            </Link>

            <ul className="navbar-nav ms-auto me-4 d-none d-lg-flex flex-row align-items-center gap-4 text-[15px] fw-semibold text-ink-soft">
              {desktopMenu.map((item) => (
                <li key={item.key} className="nav-item">
                  <button
                    onMouseEnter={() => setActiveMenu(item.key)}
                    onClick={() => setActiveMenu((prev) => (prev === item.key ? null : item.key))}
                    className="nav-link border-0 bg-transparent d-inline-flex align-items-center gap-1 text-ink-soft p-0"
                  >
                    {item.label}
                    <ChevronDown size={14} className={activeMenu === item.key ? "text-brand" : ""} />
                  </button>
                </li>
              ))}
              <li className="nav-item">
                <a href="#use-cases" className="nav-link text-ink-soft p-0">
                  Use Cases
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link text-ink-soft p-0">
                  Blog
                </a>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-2">
              <a
                href="#"
                className="btn btn-outline-secondary rounded-4 px-4 py-2 fw-semibold"
              >
                Sign in
              </a>
              <a
                href="#demo"
                className="btn rounded-4 px-4 py-2 fw-semibold text-white border-0"
                style={{ backgroundColor: "var(--brand)", boxShadow: "0 10px 20px rgba(233,47,125,0.28)" }}
              >
                Book a Demo
              </a>
            </div>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="btn btn-outline-secondary rounded-circle d-inline-flex d-lg-none align-items-center justify-content-center p-2"
              aria-label="Toggle mobile menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          <MegaMenu activeMenu={activeMenu} />
        </div>

        {menuOpen && (
          <div className="border-top border-line bg-white px-4 py-4 d-lg-none">
            <ul className="list-unstyled mb-3 d-grid gap-2 text-base font-semibold text-ink">
              {desktopMenu.map((item) => (
                <li key={item.key} className="rounded-3 border border-line bg-surface-strong px-3 py-2">
                  {item.label}
                </li>
              ))}
            </ul>
            <ul className="list-unstyled mb-3 d-grid gap-1 text-base font-medium text-ink-soft">
              {mobileLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="d-block rounded-3 px-3 py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="btn w-100 rounded-4 py-2 fw-semibold text-white border-0"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Book a Demo
            </a>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 md:px-8 md:pt-16">
        <section className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
              <Rocket size={14} className="text-brand" />
              Human First, AI Next
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
              A Complete AI Ecosystem
              <br />
              For K-12 Schools
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-soft md:text-lg">
              Everything a school needs to lead the AI era. Personalized companions for every
              student, intelligent teacher tools, and secure infrastructure on your terms.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                id="demo"
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_rgba(233,47,125,0.3)] transition-colors hover:bg-brand-strong"
              >
                Book a Demo
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-3">
              {[
                ["35%", "Less prep time"],
                ["5", "Core products"],
                ["10,000+", "Students reached"],
              ].map(([metric, label]) => (
                <div key={label} className="rounded-2xl border border-line bg-surface p-4">
                  <p className="font-display text-2xl font-semibold text-brand">{metric}</p>
                  <p className="text-sm text-ink-soft">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {[
              {
                title: "Spark Studio",
                text: "Kids build stories with image, voice, and video prompts.",
                icon: Sparkles,
                bg: "from-[#ffd7e5] to-[#ffd5b7]",
              },
              {
                title: "Curiosity Quests",
                text: "Inquiry-based missions that reward questions over answers.",
                icon: WandSparkles,
                bg: "from-[#d6f0ff] to-[#d6ffe8]",
              },
              {
                title: "Future Skills",
                text: "Coding, communication, and safe AI habits in one path.",
                icon: GraduationCap,
                bg: "from-[#e3dbff] to-[#ffcfe9]",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`rounded-3xl border border-line bg-gradient-to-br ${item.bg} p-6 text-left shadow-[0_10px_24px_rgba(49,35,23,0.08)]`}
                >
                  <span className="inline-flex rounded-xl bg-white/70 p-2.5 text-brand">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </article>
              );
            })}
          </motion.div>
        </section>

        <section id="platform" className="mt-24 overflow-hidden py-10">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8 mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Product Ecosystem</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Five products. One student-first system.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              Each module is intentionally mapped to a school outcome so leaders can deploy with
              confidence and scale without chaos.
            </p>
          </div>

          <div className="group relative w-full flex gap-6 px-5 w-max animate-marquee">
            {[...products, ...products, ...products].map((product, index) => {
              const Icon = product.icon;

              return (
                <article
                  key={`${product.name}-${index}`}
                  className="w-[300px] shrink-0 rounded-3xl border border-line bg-surface p-6 shadow-[0_10px_30px_rgba(44,28,12,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(44,28,12,0.12)] md:w-[350px]"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-brand-soft p-2.5 text-brand">
                    <Icon size={20} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    {product.subtitle}
                  </p>
                  <h4 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
                    {product.name}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft whitespace-normal">{product.benefit}</p>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
                  >
                    Learn more <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="use-cases" className="mt-20 rounded-3xl border border-line bg-surface p-7 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Teacher Acceleration",
                desc: "Auto-generate lesson variants, worksheets, and remediation plans.",
                icon: Lightbulb,
              },
              {
                title: "Student Creativity",
                desc: "Guide children to produce stories, videos, and prototypes safely.",
                icon: Video,
              },
              {
                title: "School Governance",
                desc: "Audit trails, permission controls, and compliance-ready workflows.",
                icon: Landmark,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-line bg-surface-strong p-5">
                  <span className="inline-flex rounded-lg bg-brand-soft p-2 text-brand">
                    <Icon size={18} />
                  </span>
                  <h4 className="mt-3 font-display text-xl font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="blog" className="mt-20">
          <h3 className="text-center font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            AI Ready School Blog
          </h3>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Personalisation Beyond Content: The 4 Dimensions Every School Should Track",
                date: "March 25, 2026",
                colors: "from-[#250a72] via-[#5b23bb] to-[#1f75c8]",
              },
              {
                title: "Teacher First: How AI Should Empower Educators, Not Replace Them",
                date: "March 24, 2026",
                colors: "from-[#300a65] via-[#6f2ebd] to-[#8d56d7]",
              },
              {
                title: "Why AI Should Make Children Think, Not Give Them Answers",
                date: "March 23, 2026",
                colors: "from-[#11457e] via-[#0c78b3] to-[#f35f48]",
              },
            ].map((post) => (
              <article key={post.title} className="group">
                <div
                  className={`h-56 rounded-3xl bg-gradient-to-br ${post.colors} p-5 text-white shadow-[0_12px_30px_rgba(24,15,47,0.25)]`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
                      Featured
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/75" />
                  </div>
                  <div className="mt-8 space-y-2">
                    <div className="h-2.5 w-20 rounded bg-white/30" />
                    <div className="h-2.5 w-28 rounded bg-white/20" />
                  </div>
                  <p className="mt-8 w-4/5 text-xl font-semibold leading-snug">{post.title.split(":")[0]}</p>
                </div>
                <h4 className="mt-4 text-xl font-semibold leading-snug text-ink md:text-2xl">
                  {post.title}
                </h4>
                <p className="mt-2 text-sm text-ink-soft">{post.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="philosophy" className="mt-20 text-center">
          <h3 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Over 10,000+ Students
            <br />
            And Teachers Trust Us!
          </h3>
          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-sm text-ink-soft">Projects completed</p>
              <p className="mt-2 font-display text-3xl font-semibold text-brand">10+</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-sm text-ink-soft">Client Satisfaction</p>
              <p className="mt-2 font-display text-3xl font-semibold text-brand">98%</p>
            </div>
          </div>

          <div className="mt-8 grid items-center gap-4 rounded-3xl border border-line bg-surface p-6 text-center md:grid-cols-4">
            {["MERU International School", "N.H. GOEL World School", "The Aarambh School", "Delhi Public School"].map((name) => (
              <div
                key={name}
                className="rounded-xl border border-line bg-surface-strong px-3 py-4 text-sm font-semibold text-ink"
              >
                {name}
              </div>
            ))}
          </div>

          <blockquote className="mx-auto mt-10 max-w-4xl rounded-3xl border border-line bg-surface p-7 text-left text-base leading-relaxed text-ink-soft md:p-8 md:text-lg">
            &quot;The AI-Ready School app is a game-changer. It simplifies routine tasks while helping us
            create engaging content and deliver stronger classroom outcomes.&quot;
          </blockquote>
        </section>

        <section id="resources" className="mt-20 rounded-3xl border border-line bg-surface p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
            <div>
              <p className="text-sm text-ink-soft">Powered by</p>
              <h4 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink">learnia.ai</h4>
              <p className="mt-20 text-sm text-ink-soft">Privacy Policy</p>
            </div>

            <div>
              <h5 className="font-display text-xl font-semibold text-ink">AI Ready School</h5>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>AI for Schools</li>
                <li>Our AI Platform</li>
                <li>AI Projects</li>
                <li>Why AI Ready School?</li>
                <li>AIRAS</li>
                <li>Teacher Workshop</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div>
              <h5 className="font-display text-xl font-semibold text-ink">Other Links</h5>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>About us</li>
                <li>Testimonials</li>
                <li>Contact us</li>
                <li>Our Clients</li>
                <li>Blog</li>
                <li>Pricing</li>
              </ul>
            </div>

            <div>
              <h5 className="font-display text-xl font-semibold text-ink">Follow us</h5>
              <div className="mt-3 flex items-center gap-3 text-ink-soft">
                <span className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold">
                  IG
                </span>
                <span className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold">
                  IN
                </span>
                <span className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold">
                  YT
                </span>
              </div>
              <p className="mt-20 text-sm text-ink-soft">@2026: LEARNIA.AI</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
