/** @type {import('tailwindcss').Config} */
const config = { content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'], theme: { extend: { colors: { ink: '#111827', accent: '#2563eb' }, boxShadow: { glow: '0 22px 70px rgba(37,99,235,.15)' } } }, plugins: [] };
module.exports = config;
