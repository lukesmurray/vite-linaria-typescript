1. Create the vite app

```sh
yarn create vite vite-linaria-typescript --template react-ts
```

2. Install dependencies

```sh
yarn add @linaria/core @linaria/react
yarn add --dev @linaria/babel-preset
yarn add --dev twin.macro babel-plugin-macros tailwindcss
```

3. Update twin config to use linaria.

```json
"babelMacros": {
  "twin": {
    "styled": {
      "import": "styled",
      "from": "@linaria/react"
    },
    "css": {
      "import": "css",
      "from": "@linaria/core"
    },
    "global": {
      "import": "css",
      "from": "@linaria/core"
    }
  }
},
```
