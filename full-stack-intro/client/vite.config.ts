import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});

// vite send all the requests that start with slash api I want you to send them to localhost 8080 happens
// only in development. All of our backend apis have to start with /api . When the path starts with /api it is a request
// for our server and it configures through port localhost 8080
// the client is a standard vite application.
// when we run npm install it will copy the example files together.
