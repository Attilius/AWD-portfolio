import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faDownload, faFilter, faEye } from '@fortawesome/free-solid-svg-icons';
import { faAvianex, faFacebookF, faTwitter, faLinkedinIn, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

library.add( faAngleLeft, faLinkedinIn, faGithub, faStackOverflow, faDownload, faFilter, faEye );

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('font-awesome-icon', FontAwesomeIcon)
            .mount(el);
    },
    progress: {
        color: '#16a34a',
    },
});
