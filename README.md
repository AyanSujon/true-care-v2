# True Care

**Baby Sitting & Elderly Care Service Platform**

True Care is a web application that allows users to find and hire trusted caretakers for children, elderly, and sick family members. The platform makes caregiving **easy, secure, and accessible**, with features like dynamic booking, cost calculation, and user dashboards.



---

## 🔐 Access Credentials (Demo/Testing)

To explore the admin and user features of the dashboard, you can use the following credentials:

### **Admin / User Dashboard Login**
* **Email:** `user1@gmail.com`
* **Password:** `@User1`

---
---

## Table of Contents

* [Features](#features)
* [Routes](#routes)
* [Setup & Installation](#setup--installation)
* [Feature Explanation](#feature-explanation)
* [Design & Branding](#design--branding)
* [Technologies Used](#technologies-used)

---

## Features

* **Dashboard:** Separate views for Admin and Users
* **Booking Invoice Email Sent:** After successfully booking a service, the user will receive a confirmation invoice email. 
* **Service Bookings:** Book caretakers for different services
* **My Bookings Page:** Track all user bookings with status updates
* **Authentication:** NextAuth implemented with session proxy
* **Cost Calculation:** Automatic calculation based on duration × service charge
* **Dynamic Address Input:** Users can select Division, District, City, Area, and enter custom address
* **Responsive Design:** Works on desktop, tablet, and mobile
* **Service Overview & Detail Pages:** Baby care, Elderly care, Sick care

---

## Routes

### Public Pages

* `/` – Homepage
* `/login` – Login Page
* `/register` – Registration Page
* `/about` – About Us
* `/become-a-caregiver` – Apply as a caregiver
* `/booking/:service_id` – Booking Page
* `/caretakers` – Caretaker Overview
* `/contact` – Contact Page
* `/cost-calculator` – Calculate service cost
* `/how-it-works` – Guide for users
* `/services` – Services Overview
* `/services/baby-care` – Baby Care details
* `/services/elderly-care` – Elderly Care details
* `/services/sick-people-care` – Sick People Care details

### Private / Authenticated Pages

* `/dashboard` – User/Admin dashboard overview
* `/my-bookings` – Track user bookings, cancel or view details

---

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/AyanSujon/true-care.git
```

2. Navigate to the project directory:

```bash
cd true-care
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and configure:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Feature Explanation

* **Dashboard:** Provides separate, user-friendly views for Admin and Users to manage and track bookings.
* **Service Bookings:** Users can select duration, location, and service type; bookings are saved with dynamic cost calculation.
* **My Bookings Page:** Displays all bookings with details like status (Pending / Confirmed / Completed / Cancelled) and allows cancellation.
* **NextAuth Authentication:** Supports email/password and Google login with session proxy handling.
* **Cost Calculation:** Calculates total cost in real-time based on selected duration and service charges.
* **Dynamic Address Input:** Users can choose Division → District → City → Area, or enter a custom address for precise location.
* **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
* **Service Overview & Detail Pages:** Each service (Baby care, Elderly care, Sick care) has detailed information and a booking option.

---

## Design & Branding

* **Primary Color:** #ff0099
* **Secondary Color:** #ff0064
* **Accent Color:** #6632ae
* **Neutral Color:** #323940
* **Heading Font:** Sniglet
* **Paragraph Font:** Kumbh Sans

**Menu Items:**

1. Home
2. Services (Dropdown: All Services, Baby Care, Elderly Care, Sick People Care)
3. How It Works
4. About Us
5. Contact

**Call to Action Buttons:** Login / Book Now

---

## Technologies Used

* **Frontend:** Next.js, React, Tailwind CSS, Framer Motion, Radix UI Components
* **Authentication:** NextAuth.js
* **Form Handling & Validation:** React Hook Form, Zod, @hookform/resolvers
* **Database:** MongoDB
* **Styling & Animations:** Tailwind CSS, Tailwind Merge, Tw-Animate-CSS, Sonner
* **Utilities:** clsx, class-variance-authority, date-fns
* **Icons:** Lucide React
* **Alerts & Notifications:** SweetAlert2
* **Server-Side Security:** bcrypt, bcryptjs
* **TypeScript Support:** TypeScript, @types/react, @types/node
* **Linting:** ESLint, eslint-config-next















....


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
