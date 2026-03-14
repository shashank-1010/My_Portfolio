import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "basdasdad.onrender.com",
      "localhost",
      ".onrender.com" // This allows all subdomains on render.com
    ]
  }
});
