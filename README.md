# My Portfolio

Welcome to my personal portfolio website repository! This portfolio showcases my skills, projects, and experience as a web developer. It is built with modern web technologies and serves as a way for potential employers, clients, or collaborators to get to know me better.

## Demo

You can check out the live version of my portfolio here: [jamieyau.com](https://www.jamieyau.com/)

## Technologies Used

This website was built using the following technologies:

- **Frontend**:
  - [**Next.js**](https://nextjs.org/) - React framework used for building server-rendered React applications.
  - [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework for styling the site.
  - [**Motion**](https://motion.dev/) - Animation library for React that powers the animations in this portfolio.
  - [**React**](https://react.dev/) - JavaScript library for building user interfaces.
  - [**TypeScript**](https://www.typescriptlang.org/) - A superset of JavaScript that adds static typing.
  - [**React Hook Form**](https://react-hook-form.com/) - Library for handling form validation and submission.
  - [**Resend**](https://resend.com/) - A service for sending transactional emails. Used in this portfolio to handle email submissions through the contact form.

- **Tools**:
  - **Git & GitHub** for version control
  - **Vercel** for deployment

## Features

- Responsive design that adapts to different screen sizes.
- Dynamic animations and transitions powered by Motion.
- Sections showcasing my skills, projects, and work experience.
- Contact form to reach out to me directly.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/JamieYau/portfolio-v2.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
    RESEND_API_KEY=your-resend-api-key
    RESEND_EMAIL=onboarding@resend.dev
    RESEND_RECIPIENT=your-email-address
   ```
   See [Resend](https://resend.dev/) for more information on how to get your API key.

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the website locally.

## License

This project is open-source and available under the MIT License.
