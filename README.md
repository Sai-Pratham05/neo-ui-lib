# Neo UI Library

Welcome to Neo UI Library, a collection of reusable UI components built with React, TypeScript, and Tailwind CSS, styled in the Neo-Brutalism aesthetic.

This library is designed to provide eye-catching, high-contrast, and bold UI elements to make your projects stand out.

## Features

*   **Neo-Brutalism Design:** A unique and modern aesthetic characterized by:
    *   High contrast elements
    *   Bright, vibrant colors
    *   Bold shapes and typography
    *   Distinctive shadows (e.g., `shadow-[4px_4px_0px_rgba(0,0,0,1)]`)
*   **React Components:** Built with React for easy integration into your projects.
*   **TypeScript:** Strongly typed for better developer experience and fewer runtime errors.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development and customization.
*   **Storybook Integration:** Browse, view, and interact with components in isolation using Storybook.
*   **Copy-to-Clipboard Markup:** Easily copy the HTML/JSX markup for each component directly from the documentation site.

## Available Components

Currently, the library includes the following components:

*   Card
*   Button
*   IconButton
*   Input
*   Dialog
*   Checkbox
*   DropDown
*   ToggleSwitch
*   ProgressBar
*   Carousel
*   Breadcrumb
*   ComboBox

More components are planned for the future!

## Getting Started

### Prerequisites

*   Node.js (v16 or later recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sai-Pratham05/neo-ui-lib.git
    cd neo-ui-lib
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server (Documentation & Component Viewer)

The documentation site (built with Vite) allows you to view components and their markup.

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

### Running Storybook

Storybook provides an isolated environment for developing and testing components.

```bash
npm run storybook
# or
yarn storybook
```

This will start the Storybook server, typically at `http://localhost:6006`.

## Project Structure

```
neo-ui-lib/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Reusable UI components (.tsx)
│   ├── context/            # React context providers
│   ├── data/               # Component data, markup generators
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Pages for the documentation site
│   ├── stories/            # Storybook stories (.stories.tsx)
│   ├── App.tsx             # Main application component for docs
│   ├── main.tsx            # Entry point for the documentation site
│   └── index.css           # Global styles
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore
├── index.html              # HTML template for Vite
├── package.json
├── postcss.config.js       # PostCSS configuration
├── README.md               # This file
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration for the project
├── tsconfig.node.json      # TypeScript configuration for Node.js environment (e.g., Vite config)
└── vite.config.ts          # Vite configuration
```

## How to Use Components

1.  **Import the component** into your React project:
    ```typescript
    import Button from './components/Button'; // Adjust path as necessary
    ```

2.  **Use the component** in your JSX:
    ```jsx
    <Button buttonText="Click Me" rounded="md" />
    ```

3.  Refer to the documentation site or Storybook for available props and variations for each component.

## Contributing

Contributions are welcome! If you have ideas for new components, improvements, or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details (if one exists, otherwise assume MIT).

---

Thank you for checking out Neo UI Library! We hope you find it useful and inspiring for your projects.
