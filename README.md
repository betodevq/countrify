# countrify
![image](https://github.com/betodevq/countrify/assets/37468432/57715802-8cd3-4de4-ad9c-76edff11973a)

## Project Overview

This project is a simple application built with Next.js. It includes a root page that displays a map using the React Leaflet component and a `CountryInfo` component. On the initial load, it fetches a list of countries to display on the map. When you select a country on the map, it fetches detailed country information from a GraphQL API. If the GraphQL endpoint fails, it prints the error; otherwise, it displays the country information.

For a detailed technical overview, contact me :)

## Getting Started

1. Create a `.env.local` file in the root folder of the project and add the following values:

```env
NEXT_PUBLIC_GRAPHQL_API_URL=https://countries.trevorblades.com/
```
2. Run the following command to install project dependencies:
```
npm install
```
3. Start the development server by running the following command:
```
npm run dev
```

The application will be accessible at http://localhost:3000 in your browser.

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework.
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework.
- [Apollo Client](https://www.apollographql.com/docs/react/) - Library for consuming GraphQL APIs.
- [React Leaflet](https://react-leaflet.js.org/) - A React wrapper for Leaflet, a JavaScript mapping library.
- [TypeScript](https://www.typescriptlang.org/) - typed javascript :).

## Project Structure

The project is organized into the following folders:

```
└── src/
    ├── assets/
    ├── components/
    ├── hooks/
    ├── lib/
    │   ├── services/
    │   └── types/
    ├── pages/
    │   └── api/
    └── styles/
```
