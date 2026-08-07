# RealSEO

A client management dashboard for an SEO agency. It lists clients in a sortable table, lets you add new ones through a validated form, and exports the list to CSV.

Built with Next.js (Pages Router), TypeScript, Material UI, and Prisma on PostgreSQL.

## Features

- **Client list** — server-rendered table of all clients, newest first, with responsive layout and a collapsible sidebar on mobile.
- **Add client** — form at `/new` with client-side validation (react-hook-form + valibot) and inline field-level feedback.
- **CSV export** — download the current client list as `clients-YYYY-MM-DD.csv`.
- **REST API** — `GET`/`POST /api/clients` backed by the same valibot schema used on the client.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (Pages Router), React 19, React Compiler enabled |
| Language | TypeScript (strict) |
| UI | Material UI v9 + Emotion, Tailwind CSS v4 via PostCSS |
| Forms | react-hook-form + valibot (`@hookform/resolvers`) |
| Database | PostgreSQL via Prisma 7 with the `@prisma/adapter-pg` driver adapter |
| Package manager | pnpm |

## Getting started

### Prerequisites

- Node.js 20+
- pnpm
- A PostgreSQL database

### Setup

```bash
pnpm install
```

Copy the environment template and fill in your database connection string:

```bash
cp .env.example .env
```

```env
DATABASE_URL=
```

Apply the migrations:

```bash
pnpm prisma migrate dev
```

Start the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Project structure

```
pages/
  _app.tsx              App shell — MUI theme, Navbar, Sidebar, Footer
  index.tsx             Client list (getServerSideProps) + CSV export
  new/index.tsx         Add-client form
  api/clients/index.ts  GET (list) and POST (create) clients
components/
  Navbar.tsx  Sidebar.tsx  Footer.tsx  DataTable.tsx
lib/prisma.ts           Prisma client singleton (pg pool + adapter)
utils/csvExport.ts      CSV serialization and browser download
prisma/
  schema.prisma         Client model
  migrations/           Migration history
```

The `@/*` path alias maps to the project root, so imports look like `@/components` and `@/lib/prisma`.

## Data model

A single `Client` model, mapped to the `clients` table:

| Field | Column | Type | Notes |
| --- | --- | --- | --- |
| `id` | `id` | `Int` | Primary key, autoincrement |
| `clientName` | `client_name` | `String` | Stored as `"First Last"` |
| `companyName` | `company_name` | `String?` | Optional |
| `address` | `address` | `String` | |
| `date` | `date` | `String` | Date of birth, as entered |
| `email` | `email` | `String` | |
| `cell` | `cell` | `String` | |
| `package` | `package` | `String?` | `basic`, `standard`, `premium`, or `enterprise` |
| `comments` | `comments` | `Text` | |
| `createdAt` | `created_at` | `DateTime` | Defaults to now |
| `updatedAt` | `updated_at` | `DateTime` | Auto-updated |

## API

### `GET /api/clients`

Returns all clients ordered by `createdAt` descending.

### `POST /api/clients`

Creates a client. `firstName` and `lastName` are joined into `clientName`, and `dateOfBirth` is stored in the `date` column.

```json
{
  "firstName": "Xion",
  "lastName": "Ashly",
  "address": "123 Main St",
  "dateOfBirth": "1990-01-01",
  "contactEmail": "xion@example.com",
  "contactCell": "+1 555 0100",
  "companyName": "Acme Inc",
  "package": "standard",
  "comments": "Referred by a partner"
}
```

Responds `201` with the created client, `400` with the first validation error, or `405` for other methods.

## Notes

- The sidebar links to Dashboard, Account Managers, Tasks, Sales Team, Vendors, and Settings, but only the Clients routes (`/` and `/new`) are implemented so far.
- The table's sort handler on the client list is a stub — it logs the column and does not reorder rows yet.
