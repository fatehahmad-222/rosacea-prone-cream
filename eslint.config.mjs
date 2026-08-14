import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Nested standalone projects:
    "app/components/Rosceaprone-serum/.next/**",
    "app/components/Rosceaprone-serum/node_modules/**",
    "app/components/Rosceaprone-cleanser/.next/**",
    "app/components/Rosceaprone-cleanser/node_modules/**",
  ]),
]);

export default eslintConfig;
