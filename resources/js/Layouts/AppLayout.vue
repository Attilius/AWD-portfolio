<script setup>
import { Head, router } from '@inertiajs/vue3';
import menu from '@/config/SideBarMenu.js';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import MainMenuItem from '@/Components/MainMenuItem.vue';

defineProps({
    title: String,
});

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>
        <Head :title="title">
            <title>{{ title }}</title>
        </Head>

        <div class="min-h-screen bg-card_bg overflow-x-hidden">
            <nav class="bg-card_bg border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-full px-20">
                    <div class="flex justify-between h-16">
                        <div class="w-1/3 flex justify-between">

                            <!-- Logo -->
                            <div class="shrink-0 flex justify-center items-center">
                                <ApplicationLogo class="block h-10 w-auto" />
                            </div>

                            <!-- Page Heading -->

                            <header v-if="$slots.header">
                                <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white">
                                    <slot name="header" />
                                </div>
                            </header>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <button v-if="$page.props.jetstream.managesProfilePhotos"
                                                class="flex text-sm border-2 border-transparent rounded-full
                                                focus:outline-none focus:border-gray-300 transition"
                                        >
                                            <img class="h-8 w-8 rounded-full object-cover"
                                                 :src="$page.props.auth.user.profile_photo_url"
                                                 :alt="$page.props.auth.user.name"
                                            >
                                        </button>

                                        <span v-else class="inline-flex rounded-md">
                                            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                                {{ $page.props.auth.user.name }}

                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Manage Account
                                        </div>

                                        <DropdownLink :href="route('profile.show')">
                                            Profile
                                        </DropdownLink>

                                        <div class="border-t border-gray-200" />

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <DropdownLink as="button">
                                                Log Out
                                            </DropdownLink>
                                        </form>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container">
                <div class="bg-dark item-sidebar pb-40">
                    <nav id="menu" class="text-gray w-full">
                        <li v-for="item in menu" class="flex-col">
                            <MainMenuItem :item="item" />
                        </li>
                    </nav>
                </div>

                <!-- Page Content -->
                <main>
                    <slot />
                </main>
            </div>

        </div>
    </div>
</template>

<style scoped>
.item-sidebar {
    grid-area: sidebar;
}

.container {
    display: grid;
    grid-template-columns: 20% 84%;
    grid-template-rows: auto;
    grid-template-areas:
    "sidebar main-content";
}

nav > li {
    padding-top: 10px;
    padding-bottom: 10px;
    list-style: none;
    display: flex;
    justify-content: center;
}
</style>
