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
            },
        },
        colors: {
            'white': '#fff',
            'input_bg': '#e8f0fe',
            'green_600': '#16a34a',
            'danger': '#dc2626',
            'light_blue': 'rgb(166, 194, 228)',
            'wrapper-alpha-9': 'rgba(20, 30, 50, .9)',
            'card_bg': 'rgb(24, 39, 63)'
        },
        backgroundImage: {
            'auth': "url('/images/backgrounds/auth-bg.jpg')",
        }
    },

    plugins: [forms, typography],
};
