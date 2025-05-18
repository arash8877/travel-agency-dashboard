import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    {
      name: "chrome-snoop-logger",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url?.includes("/.well-known/appspecific")) {
            console.log("🤖 Chrome DevTools is sniffing around:", req.url);
          }
          next();
        });
      },
    },
  ],
  ssr: {
    noExternal: [/@syncfusion/],
  },
});
