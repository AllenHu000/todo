import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 后端服务地址
        changeOrigin: true, // 如果后端需要匹配Origin
        // rewrite: (path) => path.replace(/^\/api/, '/api123/'), // 如果需要修改路径
        rewrite: (path) => path, // 如果需要修改路径
        logLevel: 'debug', // 打开代理日志
      },

    },
  },
});
