import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

rules: {
  "@typescript-eslint/no-explicit-any" = "off",
  "@typescript-eslint/no-unnecessary-type-constraint" = "off",
  "@typescript-eslint/no-empty-object-type" = "off"
}

overrides: [
  {
    files: ["src/generated/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
    },
  },
];


const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
