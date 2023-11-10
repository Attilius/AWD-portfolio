<script setup>
import { Head, Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import BackLink from '@/Components/BackLink.vue';

const props = defineProps({
    'canLogin': Boolean,
    'isAdmin': Boolean
});
</script>

<template>
    <Head title="Contact">
        <title>Contact</title>
    </Head>

    <header class="w-full h-40 absolute top-0 flex justify-between items-center px-10 z-10">
        <ApplicationLogo class="z-10" />
        <BackLink :routeName="'welcome-page'" class="hover:text-orange" />

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


        <div class="sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-no-repeat
                bg-cover selection:bg-red-500 selection:text-white"
        >
            <div class="w-full min-h-screen bg-wrapper-alpha-96">

                <div class="isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8 text-white mt-10">
                    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl
                                sm:top-[-20rem]"
                         aria-hidden="true"
                    >
                        <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2
                                    rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30
                                    sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                             style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="mx-auto max-w-2xl text-center">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center
                                   items-center"
                        >
                            Contact <span class="h-20 w-20 flex justify-center items-center text-white bg-orange
                                                 rounded-full border-orange border-2">me</span>
                        </h2>
                        <p class="mt-2 text-lg leading-8 text-light_blue">
                            Aute magna irure deserunt veniam aliqua magna enim voluptate.
                        </p>
                    </div>
                    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label for="first-name"
                                       class="block text-sm font-bold leading-6 text-light_blue"
                                >
                                    First name
                                </label>
                                <div class="mt-2.5">
                                    <input type="text"
                                           name="first-name"
                                           id="first-name"
                                           autocomplete="given-name"
                                           class="block w-full rounded-md border-0 px-3.5 py-2 text-card_bg shadow-sm
                                                  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset
                                                  focus:ring-orange sm:text-sm sm:leading-6 bg-input_bg"
                                    />
                                </div>
                            </div>
                            <div>
                                <label for="last-name"
                                       class="block text-sm font-bold leading-6 text-light_blue"
                                >
                                    Last name
                                </label>
                                <div class="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autocomplete="family-name"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 text-card_bg shadow-sm
                                                  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset
                                                  focus:ring-orange sm:text-sm sm:leading-6 bg-input_bg"
                                    />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="company"
                                       class="block text-sm font-bold leading-6 text-light_blue"
                                >
                                    Subject
                                </label>
                                <div class="mt-2.5">
                                    <input type="text"
                                           name="subject"
                                           id="subject"
                                           autocomplete="organization"
                                           class="block w-full rounded-md border-0 px-3.5 py-2 text-card_bg shadow-sm
                                                  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset
                                                  focus:ring-orange sm:text-sm sm:leading-6 bg-input_bg"
                                    />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="email"
                                       class="block text-sm font-bold leading-6 text-light_blue"
                                >
                                    Email
                                </label>
                                <div class="mt-2.5">
                                    <input type="email"
                                           name="email"
                                           id="email"
                                           autocomplete="email"
                                           class="block w-full rounded-md border-0 px-3.5 py-2 text-card_bg shadow-sm
                                                  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset
                                                  focus:ring-orange sm:text-sm sm:leading-6 bg-input_bg"
                                    />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message"
                                       class="block text-sm font-bold leading-6 text-light_blue"
                                >
                                    Message
                                </label>
                                <div class="mt-2.5">
                                    <textarea name="message"
                                              id="message"
                                              rows="4"
                                              class="block w-full rounded-md border-0 px-3.5 py-2 text-card_bg
                                                     shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                                     focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm
                                                     sm:leading-6 bg-input_bg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mt-10">
                            <button type="submit" class="block w-full rounded-md bg-orange px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    <hr class="border-t border-light_blue mt-20" />

    <div class="flex flex-wrap justify-center items-center w-1/3 mx-auto">
        <ApplicationLogo class="z-10" />
        <p class="text-light_blue text-sm relative -top-10">© 2023 Attilius Web Development. All rights reserved.</p>
    </div>

</template>
