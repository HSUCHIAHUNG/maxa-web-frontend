import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: `${path.resolve(process.cwd())}/src` }],
  },
  // server: {
  //   open: true,
  //   proxy: {
  //     "/service/api/": {
  //       target: "https://sbir.cbsdinfo.com.tw/",
  //       changeOrigin: true,
  //       rewrite: (pathe) => pathe.replace(/^\/service^\/^\/api/, ""),
  //     },
  //   },
  // },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://maxa-d.chanjui.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
