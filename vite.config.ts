import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command, ssrBuild }) => {
  console.log("mode", mode, process.cwd(), command); //mode production /Users/lilithgames/Desktop/my-react-app
  //process.cwd() 获取绝对路径
  const baseUrlObj = loadEnv(mode, process.cwd());
  console.log("baseUrlObj", baseUrlObj);

  // {
  //   VITE_ENV_TEST: 'https:www.xxx.com',
  //   VITE_PRO_URL1: 'https:www.xxx1.com',
  //   VITE_PRO_URL2: 'https:www.xxx2.com',
  //   VITE_PRO_URL3: 'https:www.xxx3.com'
  // }

  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [postcssPresetEnv({})],
      },
    },
    server: {
      origin: "0.0.0.0",
    },
  };
});
