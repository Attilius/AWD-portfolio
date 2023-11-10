<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    routeName: String
});

</script>

<template>
    <Link :href="route(routeName)"
          class="text-white text-md font-medium bg-card_bg rounded-full px-5 py-2 shadow-md"
    >
        <font-awesome-icon :icon="['fas', 'angle-left']" />
        Back
    </Link>
</template>
