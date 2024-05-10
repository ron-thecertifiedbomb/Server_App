<br />
<div align="center">
  <a href="http://10.20.100.10:8181/WebApp/ConsumerWeb">
    <img src="public/stuff-logo.png" alt="Stuff" width="150">
  </a>

  <h3 align="center">Stuff - Consumer Web</h3>

  <p align="center">
    The Stuff E-Commerce Website - (Consumer) project aims to develop a modern and scalable e-commerce website.
    <br />
    <a href="http://10.20.100.10:8181/WebApp/ConsumerWeb">
        <strong>Read Documentation</strong>
    </a>
  </p>
</div>

## About The Project

This website will utilize the Next.js framework, a popular React-based technology, and will be hosted on Azure Web App Services. The project encompasses the entire development lifecycle, from initial setup to deployment and ongoing maintenance.

**Project Goals:**

- Create a feature-rich and responsive e-commerce website using Next.js.
- Next.js is a React framework known for building fast and dynamic web applications.
  Leverage Azure Web App Services for efficient and cost-effective hosting and deployment.
- Azure Web App Services provides a robust platform for hosting web applications with scalability options.
  Implement robust authentication and authorization mechanisms for user management.
- Ensure secure user authentication and authorization to protect user data and site functionality.
  Enable product catalog management with dynamic data loading and rendering.
- Implement a system for managing products with dynamic loading and rendering of product data.
  Implement a shopping cart system and integrate secure payment processing.
- Develop a shopping cart feature and integrate a secure payment gateway for seamless order processing.
- Develop a seamless and intuitive user experience, with smooth navigation and a visually appealing design.
- Focus on creating a user-friendly interface with intuitive navigation and an attractive design.
  Ensure high performance, security, and scalability of the application.
- Optimize the website for performance, implement security best practices, and plan for scalability.
  Implement automated testing and continuous integration (CI/CD) pipelines.
- Utilize CI/CD tools like GitLab pipeline to automate testing and deployment processes.
  Document the project thoroughly to facilitate future development and maintenance.
- Create comprehensive documentation for code, user guides, and maintenance instructions.
  Foster collaboration among team members through GitLab's version control and collaboration features.
- Utilize GitLab for version control, issue tracking, and project management to enhance collaboration.

**Project Phase:**

1. Planning and Setup: The phase where project requirements are defined, development environment is set up, and a project plan is created.
2. Frontend Development: Involves creating the user interface and client-side functionality of the application using technologies like HTML, CSS, and JavaScript frameworks (e.g., React).
3. Backend Development (Optional): If needed, this phase includes creating server-side functionality, databases, and APIs using technologies like Node.js, Express.js, and databases like MongoDB.
4. Authentication and Authorization: Implementation of user authentication (login) and authorization (permissions) to secure the application's features and data.
5. Product Catalog: Setting up and managing the product catalog, including dynamic data loading and rendering, to display the available products.
6. Shopping Cart and Checkout: Development of features that allow users to add items to their cart, review their selections, and proceed with secure payment processing.
7. Performance Optimization: The process of improving the application's speed, responsiveness, and efficiency, both on the frontend and backend.
8. Testing: Writing and executing tests, including unit tests, integration tests, and end-to-end tests, to ensure the application functions correctly.
9. CI/CD Pipeline: Setting up automated Continuous Integration (CI) and Continuous Deployment (CD) pipelines to automate testing and deployment processes.
10. Documentation: Creating comprehensive documentation for the project, including code documentation, user guides, and maintenance instructions.
11. Deployment: Deploying the application to a hosting environment (e.g., Azure Web App Services) to make it accessible to users.
12. Maintenance and Support: Providing ongoing maintenance, bug fixes, and support for the application to ensure its continued functionality and reliability.
13. Documentation: Creating comprehensive documentation for the project, including code documentation, user guides, and maintenance instructions, with documentation tasks managed in Jira.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)
- ![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## VSCode Extensions

- ESLint
- Prettier
- GitLens
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS Intellisense
- Live Server
- Rapid Api Client
- Debugger for Chrome

## Prettier Rules

```bash
module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  singleQuote: true,
  semi: true,
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "es5",
  endOfLine: "auto",
};
```

## ESLint Rules

```bash
module.exports = {
  root: true,
  extends: 'next',
  plugins: ['react', 'react-native', 'unused-imports', 'simple-import-sort'],
  rules: {
    'react-native/no-inline-styles': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    'eslint-comments/no-unlimited-disable': 'off',
  },
};
```

```
- Do not allow unused imports
- Do not allow unused variable
- Do not allow inline styles
- Proper imports sort *error but fixable*
  Order:
    - React related imports *react, react-native*
    - Internal packages *@|components*
    - Side imports *import script.ts*
    - Parent imports *../*
    - Other relative imports. *./ - same folder imports*
    - Styles imports *.css, .scss*
- Prettier rules
```

## Getting Started

This are the instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- NodeJS

### Installation

_Here's how you can run the app on your machine locally._

1. Clone the repo

   ```
   git clone http://10.20.100.10:8181/WebApp/ConsumerWeb
   ```

2. Install packages

   ```
   npm install
   ```

   ```
   yarn install
   ```

3. Edit Environment Variables .env

   ```
    HOST:
    PORT:
    API_KEY:
    ENVIRONMENT:
   ```

4. Run the application

   ```
   npm run dev
   ```

   ```
   yarn dev
   ```
