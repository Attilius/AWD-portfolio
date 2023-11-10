<script setup>
import { Head, Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import BackLink from '@/Components/BackLink.vue';
import TechnologyCard from '@/Components/TechnologyCard.vue';
import ListSubtitle from '@/Components/ListSubtitle.vue';

const props = defineProps({
    'canLogin': Boolean,
    'isAdmin': Boolean
});

const rows = 8/2;

let row = 'grid-rows-' + rows.toString();
</script>

<template>
    <Head title="About">
        <title>About</title>
    </Head>

        <header class="w-full h-40 absolute top-0 flex justify-between items-center px-10">
            <ApplicationLogo class="z-10" />
            <BackLink :routeName="'welcome-page'" class="hover:text-green_600" />

            <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                <Link v-if="isAdmin"
                      :href="route('dashboard')"
                      class="font-bold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
                             focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dashboard
                </Link>
            </div>
        </header>

        <div class="sm:flex sm:justify-center sm:items-center min-h-screen selection:bg-red-500
                    selection:text-white"
        >
            <!-- Background image -->

            <div class="hidden lg:block absolute -top-14 left-20 bg-me bg-top me">
                <div class="h-full w-full wrapper"></div>
            </div>

            <div class="w-full bg-wrapper-alpha-96">

                <!-- Content -->

                <div class="absolute top-40 left-10 flex justify-start content">

                    <!-- Left side -->

                    <div class="w-1/4 flex-col content-top">

                        <div class="min-w-max relative top-5 bg-me-color bg-cover bg-no-repeat me-color shadow-2xl
                                    rounded-2xl img"
                        ></div>

                        <div class="mt-10">
                            <h1 class="text-white text-3xl text-center font-bold">Attila Fanczi</h1>

                            <ul class="w-40 flex justify-center items-center mx-auto my-5">
                                <li class="mx-2 text-lg text-wrapper-alpha-96">
                                    <div class="h-8 w-8 bg-light_blue rounded-full flex justify-center items-center
                                                hover:bg-green_600 hover:text-white cursor-pointer">
                                        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                                    </div>
                                </li>
                                <li class="mx-2">
                                    <div class="h-8 w-8 bg-light_blue rounded-full flex justify-center items-center
                                                hover:bg-green_600 hover:text-white cursor-pointer text-xl">
                                        <font-awesome-icon :icon="['fab', 'github']" />
                                    </div>
                                </li>
                                <li class="mx-2">
                                    <div class="h-8 w-8 bg-light_blue rounded-full flex justify-center items-center
                                                hover:bg-green_600 hover:text-white cursor-pointer text-xl">
                                        <font-awesome-icon :icon="['fab', 'stack-overflow']" />
                                    </div></li>
                            </ul>

                            <!-- Download CV -->

                            <button class="w-40 bg-card_bg p-2 text-light_blue rounded-full flex justify-around
                                        items-center shadow-2xl mx-auto my-2 cursor-pointer active:outline
                                        active:outline-2 active:rounded-full active:outline-green_600
                                        hover:text-green_600"
                            >
                                <span>Download CV</span>
                                <font-awesome-icon :icon="['fas', 'download']" />
                            </button>

                            <p class="w-9/12 text-white text-center text-sm mx-auto mt-4">
                                ''A successful person is one who gets up in the morning, goes to bed at night and does what he likes in between.''
                            </p>
                        </div>
                    </div>

                    <!-- Right side -->

                    <div class="lg:mx-36 content-bottom">
                        <div>
                            <h1 class="text-white text-5xl text-bold text-center lg:text-start mt-5">About Me</h1>
                            <p class="text-white text-sm mt-5">
                                After my college studies in 2020, because of established the situation I decided to pursue a career in programming. My interest is mostly focused on
                                <span class="text-[#8892bf] font-bold">PHP</span> and <span class="text-[#FFFF00] font-bold">JavaScript</span>.
                                I've also found a new hobby in programming, because it's has many challenge. Problem solving has become a passion of mine over the years. Another hobby is cycling.
                            </p>

                            <h2 class="text-white text-3xl text-center lg:text-start my-5">Skills</h2>

                            <!-- Tech skill list -->

                            <ListSubtitle title="languages" />

                            <ul class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4
                                       md:grid-cols-3 list">
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                            </ul>

                            <ListSubtitle title="frameworks" />

                            <ul class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4
                                       md:grid-cols-3 list">
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="visual studio code" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                            </ul>

                            <ListSubtitle title="other" />

                            <ul class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4
                                       md:grid-cols-3 list">
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                                <li class="">
                                    <TechnologyCard name="php" logo_src="/images/logo/php.png" :times="5" />
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<style scoped>
header {
    z-index: 100 !important;
}
.me {
    height: 800px;
    width: 800px;
    background-size: 140%;
}

.me-color {
    height: 300px;
    width: 300px;
    margin-left: 10px;
}

.wrapper {
    background: linear-gradient(
        180deg,
        rgba(20, 30, 50, .8),
        rgba(20, 30, 50, .8),
        rgba(20, 30, 50, .8),
        rgba(20, 30, 50, 1));
}

@media(max-width: 1024px) {
    .content {
        width: 100%;
        flex-direction: column;
        left: 0;
    }

    .content-top {
        width: 100%;
        position: static;
        margin-left: auto;
        margin-right: auto;
    }

    .img {
        position: static;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }

    .content-bottom {
        width: 75%;
        text-align: justify;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 40px;
    }

    li {
        margin-left: auto;
        margin-right: auto;
    }
}

@media(max-width: 900px) {
    .list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media(max-width: 600px) {
    .list {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
