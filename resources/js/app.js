import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faDownload, faFilter, faEye, faAnglesLeft, faAngleDown, faAngleUp, faL, faHome,
        faClapperboard, faUsersLine, faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faStackOverflow, faBlogger, faSquareGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

library.add( faAngleLeft, faLinkedinIn, faGithub, faStackOverflow, faDownload, faFilter, faEye, faAnglesLeft, faL,
             faBlogger, faHome, faAngleDown, faAngleUp, faClapperboard, faUsersLine, faNewspaper, faEnvelope,
             faFileLines, faSquareGooglePlus );

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
