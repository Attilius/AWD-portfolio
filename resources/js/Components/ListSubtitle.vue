<script setup>

const props = defineProps({
    title: String
});
</script>

<template>
    <div class="flex my-5">
        <h5 class="text-light_blue text-md italic capitalize">{{ title }}</h5>
        <div class="ml-2">
            <hr class="w-16 text-light_blue h-[1px] relative top-3" />
        </div>
    </div>
</template>
