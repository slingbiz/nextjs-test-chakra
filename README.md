# Example React App with [chakra-ui](https://github.com/chakra-ui/chakra-ui) and TypeScript

This repository is a **sample project for [Baloon.dev](https://baloon.dev)**.
The goal is to demonstrate how you can use Baloon with a real front-end repository to create Jira issues, make relevant code changes, and preview updates seamlessly.

We’re using a simple **Next.js + chakra-ui + TypeScript** app as the base project. You can try making changes via Baloon and see how it applies updates across the repo.

👉 Screenshot and workflow examples will be added soon.

## Deploy your own

Deploy this example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-chakra-ui).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui&project-name=with-chakra-ui&repository-name=with-chakra-ui)

## How to use

### Using `create-next-app`

You can bootstrap the example using:

```bash
npx create-next-app --example with-chakra-ui with-chakra-ui-app
```

```bash
yarn create next-app --example with-chakra-ui with-chakra-ui-app
```

```bash
pnpm create next-app --example with-chakra-ui with-chakra-ui-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

Chakra UI supports Gradients and RTL in `v1.1`. To enable RTL, [configure direction and swap](https://chakra-ui.com/docs/features/rtl-support).

For RTL apps, make sure to set `<Html lang="ar" dir="rtl">` inside `_document.ts`.
