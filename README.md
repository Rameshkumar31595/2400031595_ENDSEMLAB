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


To view the department page, open:
http://localhost:3000/department# College Department Info – Static Site Generation (SSG) using Next.js

This project is a **Next.js Static Site Generation (SSG)** implementation created for the End Semester Lab Examination.  
The objective was to:

- Create a **Next.js project**
- Build a **department information page**
- Display **department details, faculty names, and contact information**
- Use **getStaticProps()** for static data fetching at **build time**
- Ensure fast loading and proper rendering on different devices

This project fulfills all the required specifications.


## 📁 Project Structure

collegeinfo-next/
│
├── data/
│ └── department.js → Static department information
│
├── pages/
│ ├── _app.js → Loads global CSS (dark mode theme)
│ └── department.js → Main static page using getStaticProps()
│
├── app/
│ ├── layout.tsx → Default app router layout (unused for assignment)
│ └── page.tsx → Default homepage (Next.js starter screen)
│
├── public/
├── next.config.ts
├── package.json
└── tsconfig.json
