# Prerequisite Document for Setting Up Next.js and Prisma with MongoDB on Windows and Mac

This document provides step-by-step instructions for setting up Next.js and Prisma with MongoDB on both Windows and Mac operating systems. Please follow these instructions carefully to ensure a successful setup.

## Table of Contents
- [Prerequisite Document for Setting Up Next.js and Prisma with MongoDB on Windows and Mac](#prerequisite-document-for-setting-up-nextjs-and-prisma-with-mongodb-on-windows-and-mac)
  - [Table of Contents](#table-of-contents)
    - [1. Install Node.js ](#1-install-nodejs-)
    - [2. Install MongoDB ](#2-install-mongodb-)
    - [3. Clone the GitHub Project ](#3-clone-the-github-project-)
    - [4. Install Dependencies ](#4-install-dependencies-)
    - [5. Configure Prisma ](#5-configure-prisma-)
    - [6. Start the Development Server ](#6-start-the-development-server-)
  - [Getting Started](#getting-started)

### 1. Install Node.js <a name="install-nodejs"></a>
- Visit the Node.js official website: [https://nodejs.org/en](https://nodejs.org/en)
- Download the LTS (Long Term Support) version suitable for your operating system (Windows or macOS).
- Follow the installation instructions to complete the Node.js installation.

### 2. Install MongoDB <a name="install-mongodb"></a>
- Visit the MongoDB official website: [https://www.mongodb.com/docs/manual/installation](https://www.mongodb.com/docs/manual/installation)
- Select the installation guide for your operating system (Windows or macOS).
- Follow the installation instructions to set up MongoDB on your machine.

### 3. Clone the GitHub Project <a name="clone-the-github-project"></a>
- Open your terminal or command prompt.
- Navigate to the directory where you want to clone the project.
- Run the following command to clone the GitHub project:

   ```
   git clone https://github.com/samurai-legend/chowgule-nextjs-prisma.git
   ```

### 4. Install Dependencies <a name="install-dependencies"></a>
- Open a terminal or command prompt.
- Navigate to the root directory of the cloned project using the `cd` command:

   ```
   cd chowgule-nextjs-prisma
   ```

- Run the following command to install project dependencies:

   ```
   npm install
   ```

### 5. Configure Prisma <a name="configure-prisma"></a>
- In the root directory of your project, create a file named `.env` to store your environment variables.

   ```
   touch .env
   ```

- Edit the `.env` file and configure your MongoDB connection string. Replace `<YOUR_MONGODB_CONNECTION_STRING>` with your actual MongoDB connection string:

   ```
   DATABASE_URL=<YOUR_MONGODB_CONNECTION_STRING>
   ```

- Save the changes to the `.env` file.

### 6. Start the Development Server <a name="start-the-development-server"></a>
- To start the development server, run the following command:

   ```
   npm run dev
   ```

- Open a web browser and visit [http://localhost:3000](http://localhost:3000) to see your Next.js application in action.

You have successfully set up Next.js and Prisma with MongoDB on your Windows or Mac machine. You can now start building your application using this development environment.

**Note:** Make sure you have MongoDB running as a service or a locally running instance before starting the development server, as the Prisma client will need to connect to the MongoDB database.

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
