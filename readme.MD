# HRDream Frontend

HRDream is a modern HR management platform developed to streamline applicant tracking, employee management, and other HR-related operations. This repository contains the frontend codebase for HRDream, built using Next.js and styled with Tailwind CSS.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Details](#folder-details)
- [Future Improvements](#future-improvements)

---

## Features

- **Authentication**: User sign-up, sign-in, and email verification.
- **Applicant Tracking**: Features for tracking job applicants and managing hiring workflows.
- **User Profiles**: View and update user profiles.
- **Dashboard**: A comprehensive dashboard for managing HR operations.
- **Settings**: User-specific settings for customization.
- **Responsive Design**: Fully optimized for all screen sizes using Tailwind CSS.

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: [Heroicons](https://heroicons.com/)

---

## Project Structure

```
├── app
│   ├── auth
│   │   ├── sign-in
│   │   │   └── page.tsx
│   │   ├── sign-up
│   │   │   └── page.tsx
│   │   └── verify-email
│   │       └── page.tsx
│   ├── (main)
│   │   ├── applicant-tracker
│   │   │   └── page.tsx
│   │   ├── dashboard
│   │   │   └── page.tsx
│   │   ├── people
│   │   │   └── page.tsx
│   │   ├── profile
│   │   │   └── page.tsx
│   │   ├── reflect
│   │   │   └── page.tsx
│   │   ├── settings
│   │   │   └── page.tsx
│   │   └── layout.tsx
├── components
│   ├── applicantTracker
│   │   ├── AddApplicantModal.tsx
│   │   ├── ApplicantCard.tsx
│   │   ├── ApplicantSection.tsx
│   │   ├── FilterPanel.tsx
│   ├── auth
│   │   ├── AuthForm.tsx
│   │   ├── VerifyEmail.tsx
│   ├── dashboard
│   │   └── Left.tsx
├── public
│   ├── favicon.ico
├── styles
│   └── globals.css
├── .next
├── package.json
├── README.md
```

---

## Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hrdream-frontend.git
   cd hrdream-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the project in your browser at `http://localhost:3000`.

---

## Usage

- Navigate to `/auth/sign-in` to log in.
- Use `/auth/sign-up` for user registration.
- After login, access the dashboard and other features like applicant tracking and user profile management.

---

## Folder Details

### `app`
Contains the route-specific pages and layouts. Each folder represents a route in the Next.js application.

- **`auth`**: Handles authentication-related routes, including sign-in, sign-up, and email verification.
- **`(main)`**: Contains core application pages like dashboard, profile, settings, etc.

### `components`
Contains reusable React components used throughout the application.

- **`auth`**: Components related to authentication, such as `AuthForm`.
- **`applicantTracker`**: Components for managing job applicants.
- **`dashboard`**: Components for rendering the dashboard layout.

### `styles`
Contains global styles for the application using Tailwind CSS.

---

## Future Improvements

- **Dark Mode Support**: Add theme toggling functionality.
- **Unit Tests**: Implement unit and integration tests for core components and pages.
- **API Integration**: Integrate backend APIs for dynamic data.
- **Internationalization (i18n)**: Support multiple languages.
- **Role-based Access Control**: Restrict features based on user roles.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with descriptive messages.
4. Submit a pull request for review.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Contact

For questions or suggestions, feel free to reach out:

- **Author**: Mentesnot Sibatu
- **Email**: sibhatmentesnot@example.com

