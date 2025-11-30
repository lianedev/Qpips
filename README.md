Prop Firm Website – Next.js Project Documentation

This project is a prop firm website built with Next.js
, bootstrapped using create-next-app. The project demonstrates your ability to implement modern web development practices, including optimized fonts, routing, and deployment.



Features

--Next.js App Directory Structure: Uses the latest app routing (app/page.tsx) for fast rendering and scalability.

--Optimized Fonts: Uses next/font
 to load Geist
, ensuring quick page load and consistent typography.

--Responsive Design: Fully responsive layout for desktop, tablet, and mobile devices.

--Prop Firm Functionality: Placeholder pages and structure ready to handle:

--Account sign-up/login

--Funded account dashboards

--Trading challenge information

--Resource pages for traders




Getting Started

--Clone the repository and start the development server:

npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev


Open http://localhost:3000
 in your browser. The page will automatically update as you edit app/page.tsx or other components.

File Structure Highlights

app/ – Main app directory containing pages and components.

app/page.tsx – Main landing page. Modify this file to update the home page.

components/ – Optional folder for reusable UI components (e.g., navigation, footer, hero sections).

public/ – Static assets like images and icons.

styles/ – Tailwind or CSS files for styling components.

Learn More

To deepen your knowledge of Next.js and features used:

Next.js Documentation
 – Comprehensive guides and API reference.

Learn Next.js
 – Interactive tutorial for beginners.

Next.js GitHub Repository
 – Open-source Next.js codebase.

Deployment

The recommended deployment platform is Vercel
, the creators of Next.js:

vercel deploy


Refer to Next.js deployment documentation
 for more options.

Notes for This Challenge

This project was created as part of a prop firm website challenge.

Focus areas included:

Fast, responsive UI

Clean project structure

Scalable component-based architecture

Optimized performance with built-in Next.js features
