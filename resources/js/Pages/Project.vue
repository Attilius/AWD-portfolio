<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { onMounted } from "vue";
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import BackLink from '@/Components/BackLink.vue';
import Hexagon from '@/Components/Hexagon.vue';
import TechnologyCard from '@/Components/TechnologyCard.vue';
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    'canLogin': Boolean,
    'isAdmin': Boolean
});

const mobile = window.innerWidth < 640;

const people = [
    {
        id: 1,
        name: 'All',
        avatar: '/images/logo/all.png',
    },
    {
        id: 2,
        name: 'Visual Studio Code',
        avatar: '/images/logo/vs-code.png',
    },
    {
        id: 3,
        name: 'Php',
        avatar: '/images/logo/php2.png',
    },
]

const selected = ref(people[0])

onMounted(() => {
    const container = document.getElementById('container');

    container.childNodes.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
           for (let i = 0; i < container.childNodes.length; i++)
           {
               if (i !== index)
               {
                   container.childNodes[i].classList.add('hide');
               }
           }

           item.lastChild.classList.add('bigger');
           item.classList.add('bigger-2');
        });

        item.addEventListener('mouseleave', () => {
            for (let i = 0; i < container.childNodes.length; i++)
            {
                container.childNodes[i].classList.remove('hide');
            }

            item.lastChild.classList.remove('bigger');
            item.classList.remove('bigger-2');
        });
    });
});
</script>

<template>
    <Head title="Project">
        <title>Project</title>
    </Head>

    <header class="w-full h-40 absolute top-0 flex justify-between items-center px-10">
        <ApplicationLogo class="z-10" />
        <BackLink :routeName="'welcome-page'" class="hover:text-project-blue" />

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

    <div class="min-h-screen bg-wrapper-alpha-96">
        <div class="sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-no-repeat
                bg-cover selection:bg-red-500 selection:text-white"
        >
            <div class="w-full min-h-screen bg-wrapper-alpha-96">
                <h1 class="relative top-40 text-white text-4xl font-bold text-center">Projects</h1>

                <div v-if="mobile" class="w-full text-white relative top-40 flex justify-center items-center mt-10 mx-auto">

                    <!-- Select input -->

                    <Listbox as="div" v-model="selected" class="w-1/3">

                        <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">
                            <font-awesome-icon :icon="['fas', 'filter']" />
                            Filter a technology
                        </ListboxLabel>

                        <div class="relative mt-2">
                            <ListboxButton class="relative w-full cursor-default rounded-md bg-card_bg py-1.5 pl-3 pr-10
                                                  text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                                  focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm
                                                  sm:leading-6"
                            >
                                <span class="flex items-center">
                                  <img :src="selected.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
                                  <span class="ml-3 block truncate">{{ selected.name }}</span>
                                </span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                  <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition ease-in duration-100"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0"
                            >
                                <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md
                                                       bg-card_bg py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5
                                                       focus:outline-none sm:text-sm"
                                >
                                    <ListboxOption as="template"
                                                   v-for="person in people"
                                                   :key="person.id"
                                                   :value="person"
                                                   v-slot="{ active, selected }">
                                        <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                            <div class="flex items-center">
                                                <img :src="person.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
                                                <span :class="[selected ? 'font-bold' : 'font-normal', 'ml-3 block truncate']">
                                                    {{ person.name }}
                                                </span>
                                            </div>

                                            <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>

                </div>

                <div v-else class="w-full relative top-40 flex flex-wrap gap-4 justify-center items-center mt-10 mx-auto">
                    <TechnologyCard class="mx-1 shadow-md" name="all" logo_src="" />
                    <TechnologyCard class="mx-1 shadow-md" name="php" logo_src="/images/logo/php.png" :times="5" />
                    <TechnologyCard class="mx-1 shadow-md" name="visual studio code" logo_src="/images/logo/vs-code.png" :times="5" />
                    <TechnologyCard class="mx-1 shadow-md" name="php" logo_src="/images/logo/php.png" :times="5" />
                    <TechnologyCard class="mx-1 shadow-md" name="VS code" logo_src="/images/logo/vs-code.png" :times="5" />
                </div>

                <div id="container" class="w-auto grid grid-cols-1 md:grid-cols-2 gap-14 mb-10 mt-60 mx-20">

                    <div class="w-full h-auto bg-card-bg-light rounded-3xl overflow-hidden cursor-pointer shadow-md trans">
                        <div class="flex flex-wrap justify-center items-center">
                            <Hexagon logo_src="/images/logo/php.png" />
                            <Hexagon logo_src="/images/logo/vs-code.png" />
                        </div>

                        <h1 class="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold p-10">Test-1</h1>
                        <div class="mt-20 trans">
                            <div class="grid grid-cols-2 gap-4 images">
                                <img src="/images/projects/test.jpg" alt="image">
                                <img src="/images/projects/test.jpg" alt="image">
                            </div>
                        </div>
                    </div>

                    <div class="w-full h-auto bg-card-bg-light rounded-3xl overflow-hidden cursor-pointer shadow-md trans">
                        <div class="flex flex-wrap justify-center items-center">
                            <Hexagon logo_src="/images/logo/php.png" />
                            <Hexagon logo_src="/images/logo/vs-code.png" />
                        </div>

                        <h1 class="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold p-10">Test-2</h1>
                        <div class="mt-20 trans">
                            <div class="grid grid-cols-2 gap-4 images">
                                <img src="/images/projects/test.png" alt="image">
                                <img src="/images/projects/test.png" alt="image">
                            </div>
                        </div>
                    </div>

                    <div class="w-full h-auto bg-card-bg-light rounded-3xl overflow-hidden cursor-pointer shadow-md trans">
                        <div class="flex flex-wrap justify-center items-center">
                            <Hexagon logo_src="/images/logo/php.png" />
                            <Hexagon logo_src="/images/logo/vs-code.png" />
                        </div>

                        <h1 class="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold p-10">Test-3</h1>
                        <div class="mt-20 trans">
                            <div class="grid grid-cols-2 gap-4  images">
                                <img src="/images/projects/test.png" alt="image">
                                <img src="/images/projects/test.png" alt="image">
                            </div>
                        </div>
                    </div>

                    <div class="w-full h-auto bg-card-bg-light rounded-3xl overflow-hidden cursor-pointer shadow-md trans">
                        <div class="flex flex-wrap justify-center items-center">
                            <Hexagon logo_src="/images/logo/php.png" />
                            <Hexagon logo_src="/images/logo/vs-code.png" />
                        </div>

                        <h1 class="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold p-10">Test-4</h1>
                        <div class="mt-20 trans">
                            <div class="grid grid-cols-2 gap-4 images">
                                <img src="/images/projects/test.jpg" alt="image">
                                <img src="/images/projects/test.jpg" alt="image">
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
.images {
    transform: rotate(-5deg);
}

.bigger {
    transform: scale(1.2);
    transition: 500ms;
}

.bigger-2 {
    transform: scale(1.1);
    transition: 500ms;
}

.hide {
    opacity: .1;
    transition: 500ms;
}

.trans {
    transition: 500ms;
}
</style>
