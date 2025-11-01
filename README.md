# QMindX Reimagined

![Version](https://img.shields.io/badge/version-0.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)

A modern, responsive web application built with React, TypeScript, and Tailwind CSS, designed to deliver an exceptional user experience with beautiful UI components and seamless navigation.

## Description

QMindX Reimagined is a comprehensive web application that combines modern frontend technologies to create a powerful, accessible, and visually appealing user interface. The project leverages the latest React ecosystem tools and libraries to provide a robust foundation for building complex web applications.

### Key Features

- **Modern React Architecture** - Built with React 18 and TypeScript for type safety and developer productivity
- **Beautiful UI Components** - Utilizes shadcn-ui and Radix UI primitives for accessible, customizable components
- **Responsive Design** - Fully responsive layouts using Tailwind CSS for all device sizes
- **Fast Development** - Powered by Vite for lightning-fast builds and hot module replacement
- **Accessibility** - Implements best practices for web accessibility with automated testing
- **Routing** - Seamless navigation with React Router DOM
- **Form Handling** - Robust form validation using React Hook Form and Zod
- **Animation** - Smooth animations and transitions with Framer Motion
- **Data Visualization** - Interactive charts and graphs with Recharts

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (LTS version recommended) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager

### Setup Steps

```sh
# Clone the repository
git clone https://github.com/yourusername/qmindx-reimagined.git

# Navigate to the project directory
cd qmindx-reimagined

# Install dependencies
npm install
# or
yarn install

# Create a .env file based on the example
cp .env.example .env
```

## Usage

### Development

Start the development server with hot-reload:

```sh
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:5173` (default Vite port).

### Testing

Run end-to-end tests with Playwright:

```sh
npm run test:e2e
# or
yarn test:e2e
```

### Building for Production

Create an optimized production build:

```sh
npm run build
# or
yarn build
```

Preview the production build locally:

```sh
npm run preview
# or
yarn preview
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory based on the `.env.example` template. The following environment variables are available:

- `VITE_API_URL` - Backend API URL
- `VITE_CLAUDE_API_KEY` - API key for Claude AI integration (if applicable)

### Customization

#### Tailwind Configuration

Customize the design system by modifying the `tailwind.config.ts` file. The project uses a component-based approach with shadcn-ui, which can be customized via the `components.json` file.

#### Theme Customization

The project supports light and dark modes using `next-themes`. Theme settings can be adjusted in the UI components.

## Contributing

We welcome contributions to QMindX Reimagined! Please follow these guidelines:

### Code Style

- Follow the existing code style and conventions
- Use TypeScript for all new code
- Ensure components are accessible
- Write meaningful commit messages

### Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests to ensure everything works
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Pull Request Process

1. Ensure all tests pass
2. Update documentation if necessary
3. Get approval from at least one maintainer
4. Squash commits before merging

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn-ui Documentation](https://ui.shadcn.com/)

## Project Status

This project is actively maintained and under development. For questions or support, please open an issue on the GitHub repository.