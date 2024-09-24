# ForgeStarter

⚡️ A feature-packed, opinionated starter template for building Atlassian Forge apps. Includes Yarn, Vite, React 18, TypeScript, Vitest, Testing Library, Playwright, Eslint, and Atlaskit — everything you need to get started with modern tooling and best practices.

## Getting Started

### 0. Prerequisites

Before you begin, ensure you have the following installed:

1. [Node.js](https://nodejs.org/en/download/package-manager)
2. [Yarn](https://yarnpkg.com/)
3. [Forge CLI](https://developer.atlassian.com/platform/forge/getting-started/)

### 1. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
yarn install
```

### 2. Initial Build

To create the initial build, run one of the following commands, depending on the app version you'd like to start with:

```bash
yarn build:jira   # For Jira app version
yarn build:conf   # For Confluence app version
```


### 3. Register, Deploy, Install

#### Navigate to the app directory

```bash
cd ./packages/forge-jira    # For Jira version
```
    
or

```bash
cd ./packages/forge-conf    # For Confluence version
```

#### Register the app with Forge:

```bash
forge register
```

#### Deploy to Forge

Deploy the app to the development environment:

```bash
forge deploy
```

#### Install the App on Your Cloud Instance

Install the app on your cloud instance by running:

```bash
forge install
```

Follow the on-screen instructions to complete the process. 
The Forge app should now be installed from the development environment and available on your cloud instance.


## Available Scripts

### Lint

- Check for linting issues:
  ```bash
  yarn lint
  ```
- Automatically fix linting issues:
  ```bash
  yarn lint:fix
  ```


### Build

Build the app for Jira or Confluence:

```bash
yarn build:jira   # For Jira version
```

or

```bash
yarn build:conf   # For Confluence version
```


### Deploy

To build and deploy the app to the Forge development environment, run:

```bash
yarn deploy:jira   # For Jira version
```

or

```bash
yarn deploy:conf   # For Confluence version
```

To deploy to another environment (e.g., staging or production), append the environment flag:

```bash
yarn deploy:jira -e staging     # For staging
yarn deploy:jira -e production  # For production
yarn deploy:conf -e staging     # For staging
yarn deploy:conf -e production  # For production
```


### Test

`yarn test`


# Development Workflow

Once the app is installed (see Getting Started), follow this development loop:

1. Start the UI with hot reloading and establish a Forge tunnel to redirect requests to localhost:
    ```bash
    yarn dev:jira   # For Jira version
    ```

    or

    ```bash
    yarn dev:conf   # For Confluence version
    ```
2. Make changes to your app and enjoy instant feedback with hot-reloading.
3. After major changes to the `manifest.yml`, deploy and reinstall the app:
    ```bash
    yarn deploy:jira   # For Jira version
    cd packages/forge-jira
    forge install --upgrade   # Install the updated app version
    ```

    or

    ```bash
    yarn deploy:conf   # For Confluence version
    cd packages/forge-conf
    forge install --upgrade   # Install the updated app version
    ```

# License

This project is licensed under the MIT License.