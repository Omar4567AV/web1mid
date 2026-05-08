# School Management Frontend

A modern frontend application for a school management system built with React, TypeScript, Vite, Tailwind CSS, and React Router DOM.

The project focuses on clean architecture, reusable components, organized feature folders, client-side routing, and a simple frontend authentication flow.

---

## Overview

This project is a school management frontend that includes pages and features for authentication, students, teachers, and courses.

It uses a clean folder structure to keep each part of the application organized and easy to maintain.

---

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- LocalStorage
- Git
- GitHub
- npm

---

## Packages Used

The project uses the following main packages:

- react
- react-dom
- react-router-dom
- typescript
- vite
- tailwindcss
- @tailwindcss/vite
- @vitejs/plugin-react

---

## Main Features

### Authentication

The project includes a frontend authentication feature using fake login logic.

The authentication system includes:

- Login page
- Login form
- Email input
- Password input
- Confirmation dialog before login
- Loading state before login success
- LocalStorage-based fake user session
- Welcome message after login
- Display logged-in user email
- Sign out functionality

This authentication system is frontend-only and does not use a backend or external authentication library.

---

### Navigation

The project includes a reusable navbar component.

The navbar provides navigation between the main pages of the application and uses active link styling to show the current page.

Navbar pages include:

- Login
- Students
- Teachers
- Courses

---

### Students

The students feature includes pages and structure for managing student-related UI.

It includes:

- Students page
- Student details page
- Student components
- Student services
- Student TypeScript types

---

### Teachers

The teachers feature includes pages and structure for teacher-related UI.

It includes:

- Teachers page
- Teacher components
- Teacher services
- Teacher TypeScript types

---

### Courses

The courses feature includes pages and structure for course-related UI.

It includes:

- Courses page
- Course components
- Course services
- Course TypeScript types

---

## Project Architecture

The project uses a clean frontend architecture.

Main structure:

- App setup
- Main entry file
- Global CSS file
- Shared components folder
- Authentication feature folder
- Students feature folder
- Teachers feature folder
- Courses feature folder

Each main feature is organized using:

- pages
- components
- services
- types

This structure makes the project easier to scale, maintain, and connect to a backend in the future.

---

## Routing

The project uses React Router DOM for client-side navigation.

Main routes:

- Login page
- Students page
- Student details page
- Teachers page
- Courses page

Routing allows the user to move between pages without reloading the browser.

---

## Styling

The project uses Tailwind CSS for styling.

Tailwind CSS is used for:

- Layout
- Spacing
- Buttons
- Cards
- Shadows
- Rounded corners
- Responsive design
- Modern UI styling

---

## Authentication Storage

The fake authentication system uses LocalStorage.

LocalStorage is used to:

- Save fake user data after login
- Check if a user is already logged in
- Remove user data after sign out

This approach is useful for frontend practice before connecting the project to a real backend.

---

## Development Tools

The project uses:

- npm for package management
- Vite for fast development
- TypeScript for type safety
- Git for version control
- GitHub for repository hosting

---

## Git Workflow

The project can be developed using branches.

Example branch purpose:

- Authentication feature branch
- Navigation feature branch
- Students feature branch
- Teachers feature branch
- Courses feature branch

Using branches keeps development organized and makes it easier to review changes before merging into the main branch.

---

## Project Goals

The goal of this project is to practice and build a professional React TypeScript frontend application.

Main goals:

- Build a clean React project
- Use TypeScript correctly
- Create reusable components
- Organize files with a scalable architecture
- Use React Router for navigation
- Use Tailwind CSS for modern styling
- Implement frontend authentication
- Prepare the project for future backend integration

---

## Future Improvements

Future improvements may include:

- Protected routes
- Real backend authentication
- Admin dashboard
- Student management
- Teacher management
- Course management
- Search and filtering
- Attendance system
- Calendar integration
- API integration
- Database connection

---

## Author

Omar Fawaz Halabi