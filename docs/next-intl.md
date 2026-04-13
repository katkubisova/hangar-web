# Next-intl Guide

This guide explains how to use internationalization (i18n) with next-intl in this project.

## Configuration

**Supported locales:** `cs` (Czech, default), `en` (English)

**Key files:**
- `src/i18n/routing.ts` - Locale configuration
- `src/i18n/request.ts` - Request-level configuration
- `src/i18n/navigation.ts` - Localized navigation utilities
- `messages/*.json` - Translation files (one per locale)

## Adding Translations

1. Add translation key to both locale files:
   ```json
   // messages/cs.json
   {
     "MyComponent": {
       "title": "Nadpis",
       "description": "Popis"
     }
   }
   ```

   ```json
   // messages/en.json
   {
     "MyComponent": {
       "title": "Title",
       "description": "Description"
     }
   }
   ```

## Server Components

Use `getTranslations()` and `setRequestLocale()`:

```tsx
import { getTranslations, setRequestLocale } from "next-intl/server"

interface Props {
  params: Promise<{ locale: string }>
}

export default async function MyComponent({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  
  const t = await getTranslations("MyComponent")
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  )
}
```

## Client Components

Use `useTranslations()` hook:

```tsx
"use client"

import { useTranslations } from "next-intl"

export function MyClientComponent() {
  const t = useTranslations("MyComponent")
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  )
}
```

Note: Client components must be wrapped in `NextIntlClientProvider` (already set up in `src/app/[locale]/layout.tsx`).

## Formatters

Use `useFormatter()` hook for dates, numbers, currencies, and lists:

```tsx
"use client"

import { useFormatter } from "next-intl"

export function PriceDisplay() {
  const format = useFormatter()
  const now = new Date()
  
  return (
    <div>
      {/* Date/time formatting */}
      <p>{format.dateTime(now, { year: "numeric", month: "short", day: "numeric" })}</p>
      {/* Output: "Mar 16, 2026" */}
      
      {/* Relative time */}
      <p>{format.relativeTime(now)}</p>
      {/* Output: "now" or "5 minutes ago" */}
      
      {/* Currency */}
      <p>{format.number(499.9, { style: "currency", currency: "CZK" })}</p>
      {/* Output: "Kč 499.90" */}
      
      {/* Percentage */}
      <p>{format.number(0.857, { style: "percent" })}</p>
      {/* Output: "86%" */}
      
      {/* List formatting */}
      <p>{format.list(["HTML", "CSS", "JavaScript"], { style: "long", type: "conjunction" })}</p>
      {/* Output: "HTML, CSS, and JavaScript" */}
    </div>
  )
}
```

### Global Formats (Optional)

Define shared formats in `src/i18n/request.ts`:

```ts
export default getRequestConfig(async ({ requestLocale }) => {
  // ...existing code...
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    formats: {
      dateTime: {
        short: { day: "numeric", month: "short", year: "numeric" },
      },
      number: {
        price: { style: "currency", currency: "CZK" },
      },
    },
  }
})
```

Then use by name:

```tsx
format.dateTime(now, "short")
format.number(499.9, "price")
```

## Localized Navigation

Use navigation utilities from `src/i18n/navigation.ts`:

```tsx
import { Link, useRouter } from "@/i18n/navigation"

// Localized link (locale prefix added automatically)
<Link href="/about">About</Link>

// Programmatic navigation
const router = useRouter()
router.push("/dashboard")
```

Available exports: `Link`, `useRouter`, `usePathname`, `redirect`, `getPathname`

## Adding a New Locale

1. Add locale to `src/i18n/routing.ts`:
   ```ts
   export const routing = defineRouting({
     locales: ["cs", "en", "de"], // Added "de"
     defaultLocale: "cs",
   })
   ```

2. Create translation file:
   ```bash
   touch messages/de.json
   ```

3. Add translations to `messages/de.json`

## Project Structure

```
src/
  app/
    [locale]/           # Locale-based routing
      layout.tsx        # NextIntlClientProvider setup
      page.tsx          # Example usage
  i18n/
    routing.ts          # Locale configuration
    request.ts          # Request configuration
    navigation.ts       # Navigation utilities
messages/
  cs.json              # Czech translations
  en.json              # English translations
next.config.ts          # next-intl plugin setup
```

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [next-intl GitHub](https://github.com/amannn/next-intl)