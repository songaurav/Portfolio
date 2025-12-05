# 3D Cybersecurity Portfolio - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from cybersecurity platforms, futuristic tech interfaces (like Vercel, Linear), and Matrix/cyberpunk aesthetics. This creates a cutting-edge, professional portfolio that screams technical expertise.

## Color System
**Dark Cybersecurity Theme:**
- Primary Background: Pure black (#000000) or near-black (#0a0a0a)
- Accent Color: Neon green (#00ff00, #0f0) for highlights, borders, glows
- Secondary Green: Muted green (#00cc00) for text/secondary elements
- Text: White (#ffffff) for primary, green tints for secondary
- Subtle grays: (#1a1a1a, #2a2a2a) for cards/sections

## Typography
**Monospace-Forward with Modern Sans:**
- Headings: "Space Grotesk" or "Inter" (700-800 weight) - clean, technical feel
- Body: "Inter" or "Roboto" (400-500 weight)
- Code/Technical: "JetBrains Mono" or "Fira Code" for skill tags, technical details
- Hero Name: 48-72px (mobile: 36-48px)
- Section Headers: 32-48px (mobile: 28-36px)
- Body Text: 16-18px, generous line-height (1.7-1.8)

## Layout System
**Spacing:** Tailwind units of 4, 8, 12, 16, 24 for consistency (p-4, py-8, gap-12, mt-16, py-24)
- Section vertical padding: py-16 (mobile), py-24 (desktop)
- Container max-width: max-w-6xl for content, max-w-7xl for wide sections
- Grid gaps: gap-6 to gap-8
- Card padding: p-6 to p-8

## 3D & Animation Strategy
**Three.js Particle System:**
- Full-viewport canvas background with matrix-style falling particles/geometric grid
- Interactive: Particles react to mouse movement with repulsion/attraction
- Color: Green particles (#00ff00) with varying opacity (0.3-0.8)
- Performance: Lower particle count on mobile (100-200 vs 500-1000 desktop)

**Scroll Animations (Minimal, Purposeful):**
- Fade-up on scroll for section entries (translate-y-8 opacity-0 → translate-y-0 opacity-100)
- Green glow pulse effect on skill badges/cards
- Smooth scroll behavior between sections

## Section-by-Section Layout

### 1. Hero Section (100vh)
- Full-height with 3D particle canvas as background
- Centered content with terminal-style typing animation for name
- Tagline: "Cybersecurity Professional | Penetration Tester | Red Team Researcher"
- Two-line about summary (concise, impactful)
- Downward chevron/scroll indicator with green glow
- NO image - pure 3D particle effect background

### 2. About Section
- Two-column layout (desktop): Left = professional summary, Right = quick stats (3 years exp, 11 vulnerabilities found, etc.)
- Mobile: Stacked single column
- Green-bordered card with subtle glow effect
- Terminal-style prompt symbols (> or $) before key points

### 3. Education Section
- Timeline layout with vertical green line connecting entries
- Each degree: Card with institution, degree, GPA, dates
- Subtle hover effect: increased green glow on card borders

### 4. Experience Section  
- Alternating left/right timeline cards (desktop only; mobile stacked)
- Each role: Company, title, dates, 3-4 bullet achievements
- Achievement bullets with green chevron icons
- Percentage/number highlights in neon green

### 5. Research Projects Section
- Grid layout: 2 large feature cards (1 column mobile)
- Each card: Project title, duration, 4-5 key bullet points with technical details
- Subtle geometric border patterns (green)
- Tech tags at bottom (monospace font, green pill badges)

### 6. Freelancing Services Section
- 3-4 column grid (2 mobile, 3 tablet, 4 desktop)
- Each service: Icon placeholder, service name, brief 1-line description
- Hover: Green glow expansion effect
- Services: IoT Pentesting, Incident Handling, SIEM Operations, Log Analysis, Threat Hunting, DFIR, AD Attack Analysis, Network Traffic Analysis, Reverse Engineering

### 7. Technical Skills Section
- Four categories in grid: Programming Languages, Operating Systems, Cybersecurity Tools, DevOps Tools
- Each category: Header + pill badges for skills
- Pill design: Black background, green border, green text, monospace font
- Wrap behavior for skill badges

### 8. Contact Section
- Centered form (max-w-2xl)
- Fields: Name, Email, Subject, Message (textarea)
- Form styling: Black inputs with green borders, green focus glow
- Submit button: Solid green with black text, hover: inverse with glow
- Note under form: "Email integration ready - API setup pending"
- Include email/phone/LinkedIn info above/beside form

## Component Library

**Cards:**
- Background: #0a0a0a with 1px green border
- Border radius: rounded-lg (8px)
- Hover: box-shadow with green glow (0 0 20px rgba(0,255,0,0.3))

**Buttons:**
- Primary: Green background (#00ff00), black text, bold
- Hover: Slight scale (scale-105), enhanced glow
- Glass effect on buttons over 3D background: backdrop-blur-md

**Navigation (Fixed Top):**
- Transparent background with backdrop-blur
- Green underline on active section
- Smooth scroll to sections on click
- Mobile: Hamburger menu with slide-in drawer (black bg, green accents)

**Form Inputs:**
- Black background, green border (1px)
- Focus state: thicker green border + outer glow
- Placeholder text: muted green (#00cc0080)

## Images
**No images required.** The 3D particle canvas provides all visual interest. The design relies on geometric patterns, glowing green accents, and Three.js animations for visual impact.

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked timeline, reduced particles)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (full multi-column layouts, maximum particle effects)

## Accessibility
- Ensure 4.5:1 contrast ratio (green on black meets this)
- Keyboard navigation for all interactive elements
- ARIA labels on navigation and form elements
- Skip-to-content link
- Reduced motion support: disable 3D animations if prefers-reduced-motion

**Key Design Principle:** Futuristic, technical, and professional. Every element reinforces cybersecurity expertise through precise geometric design, monospace typography, and strategic neon green accents against deep black.