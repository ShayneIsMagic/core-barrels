// astro.config.mjs
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output static files for Cloudflare Pages
  output: 'static',
  
  // Build configuration
  build: {
    // Inline stylesheets smaller than this limit (in bytes)
    inlineStylesheets: 'auto',
  },
  
  // Cloudflare Pages configuration
  site: 'https://corebarrels.com',
  
  // Image optimization
  image: {
    // Disable Astro's image optimization for static builds
    // Cloudflare will handle image optimization
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  
  // Vite configuration for build optimization
  vite: {
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Minify CSS and JS
      minify: 'esbuild',
      // Optimize dependencies
      rollupOptions: {
        output: {
          // Optimize chunk sizes
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    },
    // Optimize for production
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  },
  
  // Experimental features for performance
  experimental