<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';


</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-bold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="bg-light_blue item-main-content w-full h-full flex justify-center items-center">
            main content
        </div>

    </AppLayout>
</template>

<style scoped>
.item-main-content {
    grid-area: main-content;
}

</style>
