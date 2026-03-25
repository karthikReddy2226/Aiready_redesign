# AI Ready School - Homepage Redesign

Live Demo: [Insert Vercel Link Here]

## Step 1: UX/UI Audit & Problem Identification
Before writing code, I audited the current AI Ready School homepage from the perspective of school principals and academic heads evaluating solutions quickly.

### Top 4 UX issues found

1. **Cognitive load from abstract naming**
	The ecosystem names (Cypher, Morpheus, Zion, NEO, Matrix) are strong brand assets, but they do not immediately explain outcomes.
	**Fix in redesign:** each product card now pairs the product name with a plain-language subtitle and benefit-led copy.

2. **Weak CTA hierarchy**
	When too many actions visually compete, conversion drops.
	**Fix in redesign:** one consistent primary CTA treatment (Book a Demo) is used in the navigation and hero.

3. **Feature-heavy hero messaging**
	The homepage should establish value in seconds, not paragraphs.
	**Fix in redesign:** the hero now leads with a concise value proposition, reinforces trust, and funnels users to one next action.

4. **Mobile interaction friction**
	Dense navigation patterns cause touch errors on smaller screens.
	**Fix in redesign:** a dedicated mobile menu with larger targets and cleaner spacing.

## Prioritization for this Sprint
Given a strict 4-hour build window, the high-impact sequence was:

1. **Navigation** for structural clarity and action hierarchy.
2. **Hero section** for first-impression impact and message alignment.
3. **Product ecosystem grid** to make the five core products immediately understandable.

## Technical Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animation:** Framer Motion (subtle reveal transitions)

## What I would do with more time
- Add an interactive tabbed explorer for Cypher, Morpheus, Zion, NEO, and Matrix.
- Add social proof from educators and institutions.
- Expand animation system with scroll-linked storytelling while preserving performance budgets.

## Local Development

Run the app:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment
The project is Vercel-ready.

1. Push repository to GitHub.
2. Import the repo in Vercel.
3. Deploy and paste the live link at the top of this README.
