---
name: Precision Enterprise Narrative
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#464555'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#005523'
  on-tertiary: '#ffffff'
  tertiary-container: '#007030'
  on-tertiary-container: '#63f889'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is built for high-velocity enterprise environments where clarity, speed, and reliability are paramount. The aesthetic merges **Minimalism** with **Modern Corporate** sensibilities, drawing inspiration from high-end developer tools and productivity suites.

The experience should feel:
- **Calm but Focused:** Heavy use of whitespace and structured layouts to reduce cognitive load.
- **High-Performance:** Interaction patterns that favor keyboard shortcuts, rapid navigation, and instant feedback.
- **Refined & Technical:** A "utility-first" beauty that relies on perfect alignment, subtle depth, and sophisticated typography rather than decorative flourishes.

The visual narrative is driven by "Utility Precision"—every pixel must serve a functional purpose. We utilize a layering system that mimics physical depth through subtle tonal shifts and soft shadows, ensuring the UI feels tangible and trustworthy.

## Colors

The color system is designed for high contrast and semantic clarity. The **Indigo Primary** acts as the main "action" color, while the **Cyan Accent** is reserved for highlighting secondary progress or collaborative indicators (like active cursors or presence).

### Neutral Palette
We utilize a **Zinc/Slate** scale. In light mode, use `Zinc-50` for backgrounds and `Zinc-200` for borders. In dark mode, the surface begins at `Zinc-950`, with elevated containers using `Zinc-900`.

### Semantic Application
- **Primary (#4F46E5):** Main CTAs, active states, and focus rings.
- **Success (#22C55E):** Completion states, positive growth, and "Open" statuses.
- **Warning (#F59E0B):** Pending actions or high-priority alerts.
- **Danger (#EF4444):** Destructive actions, errors, and "Blocked" statuses.

## Typography

This design system uses **Inter** for all primary interface elements to ensure maximum legibility and a neutral, professional tone. For technical metadata, code snippets, and small labels, **Geist** is introduced to provide a high-precision, monospaced feel that resonates with enterprise SaaS users.

- **Tracking:** Headlines use negative letter-spacing (-2%) to feel tighter and more "designed." Labels use slight positive tracking for readability at small sizes.
- **Hierarchy:** Use font weight rather than size to establish hierarchy in dense data views.
- **Accessibility:** Never go below 11px for labels. Body text defaults to 14px for standard density and 16px for content-heavy pages.

## Layout & Spacing

The system follows a strict **8px linear scale**. All dimensions, padding, and margins must be multiples of 8 (with 4px reserved for tight component internals like icon-to-text spacing).

### Grid Model
- **Desktop:** 12-column fluid grid. Max-width of 1440px for content areas. Sidebars are fixed at 240px or 280px.
- **Tablet:** 8-column fluid grid.
- **Mobile:** 4-column fluid grid with 16px side margins.

### Spacing Philosophy
Consistent use of the `md` (16px) unit for internal card padding and `lg` (24px) for section gaps creates a rhythm that feels balanced and spacious without sacrificing information density.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Ambient Shadows**. 

- **Level 0 (Background):** The lowest layer. Light mode: `#F9FAFB`. Dark mode: `#09090B`.
- **Level 1 (Card/Surface):** Raised slightly. Light mode: `#FFFFFF` with a 1px `Zinc-200` border. Dark mode: `#18181B` with a 1px `Zinc-800` border.
- **Level 2 (Popovers/Modals):** Floating elements. These utilize an "Ambient Shadow": a dual-stack shadow consisting of a 4px blur (low opacity) and a 16px blur (very low opacity) to simulate natural light.
- **Active States:** Subtle 1px inner borders (rings) are used for focus states to maintain a crisp edge without shifting the layout.

## Shapes

The shape language is sophisticated and approachable. We use **Rounded (0.5rem / 8px)** as the base for standard components like buttons and inputs. 

- **Containers:** Larger surfaces (cards, modals) use `rounded-lg` (16px) to create a distinct visual container.
- **Micro-elements:** Small chips, tags, and checkboxes use `rounded-sm` (4px).
- **Avatars:** Always circular to contrast against the geometric grid.

This mix of 8px and 16px radii ensures the UI feels modern and soft but maintains its professional structure.

## Components

### Buttons
- **Primary:** Solid Indigo background. Apply a very subtle top-down gradient (10% lighter at top) to give it a "pressed" tactile feel.
- **Secondary:** White/Transparent background with a 1px `Zinc-200` border. 
- **Interaction:** On hover, primary buttons should darken by 5%. On active (click), they scale to 98% to provide physical feedback.

### Inputs
- **Base:** 1px `Zinc-200` border with a 40px height.
- **Focus:** 1px Primary Indigo border with a 3px soft Indigo outer glow (20% opacity).
- **Label:** Use `label-md` (Geist) positioned 8px above the input field.

### Cards
Cards are the primary layout unit. They feature 1px borders and no shadow by default when on a background. When a card represents a clickable object, it gains a subtle shadow and moves 1px upward on hover.

### Chips & Tags
Used for status and categories. Use a "Soft" style: a low-opacity background of the semantic color (e.g., Success Green at 10% opacity) with high-contrast text of the same hue.

### Lists
Lists use 1px horizontal dividers. Interactive rows should have a `Zinc-50` hover state that spans the full width of the container.