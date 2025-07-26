import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite"; //importing tailwind with vite scoping

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
