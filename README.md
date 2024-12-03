# SMG-Automotive ESLint Config

## Usage

```shell
npm install @smg-automotive/eslint-config
```

Add a `lint` script to `package.json`:

```
  "lint": "eslint ."
```

Add a `format` script to `package.json` to be able to use auto fix:

```
  "format": "npm run lint -- --fix",
```

### ESLint configuration

Create `eslint.config.mjs` in the root of the project:

```mjs
import nextConfig from '@smg-automotive/eslint-config/next';

export default [
  ...nextConfig, 
  {
    // overwrite or add rules here
  }
];
```

- For plain TypeScript project, use the default one: `"@smg-automotive/eslint-config/default"`
- For React project, use `"@smg-automotive/eslint-config/react"`
- For Next.js project, use `"@smg-automotive/eslint-config/next"`

### EditorConfig configuration

Create/Update your `.editorconfig` by [this content](https://github.com/smg-automotive/eslint-config-pkg/blob/main/.editorconfig).

### Prettier configuration

Create `.prettierrc.mjs` in the root of the project:

```mjs
import prettierConfig from '@smg-automotive/eslint-config/prettier';

export default prettierConfig;
```
