import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: ["pnpm-lock.yaml", "CHANGELOG.md"],
    jsdoc: true,
    sortImports: true,
  },
  lint: {
    categories: {
      correctness: "error",
      nursery: "error",
      perf: "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    env: {
      node: true,
    },
    plugins: ["import", "node", "unicorn"],
    jsPlugins: ["vite-plus/oxlint-plugin"],
    rules: {
      "import/consistent-type-specifier-style": "error",
      "typescript/array-type": ["error", { default: "array-simple" }],
      "typescript/ban-ts-comment": "error",
      "typescript/consistent-type-assertions": "error",
      "typescript/consistent-type-imports": "error",
      "typescript/no-misused-promises": "error",
      "typescript/no-explicit-any": "error",
      "typescript/no-unnecessary-type-assertion": "error",
      "typescript/no-unnecessary-type-conversion": "error",
      "typescript/no-unsafe-call": "error",
      "typescript/non-nullable-type-assertion-style": "error",
      "node/no-path-concat": "error",
      "unicorn/custom-error-definition": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
  },
  test: {
    benchmark: {
      include: ["**/*.{bench,benchmark}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
    projects: [
      {
        test: {
          name: "example",
          include: ["packages/example/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        },
      },
    ],
    passWithNoTests: true,
    typecheck: {
      enabled: true,
    },
  },
});
