import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                mocha: ['Mochiy Pop One'],
                infant: ['Ysabeau Infant'],
            },
        },
        colors: {
            'white': '#fff',
            'input_bg': '#e8f0fe',
            'green_600': '#16a34a',
            'danger': '#dc2626',
            'light_blue': 'rgb(166, 194, 228)',
            'wrapper-alpha-48': 'rgba(20, 30, 50, .48)',
            'wrapper-alpha-6': 'rgba(20, 30, 50, .6)',
            'wrapper-alpha-9': 'rgba(20, 30, 50, .9)',
            'wrapper-alpha-95': 'rgba(20, 30, 50, .95)',
            'wrapper-alpha-96': 'rgba(20, 30, 50, .96)',
            'card_bg': 'rgb(24, 39, 63)',
            'card-bg-light': 'rgb(25, 48, 78)',
            'project-blue': '#2563eb',
            'orange': '#FFA500',
            'dark': 'rgb(17, 24, 39)',
            'dark2': 'rgb(24, 24, 24)',
            'light': 'rgb(31, 41, 55)',
            'gray': 'rgb(156, 163, 162)'
        },
        backgroundImage: {
            'auth': "url('/images/backgrounds/auth-bg.jpg')",
            'modern': "url('/images/backgrounds/modern.jpg')",
            'me': "url('/images/backgrounds/me-2.png')",
            'me-color': "url('/images/backgrounds/me-color.jpg')",
            'contact': "url('/images/backgrounds/contact.jpg')",
        }
    },

    plugins: [forms, typography],
};
