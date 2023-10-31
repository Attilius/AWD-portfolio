<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type"
            class="inline-flex items-center px-4 py-2 border border-green_600 rounded-full font-bold
                   text-xs text-green_600 uppercase tracking-widest hover:bg-green_600 hover:text-white
                   focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-green_600
                   focus:ring-offset-1 transition ease-in-out duration-150"
    >
        <slot />
    </button>
</template>
