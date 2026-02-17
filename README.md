# Modern Next.js Starter Template

Diversion is a comprehensive and production-ready Next.js starter template designed to accelerate your web development workflow. Built with modern best practices and a carefully curated tech stack, this template provides everything you need to kickstart your next web application with authentication, database integration, beautiful UI components, and powerful developer tools right out of the box.

This template is perfect for developers who want to skip the repetitive setup process and dive straight into building features. Whether you're creating a SaaS application, a content management system, or a complex web platform, Diversion provides a solid foundation with enterprise-grade architecture and scalability in mind.

## What's Inside

Diversion comes pre-configured with a powerful combination of technologies that work seamlessly together. At its core, it leverages **Next.js 16** with React 19, providing you with the latest features including server components, streaming, and optimized rendering. The template uses **TypeScript** throughout, ensuring type safety and better developer experience with intelligent code completion and early error detection.

Authentication is handled through **NextAuth.js** with MongoDB adapter integration, giving you a flexible and secure authentication system that supports multiple providers and custom credentials. The template includes pre-built authentication pages, middleware protection for routes, and session management, so you can focus on building your application logic rather than wrestling with auth configuration.

For styling, Diversion embraces **Tailwind CSS 4** with a custom design system and includes **shadcn/ui** components configured in the New York style. This combination provides you with beautiful, accessible, and customizable UI components that maintain consistency across your application. The template also integrates **Framer Motion** for smooth animations and transitions, elevating the user experience with polished interactions.

Database connectivity is established through **Mongoose**, providing an elegant MongoDB object modeling solution with built-in type casting, validation, and query building. The template includes example models and database connection utilities that follow best practices for serverless environments.

Additional features include **Cloudinary** integration for image and media management, **Nodemailer** for email functionality with pre-built templates, **React Leaflet** for interactive maps, **Recharts** for data visualization, and **jsPDF** for PDF generation. The template also includes form validation utilities, OTP input components, location pickers with pincode validation, and a comprehensive email service with customizable templates.

## Getting Started

To get started with Diversion, first clone the repository to your local machine. Once cloned, navigate to the project directory and install the dependencies. This template uses **pnpm** as the package manager for faster and more efficient dependency management, though you can use npm or yarn if you prefer.

After installing dependencies, you'll need to set up your environment variables. Create a `.env` file in the root directory based on the `.env.example` file (if provided) or configure the following essential variables:

- **Database Configuration**: Set your MongoDB connection string for database connectivity
- **Authentication**: Configure NextAuth secret and any OAuth provider credentials you plan to use
- **Cloudinary**: Add your Cloudinary cloud name, API key, and API secret for media management
- **Email Service**: Configure your SMTP settings for Nodemailer to enable email functionality
- **Google AI**: If using the Gemini AI features, add your Google Generative AI API key

Once your environment is configured, you can start the development server:

```bash
pnpm dev
```

Your application will be available at `http://localhost:3000`. The development server includes hot module replacement, so changes you make to your code will be reflected immediately in the browser.

## Project Structure

The project follows Next.js 16's app directory structure with a well-organized architecture that promotes maintainability and scalability. The `app` directory contains your routes and pages, with API routes living in `app/api` and authentication-related pages in `app/auth`. The `components` directory houses reusable React components, including custom components and the `ui` subdirectory for shadcn components.

The `lib` directory contains utility functions and service integrations, including authentication configuration, database connection logic, Cloudinary setup, email services, validation utilities, and state/pincode data. The `models` directory is where you define your Mongoose schemas and models for database entities. Type definitions are organized in the `types` directory to maintain type safety across your application.

Configuration files at the root level include `next.config.ts` for Next.js configuration, `tailwind.config.js` for Tailwind CSS customization, `components.json` for shadcn/ui configuration, `biome.json` for code linting and formatting, and `tsconfig.json` for TypeScript compiler options.

## Key Features

**Authentication System**: The template includes a complete authentication system with sign-in and sign-up pages, protected routes via middleware, session management, and MongoDB adapter for user persistence. The authentication flow is production-ready and can be extended with additional providers or custom logic.

**Database Integration**: MongoDB integration through Mongoose provides you with a robust data layer. The connection handling is optimized for serverless environments, automatically managing connection pooling and preventing connection leaks.

**UI Components**: Pre-built, accessible components from shadcn/ui are ready to use and customize. The design system is consistent and follows modern UI/UX principles, with support for dark mode through next-themes.

**Email Service**: The template includes a comprehensive email service with customizable templates for various use cases like welcome emails, password resets, and notifications. The email system uses Nodemailer and supports both HTML and plain text formats.

**Media Management**: Cloudinary integration allows you to easily handle image uploads, transformations, and delivery with optimized performance and automatic format conversion.

**Form Handling**: Built-in validation utilities and custom form components like OTP inputs and location pickers make it easy to create complex forms with proper validation and user feedback.

**Code Quality**: The template uses Biome for fast and reliable linting and formatting, ensuring consistent code style across your project. TypeScript strict mode is enabled for maximum type safety.

## Development Workflow

For daily development, use `pnpm dev` to run the development server with hot reloading. When you're ready to check your code quality, run `pnpm lint` to check for issues or `pnpm format` to automatically format your code according to the project's style guidelines. Before deploying to production, build your application with `pnpm build` to create an optimized production bundle, then test the production build locally with `pnpm start`.

The template is configured to work seamlessly with Vercel, Netlify, or any other platform that supports Next.js applications. The build process is optimized for performance, with automatic code splitting, image optimization, and static generation where applicable.

## Customization

Diversion is designed to be a starting point, not a rigid framework. You can easily customize the color scheme and design tokens by modifying the Tailwind configuration and CSS variables in `app/globals.css`. Add or remove shadcn/ui components using the shadcn CLI, extend the authentication system with additional providers or custom logic, create new Mongoose models in the `models` directory, and add new API routes in the `app/api` directory.

The modular architecture makes it easy to remove features you don't need or add new ones without breaking existing functionality. Each integration is loosely coupled, allowing you to swap out services or libraries as your requirements evolve.

## License

This project is licensed under the BSD 3-Clause License. See the [LICENSE](LICENSE) file for details.

## Credits

**Created and maintained by [Megh Deb](https://github.com/Megh2005)** - This template represents countless hours of research, configuration, and refinement to provide developers with a solid foundation for modern web applications. If you find this template helpful, consider giving it a star on GitHub and sharing it with other developers who might benefit from it.

---

Built with ❤️ using Next.js, React, TypeScript, and modern web technologies.
