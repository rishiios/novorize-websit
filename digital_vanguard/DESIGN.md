---
name: Digital Vanguard
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#ccc3d8'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d2bbff'
  primary: '#d2bbff'
  on-primary: '#3f008e'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#732ee4'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#656767'
  on-tertiary-container: '#e5e6e6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
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
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-xs: 4px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

The brand personality is defined by technical precision, high-performance authority, and a "developer-adjacent" sophistication. It targets high-growth startups and enterprise-level tech firms that value speed, clarity, and cutting-edge aesthetics. The emotional response should be one of trust in modern engineering—cool, focused, and exceptionally polished.

The design style is a hybrid of **Minimalism** and **Glassmorphism**, leaning heavily into the "Dark Mode" aesthetic popularized by Linear. It utilizes deep, dark surfaces to allow electric accents to pop, creating a sense of depth through translucent layers, vibrant background blurs, and premium gradients rather than traditional skeuomorphism. This is a system built for digital interfaces where data and motion are the primary storytellers.

## Colors

The palette is anchored by a sophisticated deep-space foundation. The base background is a near-black navy (#0A0A0B), with secondary surfaces rising to a slightly lighter slate (#121214) to create subtle hierarchy. 

**Electric Violet (#7C3AED)** serves as the primary action color, used for high-intent interactions and brand highlights. **Electric Blue (#3B82F6)** acts as a secondary accent, primarily for data visualization, secondary actions, and cooling down the warmth of the violet. Text is kept at **Pure White (#FFFFFF)** for the highest possible contrast ratio, ensuring a razor-sharp editorial feel. Gradients should transition from Primary to Secondary to create a sense of kinetic energy.

## Typography

This design system utilizes **Inter** for its clinical precision and exceptional readability at all scales. The typography strategy emphasizes high-contrast hierarchy: large, bold headlines with tight letter-spacing for impact, contrasted against generous line-heights for body text to maintain "breathability" in dark layouts. 

The system uses a descending scale where headlines are aggressive and authoritative, while labels and data points are kept clean and utilitarian. For mobile devices, headlines downscale significantly to prevent awkward word-breaking while maintaining their bold weight.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for content density, centered within a fluid viewport. A 12-column grid is used for desktop (1280px max-width) with 24px gutters. 

Spacing is intentionally generous ("Large Spacing") to evoke a premium feel. We use a 4px baseline rhythm, but focus on large vertical stacks (80px+) between major sections to allow the glassmorphism and gradient effects to have visual room to breathe. On mobile, margins reduce to 20px, and the 12-column grid collapses into a single-column stack, prioritizing verticality and thumb-friendly touch targets.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows. Surfaces are stacked to create a clear "Z-axis":
1. **Background (#0A0A0B):** The infinite base.
2. **Surface (#121214):** Subtle containers for grouping related content.
3. **Glass Layers:** Translucent overlays (10-20% opacity white/gray) with a 20px-40px backdrop blur. 
4. **Interactive State:** Elements that are hovered or active utilize "Soft Glowing Shadows"—outer glows that use the primary (#7C3AED) or secondary (#3B82F6) colors with low opacity (15-25%) and high diffusion (30px+ blur).

Border treatments are critical: use 1px "ghost borders" (semi-transparent white) to define shapes without adding visual weight.

## Shapes

The shape language is consistently **Rounded**, striking a balance between technical rigidity and modern friendliness. A standard radius of 0.5rem (8px) is applied to small components like buttons and inputs. Large cards and dashboard containers use "rounded-lg" (16px) or "rounded-xl" (24px) to create a soft, premium feel. 

Team profile cards are an exception, utilizing **Circular** crops (100% radius) to contrast against the mostly rectangular grid and add a human element to the technical aesthetic.

## Components

### Navbar
The navbar is a sticky glassmorphism element. It features a high backdrop-blur (30px), a subtle 1px bottom border, and sits at the top of the viewport. Links use `label-md` with subtle transitions from gray to white on hover.

### Buttons
Primary buttons use a vivid gradient (Primary to Secondary) with white text. Secondary buttons are "Ghost" style—transparent backgrounds with a 1px white or primary border. Both feature 300ms ease-in-out transitions on hover, increasing the glow intensity.

### Interactive Cards
Cards are the hero of this system. They utilize a deep slate background (#121214) and feature **gradient borders**. This is achieved using a dual-layer approach where the border is a 1px gradient stroke that glows more brightly when the card is hovered.

### Team Profile Cards
Clean, circular images with a subtle 2px white or primary-colored ring. Names use `headline-md` and titles use `label-sm` with 60% opacity white.

### Analytics Visuals
Dashboards should use the secondary blue for line graphs and primary violet for highlights. Grids should be minimal, using #FFFFFF at 5-10% opacity. Data points should have a "glow" effect, appearing as small light sources on the dark UI.