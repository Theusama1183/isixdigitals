import js from "@eslint/js";
import next from "eslint-config-next";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: [".next", "node_modules", "out", "dist", "next-env.d.ts"] },
  ...next,
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // The design system relies on parallax offsets and custom transforms that
      // next/image's wrapper cannot express, so these stay plain <img> tags.
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    // Vendored shadcn/ui primitives keep their upstream implementation, so the
    // React Compiler-era purity rules do not apply to them.
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
    },
  },
  eslintPluginPrettier,
);
