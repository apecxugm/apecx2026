# APECX 2026

The official web platform for the **Annual Petroleum Competition and Exhibition (APECX) 2026**, organized by the Society of Petroleum Engineers (SPE) UGM Student Chapter. 

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/apecxugm/apecx2026.git)
   cd apecx2026
   ```
2. Install dependencies:
   ```bash
    pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```
4. Open http://localhost:3000 with your browser to see the result.

## 📝 Commit Convention

We follow a [standardized commit message](https://conventionalcommits.org) format to maintain a clean and informative git history. Each commit message should be structured as follows:

```
<type>(<scope>): <subject>
```

### Types:

-   **feat**: A new feature
-   **fix**: A bug fix
-   **build**: Changes to libraries, etc
-   **docs**: Documentation changes
-   **refactor**: Code changes that neither fix a bug nor add a feature
-   **perf**: Changes that improve performance
-   **test**: Adding or updating tests
-   **chore**: Changes to build process, auxiliary tools, or libraries

### Scope:

The scope is optional and can be anything specifying the place of the commit change (component, page, or file name).

### Subject:

The subject contains a brief description of the change:

-   Use the imperative, present tense: "change" not "changed" nor "changes"
-   Don't capitalize the first letter
-   No period (.) at the end

### Examples:

```
feat(auth): add login page
fix(navbar): correct responsive display issue
docs(readme): update installation instructions
refactor(api): improve error handling
```

## Branch Convention

To maintain an organized repository, we use the following branch naming convention:

```
<type>/<description>
```

### Types:

-   **feat**: For developing new features
-   **fix**: For fixing bugs
-   **docs**: For documentation updates
-   **refactor**: For code refactoring that doesn't add new features or fix bugs

### Description:

A brief description using kebab-case (words separated by hyphens) that captures what the branch is about.

### Examples:

```
feat/landing-page
fix/login-validation
docs/api-documentation
refactor/cleanup-components
```

### Workflow:

1. Create a new branch from `main` (or current development branch) `git checkout -b <branch-name>`
2. Work on your changes
3. Submit a pull request back to the original branch
4. After review, merge the branch