
## Feature based organization

```plaintext
src/
├── app/ # Next.js App Router directory
│ ├── (auth)/ # Auth route group
│ │ ├── (signin)/
│ ├── (dashboard)/ # Dashboard route group
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ └── page.tsx
│ └── api/ # API routes
│
├── components/ # Shared components
│ ├── ui/ # UI components (buttons, inputs, etc.)
│ └── layout/ # Layout components (header, sidebar, etc.)
│
├── features/ # Feature-based modules
│ ├── feature/
│ │ ├── components/ # Feature-specific components
│ │ ├── actions/ # Server actions
│ │ ├── schemas/ # Form validation schemas
│ │ └── utils/ # Feature-specific utilities
│ │
├── lib/ # Core utilities and configurations
│ ├── auth/ # Auth configuration
│ ├── db/ # Database utilities
│ └── utils/ # Shared utilities
│
├── hooks/ # Custom hooks
│ └── use-debounce.ts
│
├── stores/ # Zustand stores
│ └── dashboard-store.ts
│
└── types/ # TypeScript types
└── index.ts
```

## Getting Started

> [!NOTE]  
> We are using **Next 15** with **React 19**, follow these steps:

Clone the repo:

```
git clone https://github.com/gnafhan/web-komatik-fe.git
```

- `pnpm install` ( we have legacy-peer-deps=true added in the .npmrc)
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `pnpm run dev`

##### Environment Configuration Setup

To configure the environment for this project, refer to the `env.example.txt` file. This file contains the necessary environment variables required for authentication and error tracking.

You should now be able to access the application at http://localhost:3000.

> [!WARNING]
> After cloning or forking the repository, be cautious when pulling or syncing with the latest changes, as this may result in breaking conflicts.

Cheers! 🥂

## Collaboration & Contribution Guidelines

### Commit Message Convention
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for all commit messages.
- Prefix your commit with one of the following types:
  - `feat`: New feature
  - `fix`: Bug fix
  - `docs`: Documentation only changes
  - `chore`: Maintenance, build, or tooling changes
  - `refactor`: Code change that neither fixes a bug nor adds a feature
  - `test`: Adding or updating tests
  - `style`: Formatting, missing semi colons, etc; no code change
  - `perf`: Performance improvement
- Example:
  ```
  feat(auth): add OAuth login with Google
  fix(product): correct price calculation bug
  docs: update README with setup instructions
  ```

### Branch Naming Convention
- Use the format: `<devname>.<feature>`
- Example: `nafhan.auth`, `alex.product-listing`, `sarah.fix-login`
- Use short, descriptive feature names. Use hyphens for multi-word features: `john.product-table-fix`

### Pull Request (PR) Rules
- PR titles should be clear and reference the main change (e.g., `feat: add Kanban drag-and-drop`)
- Link related issues in the PR description if applicable.
- Provide a concise summary of changes and any special instructions for reviewers.
- Ensure all checks (CI, lint, tests) pass before requesting review.
- Assign at least one reviewer; self-merge is discouraged unless urgent.
- Use draft PRs for work-in-progress.

### General Collaboration Rules
- Sync with the latest `main` before starting new work.
- Keep PRs focused and as small as possible; large PRs should be split if feasible.
- Use code comments for complex logic or non-obvious decisions.
- Document new environment variables or configuration changes in the README.
- Discuss breaking changes or architectural decisions in issues before implementation.
- Be respectful and constructive in code reviews and discussions.

### Push/Pull Workflow

This project uses two main branches:
- **main**: Production branch (deploys to production)
- **dev**: Staging branch (for development and staging/testing)

> **All feature/fix branches must be merged into `dev`, _not_ `main`. Only maintainers should merge `dev` into `main` for production releases.**

#### Step-by-Step Workflow for Contributors
<picture><img alt="Sentry" src=".github/images/git_workflow.png">
        </picture>

1. **Sync your local repository**
   - Make sure you have the latest `dev` branch:
     ```sh
     git checkout dev
     git pull origin dev
     ```
2. **Create your feature/fix branch**
   - Use the branch naming convention:
     ```sh
     git checkout -b <devname>.<feature>
     # Example: git checkout -b nafhan.auth
     ```
3. **Work on your changes**
   - Commit using the [conventional commit](#commit-message-convention) format.
4. **Sync with `dev` before pushing**
   - Before pushing, always pull the latest `dev` to avoid conflicts:
     ```sh
     git checkout dev
     git pull origin dev
     git checkout <your-branch>
     git merge dev
     # Resolve any conflicts if needed
     ```
5. **Push your branch**
   ```sh
   git push origin <your-branch>
   ```
6. **Open a Pull Request**
   - Target the `dev` branch (not `main`).
   - Fill out the PR template, link issues if applicable, and request review.