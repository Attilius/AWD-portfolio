<script setup>
import { Head, Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';

const props = defineProps({
    'canLogin': Boolean,
    'isAdmin': Boolean
});
</script>

<template>
    <Head title="Welcome">
        <title>Welcome</title>
    </Head>

    <div class="min-h-screen bg-modern bg-cover bg-no-repeat">
        <div class="sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-no-repeat
                bg-cover selection:bg-red-500 selection:text-white"
        >
            <div class="w-full min-h-screen bg-wrapper-alpha-96">
                <div class="ml-10">
                    <ApplicationLogo />
                </div>
                <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                    <Link v-if="isAdmin"
                          :href="route('dashboard')"
                          class="font-bold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
                         focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Dashboard
                    </Link>
                </div>

                <div class="absolute top-1/4 lg:top-1/2 left-5 sm:left-12 xl:left-40 flex main-content">
                    <div class="flex justify-center items-center mx-auto">
                        <div>
                            <h1 class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-infant
                                   font-black capitalize"
                            >
                                Hi There,
                            </h1>
                            <h1 class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-infant
                                   font-black uppercase"
                            >
                                I am Attila
                            </h1>
                            <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-infant
                                   font-black capitalize"
                            >
                                I am a
                                <span class="inline-block text">&#60;?
                                <span class="text-green_600">Web developer</span>
                                ?&#62;
                            </span>
                            </h1>
                        </div>
                    </div>


                    <div class="flex justify-center items-center mx-auto container-wrapper">
                        <nav class="container">
                            <div class="card">
                                <div id="about-btn" class="bg-card_bg h-full w-full flex justify-center pt-8">
                                    <h2 class="text-white text-md font-medium">About</h2>
                                </div>
                            </div>
                            <div class="card">
                                <div id="about-btn" class="bg-card_bg h-full w-full flex justify-center items-center pt-10">
                                    <Link :href="route('blog-page')"
                                          class="w-full h-full p-14 text-white text-md font-medium"
                                    >
                                        Blog
                                    </Link>
                                </div>
                            </div>
                            <div class="card">
                                <div id="about-btn" class="bg-card_bg h-full w-full flex justify-center pt-8">
                                    <h2 class="text-white text-md font-medium">Project</h2>
                                </div>
                            </div>
                            <div class="card">
                                <div id="about-btn" class="bg-card_bg h-full w-full flex justify-center pt-8">
                                    <h2 class="text-white text-md font-medium">Contact</h2>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.text {
    border-right: 5px solid;
    white-space: nowrap;
    overflow: hidden;
    font-size: .6em;
    letter-spacing: 5px;
    width: 69%;
    animation: typing 2s steps(28) , cursor .6s step-end infinite alternate;
}

@keyframes cursor {
    50% {
        border-color: transparent;
    }
}

@keyframes typing {
    from {
        width: 0;
    }
}

.container {
    position: relative;
    top: -100px;
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.container .card {
    position: relative;
    width: 60%;
    height: 60%;
    margin: -5px -36px;
    cursor: pointer;
    overflow: hidden;
    clip-path: polygon(50% 85%, 0% 0%, 100% 0%);
}

.container .card:nth-child(1) {
    background-color: #16a34a;
}

.container .card:nth-child(2) {
    background-color: orange;
    margin-bottom: 10px;
    margin-top: -20px;
    clip-path: polygon(50% 15%, 0% 100%, 100% 100%);
}

.container .card:nth-child(3) {
    background-color: #2563eb;
}

.container .card:nth-child(4) {
    background-color: #dc2626;
}

.container .card #about-btn {
    position: absolute;
    top: 1%;
    left: 2%;
    width: 96%;
    height: 96%;
    clip-path: polygon(50% 85%, 0% 0%, 100% 0%);
    transition: 0.5s;
}

.container .card:nth-child(2) #about-btn {
    position: absolute;
    top: 3%;
    left: 2%;
    width: 96%;
    height: 96%;
    clip-path: polygon(50% 15%, 0% 100%, 100% 100%);
}

.container .card:hover #about-btn {
    transform: scale(1.2);
}

@media(max-width: 1280px) {
    .text {
        position: relative;
        width: 77%;
        top: 5px;
        font-size: 1em;
    }
}

@media(max-width: 1024px) {
    .text {
        width: auto;
    }

    .main-content {
        flex-direction: column;
        width: 88%;
    }

    .container {
        top: 80px;
        left: 1%;
    }
}

@media(max-width: 400px) {
    .main-content {
        width: 60%;
    }

    .container-wrapper {
        padding-left: 10%
    }
}

@media(max-width: 300px) {
    .container {
        width: 230px;
        height: 250px;
    }

    .container .card:nth-child(2) {
        margin-bottom: 10px;
        margin-top: -10px;
    }
}
</style>
