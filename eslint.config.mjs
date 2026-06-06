import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // This site uses static export (output: "export" + images.unoptimized),
      // which disables next/image optimization — so plain <img> is intentional.
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
