This is a [Next.js](https://nextjs.org) and [Sanity.io](https://www.sanity.io/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and tailwind.

<img width="1917" alt="Screenshot 2025-03-05 at 16 47 09" src="https://github.com/user-attachments/assets/e2e0f586-80c6-4bf0-b393-3dbd0f31882c" />

---

# Project features

### Sanity

- Sanity studio is an embedded implementation
- Sanity presentation plugin has been added for live/draft previews and visual editing of content
- Added usage module on the top of content forms to help users know where the content is being used across the application
- Sanity media plugin has been added for asset management

### Next

- App router
- Pages, Projects and Articles routes
- Tailwind CSS
- Fully responsive
- SEO titles and descriptions added to templates
- Typegen generate built in to dev command

### Site Settings

- title
- description
- logo (if using one)
- a page to be used as the homepage
- Primary navigation
- Footer navigation

### Menus

- Create a set of links of any document type (pages, articles, projects, hard-coded internal or external)

### Authors

- Create authors

### Categories

- Create categories/tags

### Projects

- Basic project content starter with title, hero image, portable text body, categories/tags, and related content builder

### Articles

- Basic article content starter with title, hero image, portable text body, categories/tags, and related content builder

### Pages

- Page builder for landing pages that is used to make the homepage from the sample data

[React Motion](https://motion.dev/) has been implemented for page transitions and component animations when the elements enter and leave the viewport

---

# Quickstart Guide: Sanity CLI

Get up and running quickly by initializing this template locally with one simple command:

```bash
npm create sanity@latest -- --template jimfinch/content-authoring-template
```

## Import Sample Data

Add sample content easily by importing the provided `production.tar.gz` dataset:

```bash
npx sanity dataset import production.tar.gz
```

## Run Your Project

Launch the project locally with:

```bash
npm run dev
```

Now, explore your project:

- **Website Preview:** [http://localhost:3000](http://localhost:3000)
- **Sanity Studio (Embedded):** [http://localhost:3000/studio](http://localhost:3000/studio)

---

<img width="1916" alt="Screenshot 2025-03-05 at 16 47 24" src="https://github.com/user-attachments/assets/77b5f402-461f-4977-8b82-1c3b13e1bcdc" />

<img width="1916![Uploading Screenshot 2025-03-05 at 16.47.24.png…]()" alt="Screenshot 2025-03-05 at 16 48 44" src="https://github.com/user-attachments/assets/1fb651d2-17ef-4e74-9aa4-9532501858c8" />

<img width="1913" alt="Screenshot 2025-03-05 at 16 49 28" src="https://github.com/user-attachments/assets/2dfebec2-74e5-42f6-b6f4-6ada717b2e0f" />

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
