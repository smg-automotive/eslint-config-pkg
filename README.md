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

### EditorConfig configuration

Create/Update your `.editorconfig` by following content:

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false

[*.{js,jsx,ts,tsx}]
spaces_around_brackets = inside

```

### Prettier configuration

Create `.prettierrc.js` in the root of the project:

```
module.exports = {
  ...require("@smg-automotive/eslint-config/prettier"),
}
```
