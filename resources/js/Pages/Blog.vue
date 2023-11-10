<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import BackLink from '@/Components/BackLink.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    isAdmin: Boolean
});

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        image: '/images/cover/blog/blog.jpg',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: [{ title: 'Marketing', href: '#' }],
        author: {
            name: 'Admin',
            role: 'Developer / AWD',
            href: '#',
            imageUrl:
                '/images/backgrounds/me-color.jpg',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        image: '/images/cover/blog/blog.jpg',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: [{ title: 'Marketing', href: '#' }, { title: 'Test', href: '#' }],
        author: {
            name: 'Admin',
            role: 'Developer / AWD',
            href: '#',
            imageUrl:
                '/images/backgrounds/me-color.jpg',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        image: '/images/cover/blog/blog.jpg',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: [{ title: 'Marketing', href: '#' }],
        author: {
            name: 'Admin',
            role: 'Developer / AWD',
            href: '#',
            imageUrl:
                '/images/backgrounds/me-color.jpg',
        },
    },
    // More posts...
]

</script>

<template>
    <Head title="Blog" >
        <title>Blog</title>
    </Head>

    <header class="w-full h-40 absolute top-0 flex justify-between items-center px-10 z-10">
        <ApplicationLogo class="z-10" />
        <div class="flex justify-center items-center w-1/3">
            <BackLink :routeName="'welcome-page'" class="hover:text-danger" />

            <div v-if="canLogin" class="sm:top-0 sm:right-0 p-6 text-right z-10 text-white">
                <Link v-if="isAdmin"
                      :href="route('dashboard')"
                      class="font-bold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
                             focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dashboard
                </Link>

                <template v-else-if="!$page.props.auth.user">
                    <Link :href="route('login')"
                          class="font-bold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
                             focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Login
                    </Link>

                    <Link v-if="canRegister"
                          :href="route('register')"
                          class="ml-4 font-bold text-gray-600 hover:text-gray-900 dark:text-gray-400
                                 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm
                                 focus:outline-red-500"
                    >
                        Register
                    </Link>
                </template>

                <template v-else>
                    <Dropdown align="right" width="48">
                        <template #trigger>
                        <span class="inline-flex rounded-md">
                            <button type="button"
                                    class="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium rounded-md
                                           text-gray-500 bg-transparent hover:text-gray-700
                                           focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out
                                           duration-150"
                            >
                                {{ $page.props.auth.user.name }}
                            </button>
                        </span>
                        </template>

                        <template #content>
                            <!-- Account Management -->
                            <div class="block px-4 py-2 text-xs text-gray-400 text-left">
                                Manage Account
                            </div>

                            <DropdownLink class="text-left" :href="route('profile.show')">
                                Profile
                            </DropdownLink>

                            <div class="border-t border-gray-200" />

                            <!-- Authentication -->
                            <form @submit.prevent="logout">
                                <DropdownLink as="button">
                                    Logout
                                </DropdownLink>
                            </form>
                        </template>
                    </Dropdown>
                </template>
            </div>

        </div>



    </header>

    <div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-wrapper-alpha-9 bg-center
                selection:bg-red-500 selection:text-white"
    >

        <div class="bg-transparent py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl text-center uppercase">blog</h2>
                    <p class="mt-2 text-lg leading-8 text-light_blue text-center">Learn how to grow your business with our expert advice.</p>
                </div>

                <ul class="w-full flex justify-center items-center border-t border-danger mt-10 pt-10">
                    <li class="capitalize text-white text-lg px-2 py-1 mx-1 rounded-xl bg-card_bg shadow-md cursor-pointer hover:bg-card-bg-light">show all</li>
                    <li class="capitalize text-white text-lg px-2 py-1 mx-1 rounded-xl bg-card_bg shadow-md cursor-pointer hover:bg-card-bg-light">marketing</li>
                    <li class="capitalize text-white text-lg px-2 py-1 mx-1 rounded-xl bg-card_bg shadow-md cursor-pointer hover:bg-card-bg-light">test</li>
                </ul>

                <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16
                            sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    <article v-for="post in posts"
                             :key="post.id"
                             class="flex max-w-xl flex-col items-start justify-between bg-card_bg p-10 shadow-md
                                    cursor-pointer hover"
                    >
                        <div class="w-full flex justify-center items-center gap-x-2 text-xs py-3">
                            <span v-for="categoryItem in post.category"
                               class="z-10 font-medium text-danger"
                            > {{ categoryItem.title }} </span>
                        </div>

                        <img :src="post.image" alt="image">

                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                                <a :href="post.href">
                                    <span class="absolute inset-0" />
                                    {{ post.title }}
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-input_bg">{{ post.description }}</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <!--<img :src="post.author.imageUrl" alt="" class="h-5 w-5 rounded-full" />-->
                            <div class="text-sm leading-6 flex ">
                                <p class="font-semibold">
                                    <span class="capitalize text-white px-1">written by</span>
                                    <span class="text-light_blue px-1">
                                        {{ post.author.name }}
                                    </span>
                                </p>
                                <p class="text-light_blue"><span class="capitalize text-white px-1">on</span>
                                    {{ post.date }}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.hover:hover {
    transform: scale(1.1);
}
</style>
