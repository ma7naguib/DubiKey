# DubiKey - Your Key to Dubai Real Estate

DubiKey is a comprehensive platform for Dubai real estate investors and brokers, featuring the DubiKey Score calculator for off-plan property analysis.

## Features

- **DubiKey Score Calculator**: Instant affordability assessment for off-plan properties
- **For Investors**: Expert insights and consultation services (coming soon)
- **For Brokers**: Training programs and courses (coming soon)

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database (Neon recommended)
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dubikey.git
cd dubikey
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment file:
```bash
cp .env.example .env
```

4. Fill in your environment variables in `.env`:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
DATABASE_URL=your_neon_database_url
```

5. Set up the database:
```bash
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
dubikey/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── calculator/      # DubiKey Score Calculator
│   │   ├── investors/       # For Investors section
│   │   ├── brokers/         # For Brokers section
│   │   └── ...
│   ├── components/          # React components
│   ├── lib/                 # Utility functions
│   └── types/               # TypeScript types
├── prisma/                  # Database schema
└── public/                  # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## License

© 2024 DubiKey. All rights reserved.
