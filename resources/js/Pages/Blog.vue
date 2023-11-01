<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    isAdmin: Boolean
});

</script>

<template>
    <Head title="Blog" >
        <title>Blog</title>
    </Head>

    <div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-wrapper-alpha-9 bg-center
                selection:bg-red-500 selection:text-white"
    >
        <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10 text-white">
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
                      dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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

        <h1 class="text-white text-3xl">My Blog Page</h1>
    </div>
</template>
