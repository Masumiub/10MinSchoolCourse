# 📘 IELTS Course Web App

A responsive and dynamic web application designed to showcase IELTS preparation courses. Built with Next.js 15 (App Router), Tailwind CSS, and integrated with 10 Minute School's public API, the project delivers a smooth user experience with client-side routing and optimized performance.


Live Link: https://course-by-10min-school-f9czfkkbm-masumiubs-projects.vercel.app/


## 📄 Project Description

This project displays IELTS course information retrieved from an external API. Users can explore available courses, see details, and switch between English and Bangla views. It demonstrates key features of a real-world educational platform using the latest web technologies.


## ⚙️ Features

- Home page with IELTS course preview
- Dynamic `/ielts` route for full course details
- Language switch dropdown (EN / BN)
- API data fetching 
- Responsive design with Tailwind CSS
- Built with Next.js App Router (`app/` directory)


## 🚀 Technologies Used

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- 10 Minute School API



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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


# How to Run Locally:
- git clone https://github.com/Masumiub/10MinSchoolCourse.git
- cd ielts-course-app
- npm install
- npm run dev
- npm run build(Build for production)

# 📁 Project Structure

- app/
-  ├─ page.jsx          # Home page
- ├─ ielts/
-      ├─ page.jsx      # IELTS course page
- components/
-  ├─ NavBar.jsx        # Navigation with language selector
- public/
- styles/



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
