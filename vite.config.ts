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
      name: "chrome-snoop-silencer",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith("/.well-known/appspecific")) {
            console.log("🤖 Chrome DevTools is sniffing around:", req.url);
            res.statusCode = 204; // No Content
            return res.end();
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
