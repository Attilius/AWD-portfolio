<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';

const props = defineProps({
    users: Object
})

</script>

<template>
    <AppLayout title="User Management">
        <template #header>
            <h2 class="font-bold text-xl text-gray-800 leading-tight">
                User Management
            </h2>
        </template>

        <div class="bg-light_blue item-main-content w-full h-full py-20">
            <table class="w-9/12 h-auto mx-auto">
                <thead>
                    <tr class="t-row">
                        <td class="text-md font-bold py-5 text-center">Name</td>
                        <td class="text-md font-bold py-5 text-center">Email</td>
                        <td class="text-md font-bold py-5 text-center">Role</td>
                        <td class="text-md font-bold py-5 text-center">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" class="t-row">
                        <td class="text-center">
                            {{ user.name }}
                        </td>
                        <td class="text-center">
                            {{ user.email }}
                        </td>
                        <td class="text-center">
                            {{ user.role }}
                        </td>
                        <td class="flex w-full justify-around items-center py-2">
                            <button class="w-20 bg-green_600 text-white font-medium p-1 rounded-full">Edit</button>
                            <button class="w-20 bg-danger text-white font-medium p-1 rounded-full">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </AppLayout>
</template>

<style scoped>
.t-row {
    border-bottom: 1px solid rgb(156, 163, 162);
}
</style>
