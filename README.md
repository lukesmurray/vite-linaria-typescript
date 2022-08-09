1. Install `vite`

```sh
yarn create @vitejs/app my-vite-app --template react-ts
```

2. Install dependencies

```sh
yarn add @linaria/core @linaria/react
yarn add --dev @linaria/rollup babel-plugin-macros tailwindcss twin.macro
```

3. Add the twin config in package.json

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
}
```

4. Create a `types/twin.d.ts` and add these declarations

```tsx
import "twin.macro";
import { css as cssImport } from "@linaria/core";
import { styled as styledImport } from "@linaria/react";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: any;
    tw?: string;
  }
}
```

Then add the following to your typescript config.

```json
"include": ["src", "types"]
```
