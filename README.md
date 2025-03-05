# Web3 Education Platform

A modern web application for teaching Web3 and blockchain development, with integrated payment processing.

## Features

- Modern, responsive design
- Subscription-based content access
- Secure payment processing with Stripe
- Course management system
- User authentication

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with the following variables:
```
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Main application pages and layouts
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and configurations
- `/public` - Static assets

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Stripe Payment Processing
- React 18

## License

MIT 