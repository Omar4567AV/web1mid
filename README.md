# School Management Frontend

A modern school management frontend project built with React, TypeScript, Vite, Tailwind CSS, Material UI, React Router DOM, and LocalStorage.

This project focuses on creating a clean frontend structure with authentication, protected pages, navigation, theme control, reusable components, global colors, and organized project architecture.

---

## Project Overview

This project is a frontend application for a school management system. It contains pages for authentication, home, students, teachers, courses, and theme settings.

The main goal of this project is to practice building a professional React TypeScript application using modern frontend tools and a scalable folder structure.

The project uses fake frontend authentication with LocalStorage. This means the login system works on the frontend only, without a backend. After login, the user can access protected pages. When the user signs out, the saved login data is removed from LocalStorage.

---

## Technologies Used

The project uses the following technologies:

- React
- TypeScript
- Vite
- Tailwind CSS
- Material UI
- React Router DOM
- React Hot Toast
- LocalStorage
- Git
- GitHub
- npm

---

## Libraries and Packages Used

The project uses React as the main frontend library. TypeScript is used for type safety and cleaner code. Vite is used as the development and build tool because it is fast and simple.

Tailwind CSS is used for layout, spacing, responsive design, backgrounds, grids, and custom styling.

Material UI is used for ready-made professional UI components such as buttons, cards, typography, dialogs, inputs, tables, and other interface elements.

React Router DOM is used for navigation between pages without refreshing the browser.

React Hot Toast is used to show notification messages such as success and error messages.

LocalStorage is used to save the fake logged-in user in the browser.

---

## Installed Packages

The main packages used in this project are:

- react
- react-dom
- typescript
- vite
- @vitejs/plugin-react
- tailwindcss
- @tailwindcss/vite
- react-router-dom
- react-hot-toast
- @mui/material
- @emotion/react
- @emotion/styled
- @mui/icons-material
- @types/node

---

## Project Features

### Authentication System

The project includes a frontend authentication system.

The authentication system includes:

- Login page
- Login form
- Email input
- Password input
- Confirmation dialog before login
- Loading state before login success
- Fake login logic
- Save user data in LocalStorage
- Check if user is already logged in
- Redirect logged-in user away from login page
- Sign out button
- Remove user data from LocalStorage after sign out

The login flow works like this:

The user opens the login page. The login form appears first. The user enters email and password, then clicks the login button. After clicking login, a confirmation dialog appears. If the user chooses No, the dialog closes and nothing else happens. If the user chooses Yes, a loading state appears for a few seconds, then the user becomes logged in and is redirected to the home page.

---

### Protected Routes

The project uses protected routes.

Protected routes prevent users from accessing private pages before login.

If the user is not logged in and tries to open a protected page, the app automatically redirects the user to the login page.

Protected pages include:

- Home page
- Students page
- Student details page
- Teachers page
- Courses page
- Theme page

This makes the application more realistic and prepares it for future backend authentication.

---

### Navbar

The project includes a reusable navbar component.

The navbar appears only after the user logs in.

The navbar includes links to:

- Home
- Students
- Teachers
- Courses
- Theme

The navbar also includes:

- Active link styling
- Logged-in user email
- Sign out button

When the user clicks Sign Out, the fake user data is removed from LocalStorage and the user is redirected to the login page.

---

### Home Page

The home page is protected, so only logged-in users can access it.

The home page includes feature sections and buttons for the main parts of the project.

The home page includes:

- Project title
- Project description
- Navigation buttons
- Toast notification buttons
- Material UI cards and buttons
- Tailwind layout and spacing
- Global color variables

The home page uses both Tailwind CSS and Material UI together.

Tailwind CSS is used for page layout, spacing, grid, and background.

Material UI is used for cards, buttons, typography, and UI components.

---

### Students Feature

The students feature contains student-related pages and structure.

It includes:

- Students page
- Student details page
- Student components folder
- Student services folder
- Student TypeScript types folder

The students page can display a list of students.

The student details page can display details for one student using a route parameter.

Example route:

- `/students`
- `/students/:id`

---

### Teachers Feature

The teachers feature contains teacher-related pages and structure.

It includes:

- Teachers page
- Teacher components folder
- Teacher services folder
- Teacher TypeScript types folder

This structure prepares the project for future teacher management features.

---

### Courses Feature

The courses feature contains course-related pages and structure.

It includes:

- Courses page
- Course components folder
- Course services folder
- Course TypeScript types folder

This structure prepares the project for future course management and scheduling features.

---

### Theme Page

The project includes a theme page.

The theme page allows the user to switch between light mode and dark mode.

The selected theme is saved in LocalStorage, so the theme can stay saved after refreshing the page.

The theme system uses a class on the root document element and global CSS variables.

The theme page includes:

- Light mode option
- Dark mode option
- Saved theme in LocalStorage
- Toast message after changing theme
- Global colors that change based on the selected theme

---

### Global Color Variables

The project uses global CSS variables for colors.

Instead of writing colors directly in every component, the colors are stored in one global place.

This makes the project easier to maintain because colors can be changed from one file.

Global colors include:

- Background color
- Card color
- Text color
- Muted text color
- Primary color
- Primary hover color
- Success color
- Danger color
- Warning color
- Purple color

These variables are used with Tailwind CSS and Material UI.

Tailwind uses them inside class names.

Material UI uses them inside the `sx` prop.

This keeps the design consistent across the whole project.

---

### Tailwind CSS and Material UI Together

This project uses Tailwind CSS and Material UI together.

Tailwind CSS is used for:

- Page layout
- Grid system
- Spacing
- Background colors
- Responsive design
- Custom sections

Material UI is used for:

- Buttons
- Cards
- Typography
- Dialogs
- Inputs
- Tables
- Icons
- Advanced UI components

The project avoids using default Material UI colors when global colors are needed. Instead, global CSS variables are used inside Material UI components.

This gives the project a consistent design system.

---

### React Hot Toast

React Hot Toast is used for small notification messages.

It can show messages such as:

- Success message
- Error message
- Login success message
- Theme changed message

Toast notifications improve the user experience because they give quick feedback after an action.

---

### LocalStorage

LocalStorage is used in this project to save data in the browser.

It is used for:

- Saving fake user login data
- Checking if the user is already authenticated
- Removing user data after sign out
- Saving selected theme

LocalStorage is useful for frontend practice before connecting the application to a real backend.

---

### Path Alias

The project uses path alias with `@`.

The `@` symbol points to the `src` folder.

This means imports can be cleaner and easier to read.

Instead of using long relative paths, the project can use shorter alias imports.

For example, imports can be written from the `src` folder directly using `@`.

This helps keep the project clean, especially when files are inside many nested folders.

The alias was configured in:

- Vite configuration
- TypeScript configuration

Vite needs the alias to understand imports during development and build.

TypeScript needs the alias to understand imports while checking the code.

---

## Project Architecture

The project uses a clean frontend architecture.

Main structure:

- Shared components
- Authentication feature
- Students feature
- Teachers feature
- Courses feature
- Pages
- Services
- Types

The project separates features into their own folders. This makes the application easier to scale and maintain.

Each main feature can have its own:

- pages
- components
- services
- types

This keeps code organized and prevents mixing unrelated logic.

---

## Folder Structure

The project structure is organized like this:

- `src/App.tsx`  
  Main application routing file.

- `src/main.tsx`  
  Main entry point of the React application.

- `src/index.css`  
  Global CSS file. It includes Tailwind CSS, dark mode setup, and global color variables.

- `src/components/Navbar.tsx`  
  Shared navbar component that appears after login.

- `src/components/ProtectedRoute.tsx`  
  Component used to protect pages from unauthenticated users.

- `src/pages/HomePage.tsx`  
  Protected home page with project features and buttons.

- `src/pages/ThemePage.tsx`  
  Protected theme settings page.

- `src/features/auth/pages/LoginPage.tsx`  
  Authentication page that controls login behavior.

- `src/features/auth/components/LoginForm.tsx`  
  Login form component.

- `src/features/auth/services/authService.ts`  
  Authentication service for login, logout, checking user, and LocalStorage logic.

- `src/features/auth/types/auth.types.ts`  
  TypeScript types for authentication.

- `src/students/pages/StudentsPage.tsx`  
  Students list page.

- `src/students/pages/StudentDetailsPage.tsx`  
  Student details page.

- `src/students/components`  
  Folder for student-related components.

- `src/students/services`  
  Folder for student-related service logic.

- `src/students/types`  
  Folder for student-related TypeScript types.

- `src/teachers/pages/TeachersPage.tsx`  
  Teachers page.

- `src/teachers/components`  
  Folder for teacher-related components.

- `src/teachers/services`  
  Folder for teacher-related service logic.

- `src/teachers/types`  
  Folder for teacher-related TypeScript types.

- `src/courses/pages/CoursesPage.tsx`  
  Courses page.

- `src/courses/components`  
  Folder for course-related components.

- `src/courses/services`  
  Folder for course-related service logic.

- `src/courses/types`  
  Folder for course-related TypeScript types.

---

## Routing

The project uses React Router DOM for navigation.

The main routes are:

- `/login`  
  Opens the login page.

- `/`  
  Opens the protected home page.

- `/students`  
  Opens the students page.

- `/students/:id`  
  Opens the student details page.

- `/teachers`  
  Opens the teachers page.

- `/courses`  
  Opens the courses page.

- `/theme`  
  Opens the theme settings page.

Most routes are protected. This means the user must be logged in before accessing them.

---

## Authentication Logic

The authentication logic is handled in the authentication service.

The service includes functions for:

- Logging in
- Logging out
- Getting the current user
- Checking if the user is authenticated

When the user logs in successfully, fake user data is saved in LocalStorage.

When the user signs out, the saved user data is removed from LocalStorage.

When the app loads, it checks LocalStorage to know if the user is already logged in.

---

## Development Steps

The project was built step by step.

First, the React TypeScript Vite project was created.

Then Tailwind CSS was installed and configured.

After that, React Router DOM was installed and routing was added.

The authentication feature was created with a login page, login form, authentication service, and authentication types.

Then LocalStorage was added to save the fake login state.

A protected route component was created to prevent access to private pages before login.

The navbar was created and made visible only after login.

Then students, teachers, and courses pages were added.

A home page was added to display the main project features.

React Hot Toast was added for notifications.

Material UI was installed and used together with Tailwind CSS.

A theme page was created to switch between light and dark mode.

Global color variables were added to make the design easier to control.

Finally, path alias was added to make imports cleaner and more professional.

---

## Git and GitHub

Git is used for version control.

GitHub is used to store the project online.

The project can be developed using branches. Branches help separate new features from the main project.

A branch can be created for each feature, such as:

- Authentication branch
- Navbar branch
- Theme branch
- Students branch
- Courses branch

Using Git and GitHub helps track changes, save project history, and prepare the project for collaboration.

---

## Purpose of the Project

The purpose of this project is to practice professional frontend development.

The project helps practice:

- React components
- TypeScript types
- Routing
- Authentication flow
- Protected routes
- LocalStorage
- Tailwind CSS
- Material UI
- Toast notifications
- Theme system
- Global color variables
- Folder architecture
- Path alias
- Git and GitHub workflow

---

## Future Improvements

Future improvements may include:

- Real backend authentication
- JWT authentication
- Protected admin dashboard
- Student CRUD operations
- Teacher CRUD operations
- Course CRUD operations
- Search and filtering
- Attendance system
- Calendar system
- Role-based access control
- API integration
- Database connection
- Form validation
- Better dashboard statistics
- Responsive mobile navbar

---

## Conclusion

This project is a clean and modern React TypeScript frontend application. It uses a professional architecture, protected routing, fake authentication, LocalStorage, Tailwind CSS, Material UI, React Hot Toast, global colors, and path alias.

The project is ready to be extended with real backend APIs and more advanced school management features.

---

## Author

Omar Fawaz Halabi
https://chatgpt.com/share/69fda662-65f8-8389-a095-a0ee585d3ea3