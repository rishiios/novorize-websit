---
name: Premium Agency Performance System
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#191b21'
  surface-container: '#1d1f25'
  surface-container-high: '#282a30'
  surface-container-highest: '#33353b'
  on-surface: '#e2e2ea'
  on-surface-variant: '#cec2d5'
  inverse-surface: '#e2e2ea'
  inverse-on-surface: '#2e3036'
  outline: '#978d9e'
  outline-variant: '#4c4453'
  surface-tint: '#dbb8ff'
  primary: '#dbb8ff'
  on-primary: '#480082'
  primary-container: '#7a38bf'
  on-primary-container: '#e6cbff'
  inverse-primary: '#7c3bc1'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#7fdd55'
  on-tertiary: '#0f3900'
  tertiary-container: '#246a00'
  on-tertiary-container: '#8dec62'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#efdbff'
  primary-fixed-dim: '#dbb8ff'
  on-primary-fixed: '#2b0052'
  on-primary-fixed-variant: '#631ba8'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#9afa6e'
  tertiary-fixed-dim: '#7fdd55'
  on-tertiary-fixed: '#062100'
  on-tertiary-fixed-variant: '#1a5200'
  background: '#111319'
  on-background: '#e2e2ea'
  surface-variant: '#33353b'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
This design system is engineered for a high-growth Indian agency market, blending the technical precision of global SaaS leaders like Linear with the vibrant, high-energy expectations of performance marketing. The aesthetic is "Investor-Quality Dark Mode"—sophisticated, deep, and authoritative.

The style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes a structured, utilitarian layout to convey trust, while employing frosted surfaces and radiant light leaks to evoke a sense of futuristic innovation. The visual narrative focuses on "clarity at scale," ensuring that complex lead generation data and CRM metrics remain legible and actionable through high-contrast labeling and intentional whitespace.

## Colors
The palette is rooted in a deep navy base (`#03152D`), providing a more premium and "inky" feel than pure black. 

- **Primary (Electric Violet):** Used for primary actions, brand moments, and key performance indicators. It represents ambition and creativity.
- **Secondary (Cyan Accent):** Introduced as a high-contrast companion to the violet, used for data visualizations, secondary highlights, and "success" states with a technical edge.
- **Tertiary (Growth Green):** Retained from the brand profile specifically for financial metrics and positive performance trends.
- **Neutral:** A cool-toned off-white (`#EEEEF6`) used for text and subtle borders to maintain high readability against the dark background without the harshness of pure white.

## Typography
The typography strategy employs **Montserrat** for marketing-heavy headlines to provide a bold, geometric, and confident presence. This is contrasted with **Inter** for all UI, body copy, and data-heavy interfaces.

Inter is chosen for its exceptional legibility in SaaS environments and its neutral, "systematic" feel. Labels use a slightly heavier weight and increased letter spacing to ensure they stand out as navigational anchors within complex dashboards. All headlines above 32px scale down for mobile devices to maintain visual hierarchy without breaking layouts.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for desktop and a **4-column fluid grid** for mobile. The rhythm is governed by a strict 8px linear scale, ensuring all components align to a consistent vertical and horizontal beat.

Margins are generous to reflect a premium, "breathable" aesthetic. Dashboard layouts should prioritize a fixed left-hand sidebar for CRM navigation with a fluid content area for data visualization. White-space is treated as a first-class citizen—used to group related metrics and separate distinct performance sections without the need for heavy dividers.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Tonal Layering**. Instead of traditional shadows, surfaces use:

1.  **Backdrop Blurs:** High-level containers (modals, navigation bars) use a 20px blur with a 10% white tint.
2.  **Inner Glows:** Subtle 1px top-borders (linear-gradient to transparent) give cards a "lit from above" appearance.
3.  **Subtle Glowing Shadows:** For primary buttons and active cards, a diffused shadow tinted with the primary violet (`#7A38BF`) at 15% opacity creates a sense of energy.
4.  **Stroke-only Separation:** Cards on the base background use a low-opacity border (`rgba(238, 238, 246, 0.1)`) rather than heavy shadows to maintain a clean, flat-modern profile.

## Shapes
A "Rounded" shape language (level 2) is applied to balance professional structure with approachable modernity. 

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Large Containers:** CRM cards and dashboard widgets use a 1rem (16px) radius to create a distinct visual frame.
- **Interactive States:** Hovering over list items or navigational links triggers a soft 4px rounded background highlight.
- **Form Inputs:** Must maintain sharp enough corners to feel "enterprise-ready," avoiding fully pill-shaped styles except for small status tags.

## Components
### Buttons
- **Primary:** Solid Electric Violet gradient. High-contrast white text. Subtle violet outer glow on hover.
- **Secondary:** Transparent background with a 1px Cyan stroke. Cyan text.
- **Ghost:** Minimal padding, Inter Bold, used for utility actions.

### Input Fields
- Dark-themed inputs using a darker shade than the background (`#020E1E`). 
- Focus state: 1px border glow in Cyan.
- Labels: Always positioned above the field in `label-md` style for maximum clarity in lead-gen forms.

### Cards & Widgets
- Background: Glassmorphic surface or a slightly lighter navy than the base.
- Content: Generous 24px internal padding.
- Headers: Use `label-md` for section titles to create a "Pro" dashboard aesthetic.

### Data Visualization & Progress
- Gradients: Use a linear transition from Cyan to Violet for progress bars and chart lines.
- Tooltips: High-contrast (Neutral white background) with dark navy text to pop against the dark UI layers.

### CRM Specifics
- **Status Chips:** Small, pill-shaped with low-opacity background fills (e.g., 10% green fill with 100% green text) for lead status tracking.
- **Avatars:** Circular, with a 2px border matching the background to "cut" into the header space cleanly.