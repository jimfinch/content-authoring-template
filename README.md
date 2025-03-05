This is a [Next.js](https://nextjs.org) and Sanity.io project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and tailwind.

## Project features:

Sanity

- Sanity studio is an embedded implementation
- Sanity presentation plugin has been added for live/draft previews and visual editing of content
- Added usage module on the top of content forms to help users know where the content is being used across the application
- Sanity media plugin has been added for asset management

Next

- App router
- Tailwind
- SEO titles and descriptions

SiteSettings

- title
- description
- logo (if using one)
- a page to be used as the homepage
- Primary navigation
- Footer navigation

Menus

- Create a set of links of any document type (pages, artciles, projects, hardcoded internal or external)

Authors
Categories

Projects

- Basic project content starter with title, hero image, portable text body, categories/tags, and related content builder

Articles

- Basic article content starter with title, hero image, portable text body, categories/tags, and related content builder

Pages

- Page builder for landing pages that is used to make the homepage from the sample data

[React Motion](https://motion.dev/) has been implemented for page transitions and component animations when the elements enter and leave the viewport

## Getting Started

First, run the development server:

```bash
npm install
```

Then you need to create an **.env.local** file in the root of the project with the following values populated from your sanity studio:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="the-project-id"
NEXT_PUBLIC_SANITY_DATASET="the-dataset-to-target"
NEXT_PUBLIC_SANITY_STUDIO_URL="sanity-studio-url"
SANITY_API_READ_TOKEN="read-token"
```

Using sanity cli you can upload the **production.tar.gz** dataset which has the sample data:

```bash
sanity dataset import [file-name] [the-dataset-to-target]
```

Then to run the project type

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:3000/studio](http://localhost:3000/studio) to use the Sanity embedded studio.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
