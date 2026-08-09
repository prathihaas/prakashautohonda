/** @type {import('tailwindcss').Config} */
// Brand tokens mirror src/styles/tokens.css.
// Source of truth: computed styles on honda2wheelersindia.com (Aug 2026).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        honda: {
          red: '#CC0000',
          redDeep: '#A30000',
          redTint: '#FBEAEA',
        },
        paper: '#F7F7F7',
        card: '#FFFFFF',
        ink: '#000000',
        ink2: '#333333',
        body: '#707070',
        muted: '#969696',
        rule: '#D2D2D2',
        ruleSoft: '#E6E6E6',
        wa: '#25D366',
        waDeep: '#1DA851',

        // Tailwind's red-* is NOT Honda red. Remapping the scale means any
        // page still using `red-600` renders the correct brand value.
        red: {
          50: '#FBEAEA',
          100: '#F6D4D4',
          200: '#EFAEAE',
          300: '#E58080',
          400: '#DA4A4A',
          500: '#CC0000',
          600: '#CC0000',
          700: '#A30000',
          800: '#7A0000',
          900: '#520000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        noto: ['Noto Sans Telugu', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        // Honda's measured scale: 28px pill on buttons, 12px on panels.
        none: '0px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '12px',
        '2xl': '12px',
        '3xl': '16px',
        pill: '28px',
        full: '999px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        in: 'cubic-bezier(0.5, 0, 0.9, 0.4)',
        'in-out': 'cubic-bezier(0.6, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
