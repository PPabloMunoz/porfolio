# Design — Pablo Muñoz Portfolio

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
atmospheric (dark terminal register — Technical mood, keyboard-first dev audience)

## Macrostructure family
- Marketing pages (home es/en): Portfolio Grid (18) — work is the product. Hero as H2 Split diptych (7/5, hairline divider), skills as F3 Tabular spec sheet, projects as uniform code-led grid (F6 adapted, no thumbnails).
- Content pages (404): same system, typography only. No enrichment, no grid.

## Theme
- `--color-paper`   oklch(16% 0.008 200)
- `--color-paper-2` oklch(20% 0.010 200)
- `--color-paper-3` oklch(24% 0.010 200)
- `--color-ink`     oklch(94% 0.008 200)
- `--color-ink-2`   oklch(72% 0.010 200)
- `--color-rule`    oklch(30% 0.010 200)
- `--color-accent`  oklch(78% 0.140 195)
- `--color-accent-ink` oklch(20% 0.030 200)
- `--color-focus`   oklch(78% 0.140 195)

Single cyan accent, ≤3% per viewport. Neutrals tinted toward anchor hue 200. No gradients, no glow shadows on dark.

## Typography
- Display: JetBrains Mono, weight 700, style normal
- Body:    JetBrains Mono, weight 400
- Mono:    JetBrains Mono, weight 400/500 (same family — terminal single-font IS the design)
- Display tracking: -0.02em
- Type scale anchor: --text-display = clamp(2.75rem, 5vw + 1rem, 4rem); ratio 1.25
- Headlines always roman. Italic only inside running body copy.
- Tabular numbers on skills + project meta.

## Spacing
4-point named scale. Values live in `tokens.css`. Pages must use named
tokens (`var(--space-md)`), never raw values.

## Motion
- Easings: --ease-out cubic-bezier(0.16, 1, 0.3, 1), --ease-in cubic-bezier(0.7, 0, 0.84, 0), --ease-in-out cubic-bezier(0.65, 0, 0.35, 1)
- Reveal pattern: fade only, one orchestrated entrance on load (stagger ≤300ms). No scroll-triggered fade-up on every section.
- Reduced-motion fallback: opacity-only, ≤150ms.

## Microinteractions stance
- Silent success (copy-email toast only on action, no celebration)
- Hover delay 800ms · focus delay 0ms
- One signal per element: colour shift OR underline thickening, never lift+shadow+scale
- Focus rings appear instantly, ≥3:1 contrast, never animated

## CTA voice
- Primary: C3 Typographic link — word + arrow + 1px underline (`GitHub ↗`, `Email ⧉`). No fill, no pill.
- Secondary: C1 Outlined chip, rectangular, compact — lang flags + tech tags only.

## Per-page allowances
- Marketing pages MAY use Tier-A CSS art only (caret blink, rule breaks). No photography, no Lottie, no generated stills.
- Content pages (404): typography only.
- N8 caret blink (`▮`) allowed ONLY in nav. Never elsewhere.

## What pages MUST share
- The wordmark (`> pablo` prompt + name).
- The cyan accent and its placement (prompt glyph, active flag, one hover state at a time).
- JetBrains Mono everywhere.
- CTA voice (C3 links, C1 chips for tags).
- Section heading rhythm: `$ <label>` prompt line, then roman display heading stacked underneath in the same column. No tag-left/heading-right two-column heads. Zero decorative eyebrows.

## What pages MAY differ on
- Hero proof column (bio meta table on home; nothing on 404).
- Skills density (3-row spec sheet on home; absent on 404).
- Project grid count (3 + 1 incoming slot on home).

## Exports

### tokens.css
```css
:root {
  --color-paper:      oklch(16% 0.008 200);
  --color-paper-2:    oklch(20% 0.010 200);
  --color-paper-3:    oklch(24% 0.010 200);
  --color-ink:        oklch(94% 0.008 200);
  --color-ink-2:      oklch(72% 0.010 200);
  --color-rule:       oklch(30% 0.010 200);
  --color-accent:     oklch(78% 0.140 195);
  --color-accent-ink: oklch(20% 0.030 200);
  --color-focus:      oklch(78% 0.140 195);

  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body:    "JetBrains Mono", ui-monospace, monospace;
  --font-outlier: "JetBrains Mono", ui-monospace, monospace;

  --space-3xs: 0.125rem; --space-2xs: 0.25rem; --space-xs: 0.5rem;
  --space-sm:  0.75rem;  --space-md: 1rem;     --space-lg: 1.5rem;
  --space-xl:  2.5rem;   --space-2xl: 4rem;    --space-3xl: 6rem;
  --space-4xl: 9rem;

  --text-xs: 0.75rem;  --text-sm: 0.875rem; --text-md: 1rem;
  --text-lg: 1.25rem; --text-xl: 1.5625rem;  --text-2xl: 1.9531rem;
  --text-display: clamp(2.75rem, 5vw + 1rem, 4rem);

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-micro: 120ms; --dur-short: 220ms; --dur-long: 420ms;
  --rule-hair: 1px;
  --radius-card: 2px; --radius-pill: 2px; --radius-input: 2px;

  --z-base: 1; --z-raised: 10; --z-dropdown: 100;
  --z-sticky: 200; --z-modal: 400; --z-toast: 500; --z-tooltip: 600;
}
```

### Tailwind v4 `@theme`
```css
@theme {
  --color-paper:   oklch(16% 0.008 200);
  --color-paper-2: oklch(20% 0.010 200);
  --color-ink:     oklch(94% 0.008 200);
  --color-ink-2:   oklch(72% 0.010 200);
  --color-accent:  oklch(78% 0.140 195);
  --font-display:  "JetBrains Mono", ui-monospace, monospace;
  --font-body:     "JetBrains Mono", ui-monospace, monospace;
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`
```json
{
  "color": {
    "paper":  { "$value": "oklch(16% 0.008 200)", "$type": "color" },
    "paper-2":{ "$value": "oklch(20% 0.010 200)", "$type": "color" },
    "ink":    { "$value": "oklch(94% 0.008 200)", "$type": "color" },
    "ink-2":  { "$value": "oklch(72% 0.010 200)", "$type": "color" },
    "accent": { "$value": "oklch(78% 0.140 195)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "JetBrains Mono", "$type": "fontFamily" },
    "body":    { "$value": "JetBrains Mono", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1rem", "$type": "dimension" },
    "lg": { "$value": "1.5rem", "$type": "dimension" },
    "xl": { "$value": "2.5rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables
```css
:root {
  --background:        16% 0.008 200;
  --foreground:        94% 0.008 200;
  --primary:           78% 0.140 195;
  --primary-foreground: 20% 0.030 200;
  --muted:             30% 0.010 200;
  --muted-foreground:  72% 0.010 200;
  --border:            30% 0.010 200;
  --input:             30% 0.010 200;
  --ring:              78% 0.140 195;
  --radius:            2px;
}
```
