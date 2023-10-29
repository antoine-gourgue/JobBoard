# JobBoard Frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# JobBoard Api adonisjs

This is the README file for the JobBoard_Backend package. The JobBoard_Backend package is a backend application built using the AdonisJS framework. It provides functionality for authentication, CORS handling, database operations, session management, and more.

## Installation
To install the JobBoard_Backend package, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the root directory of the cloned repository.
3. Run the command `npm install` to install all the required dependencies.

## Configuration
Before running the JobBoard_Backend application, you need to configure some settings. Follow these steps to configure the application:

1. Create a `.env` file in the root directory of the application.
2. Open the `.env` file and set the following variables:
    - `DB_CONNECTION`: Set the database connection type (e.g., mysql).
    - `DB_HOST`: Set the database host.
    - `DB_PORT`: Set the database port.
    - `DB_USER`: Set the database username.
    - `DB_PASSWORD`: Set the database password.
    - `DB_DATABASE`: Set the database name.

## Usage
To start the JobBoard_Backend application, run the command `npm start` in the root directory of the application. This will start the application and make it available at the specified port (default is 3333).

## Contributing
If you would like to contribute to the development of the JobBoard_Backend package, please follow these guidelines:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Make your desired changes.
4. Commit your changes and push them to your forked repository.
5. Create a pull request on GitHub.

## License
The JobBoard_Backend package is open source and available under the MIT License. See the [LICENSE](./LICENSE) file for more information.