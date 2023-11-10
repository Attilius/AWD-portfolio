<script setup>

const props = defineProps({
    name: String,
    logo_src: String,
    times: Number
});
</script>

<template>
    <div class="flex justify-start bg-card_bg rounded-3xl px-5 py-3 h-21 w-56 cursor-pointer hover:bg-card-bg-light">
        <div class="flex justify-center items-center">
            <img v-if="name !== 'all'" class="h-10" :src="logo_src" :alt="name + '-logo'">
            <img v-else class="invisible h-10" :src="logo_src" :alt="name + '-logo'">
        </div>
        <div class="flex-col ml-3 my-auto">
            <h3 class="text-white text-md capitalize leading-5">{{ name }}</h3>
            <p v-if="name !== 'all'" class="text-xxs text-light_blue capitalize">
                projects
                <span class="relative top-0.5 px-2">*</span>
                {{ times }} times
            </p>
        </div>
    </div>
</template>

<style scoped>
.text-xxs {
    font-size: 10px;
}

.h-21 {
    height: 84px;
}
</style>
