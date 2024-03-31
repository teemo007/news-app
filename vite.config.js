import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/news-app/",
  build: {
    sourcemap: false,
  },
  plugins: [react()],
});
