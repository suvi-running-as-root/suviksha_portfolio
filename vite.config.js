import { defineConfig } from 'vite';

// Relative paths keep assets working at both username.github.io/repository and custom domains.
export default defineConfig({ base: './' });
