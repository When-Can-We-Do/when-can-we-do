# when-can-we-do
## Overview
When Can We Do? is a task-tracking application that allows users to add tasks/events and interact with them in either a calendar view or a list view. Users are able to view, add, and delete tasks and mark tasks as complete. Users are also able to include descriptions in their tasks to provide more information.

## Design
When Can We Do? is written as a web application that users can access in their browser on a laptop or personal computer.

When Can We Do? is written in TypeScript/JavaScript using the framework [Next.js](https://nextjs.org/). Next.js utilizes [React](https://react.dev/) for its frontend and allows developers to easily write code for both the frontend and backend with its `pages` and `api` system. Developers write code for a view that they want to display on a certain path (such as `https://www.whencanwedo.com/tasks`) as a correspondingly named `.tsx` or `.js` file in the `pages` directory (`pages/tasks.tsx` in the previous example) and they write code for a backend API path they want to access as a file in the `api` directory. 

The code for the When Can We Do? application is written in files in the pages directory (most notably in the `index.tsx`, `signIn.tsx`, and `tasks.tsx` files &mdash; `_app.tsx` and `_document.tsx` are auto-generated)

When Can We Do? utilizes two important libraries, [Mantine](https://mantine.dev/) and [FullCalendar](https://fullcalendar.io/docs/react) to produce the frontend. Mantine is used in the app to provide site components like buttons and menus along with organizational components to format the site. FullCalendar is used exclusively to produce the calendar component on the calendar version of the app (i.e., it is unused in the list version).

## Pre-Hosted Site
When Can We Do? is hosted on https://www.whencanwedo.com/ and can be visited at any time to view and use our application. 

## Requirements
[Node](https://nodejs.org/en) version 18.12.1+ is required to run the development and production servers.

## Installation Instructions
1. Download this repository somewhere. 
2. From within the folder where this `README` is located, open a terminal and run `npm install` to install all of the project dependencies.

## Development Setup
Setting up the project for development is simple, just run `npm run dev` to run the development server and then visit [http://localhost:3000](http://localhost:3000) to access the application.

## Production Setup
First, generate the production build by running `npm run build`.

Then, run `npm run start` to start the production application.

## Deploy on Vercel

When Can We Do? is currently deployed on the [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) (the company that maintains Next.js) hosting platform, where it can be visited at https://www.whencanwedo.com/. 

If you would like to deploy When Can We Do? for yourself, simply clone the repository and visit [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)'s website, and then add the project as a deployment, and follow the link provided by the deployment to access the deployed application.
