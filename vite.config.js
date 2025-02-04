import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    include: ["@react-three/fiber", "@react-three/drei"],
  },
  server: {
    historyApiFallback: true, // Ensures routing works without page reloads
  },
  resolve: {
    alias: {
      "@tabler/icons-react": "@tabler/icons-react/dist/index.mjs",
    },
  },
});
