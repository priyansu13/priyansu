import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { ink: '#111827', accent: '#2563eb' }, boxShadow: { glow: '0 22px 70px rgba(37,99,235,.15)' } } }, plugins: [] };
export default config;
