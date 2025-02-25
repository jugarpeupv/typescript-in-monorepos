# Typescript in monorepos

## Project linking

Nx original article: [managing-ts-packages-in-monorepos](https://nx.dev/blog/managing-ts-packages-in-monorepos)

- Relative imports
    - 💪 Easy setup
    - ❌ Restructuring code base will require updating import paths
    - ❌ Typescript: workspace treated as a single project

- Path aliases
    - 💪 Eliminate the need for relative imports, resulting in a cleaner and more maintainable structure.
    - ❌ Typescript: workspace treated as a single project

- Package manager workspaces
    - 💪 We delegate the package resolution to the package manager, making it independent of TypeScript.
    - 💪 Works seamlessly at runtime since the package resolution is handled natively by Node.js or the package manager. This makes the setup more robust and platform-aligned
    - 💪 Typescript: Each project will configure typescript tooling, workspace is NOT treated as a single project

## Typescript Project references

- It works with both `Path aliases` and `Package manager workspaces`
- Project references create stronger boundaries by treating each package as an independent TypeScript program
- This approach introduces incremental builds, where only modified packages are recompiled. 
- TypeScript generates .tsbuildinfo files to track changes, reducing memory usage and speeding up type checking and compilation. 

- ❌ Introduces configuration overhead. Nx can help in this regard, syncing tsconfig.json references automatically.



# Internal packages vs Built packages

- Nx
    - Internal package === Non buildable library
    - Built Package    === Buildable library


- Do I need to reference dependent packages in the consuming package's package.json?
    - For NPM workspaces you don't necessarily have to reference dependent packages in the consuming package's package.json
        ```json
        "dependencies": {
            "@ts-monorepo-linking/lib-a": "*" // optional for NPM workspaces
        }
        ```
    - Exceptions:
        - Publishable packages
        - Pnpm workspaces

# Handling dependencies in a monorepo

- Install less possible dependencies in the root package.json

- Install the dependency where it is needed

```zsh
npm i express -w @repo/buildable-lib
```
