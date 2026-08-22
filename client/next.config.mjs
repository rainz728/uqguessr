import path from "node:path";
import {
  fileURLToPath,
} from "node:url";

const clientDirectory = path.dirname(
  fileURLToPath(import.meta.url)
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,

  turbopack: {
    root: path.resolve(
      clientDirectory,
      ".."
    ),
  },
};

export default nextConfig;