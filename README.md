# SMG-Automotive ESLint Config

## Usage

```shell
npm install @smg-automotive/eslint-config
```

Add a `lint` script to `package.json`:

```
  "lint": "eslint --ext ts,js,tsx,jsx,json ."
```

Add a `format` script to `package.json` to be able to use auto fix:

```
  "format": "npm run lint -- --fix",
```

### ESLint configuration

Create `.eslintrc.js` in the root of the project:

```
  module.exports = {
    extends: [
      <eslint_configuration_name>
    ],
  }
```

- For plain TypeScript project, use the default one: `"@smg-automotive/eslint-config"`
- For React project, use `"@smg-automotive/eslint-config/react"`
- For Next.js project, use `"@smg-automotive/eslint-config/next"`

### Prettier configuration

Create `.prettierrc.js` in the root of the project:

```
module.exports = {
  ...require("@smg-automotive/eslint-config/prettier"),
}
```
