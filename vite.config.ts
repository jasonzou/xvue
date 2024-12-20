import { defineConfig, loadEnv } from 'vite'
import alias from './vite/alias'
import setupVitePlugins from './vite/plugins'
import packageJson from './package.json'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: setupVitePlugins(env, command === 'build'),
    resolve: {
      alias
    },
    define: {
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version)  
    },
    server: {
      port: 3000,
      cors: true,
      // proxy: {
      //   '/user/login': 
      //   {
      //     target: env.VITE_APP_API_BASEURL,
      //     changeOrigin: true,
      //   },
      // },
    },
  }
})
