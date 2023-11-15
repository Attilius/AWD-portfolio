<script setup>
import { computed, ref, watch } from "vue";
import { Link } from '@inertiajs/vue3';
import Caret from '@/Components/Caret.vue';

const props = defineProps({
    item: Object
});

const status = ref('closed');

const setStatus = computed({
    set(value) {
        status.value = value;
    }
});

function updateStatus(status) {
    setStatus.value = status;
}

watch(status, (newState) => {
    const subMenu = document.getElementById('sub-' + props.item.name);

    if (newState.state === 'opened')
    {
        subMenu.classList.remove('hidden');
    }

    if (newState.state === 'closed')
    {
        subMenu.classList.add('hidden');
    }
})

</script>

<template>
    <Link v-if=" ! item.isHaveSubmenu " :href="route(item.url)">
        <button :id="'menu-item-' + item.name"
                class="font-thin hover:text-white hover:bg-light w-90 flex justify-between items-center
                       mx-auto p-2 focus:bg-light focus:text-white rounded-lg cursor-pointer z-10"
        >
            <span class="flex justify-center items-center">
                <font-awesome-icon class="px-3" :icon="item.icon" />
                {{ item.name }}
            </span>
            <Caret v-if="item.isHaveSubmenu"
                   :id="'menu-item-' + item.name"
                   @updateState="updateStatus"
            />

        </button>
    </Link>

    <button v-if="item.isHaveSubmenu" :id="'menu-item-' + item.name"
            class="font-thin hover:text-white hover:bg-light w-90 flex justify-between items-center
                       mx-auto p-2 focus:bg-light focus:text-white rounded-lg cursor-pointer z-10"
    >
            <span class="flex justify-center items-center">
                <font-awesome-icon class="px-3" :icon="item.icon" />
                {{ item.name }}
            </span>
        <Caret v-if="item.isHaveSubmenu"
               :id="'menu-item-' + item.name"
               @updateState="updateStatus"
        />

    </button>

    <!-- Submenu -->

    <div v-if="item.isHaveSubmenu"
         :id="'sub-' + item.name"
         class="hidden w-90 bg-wrapper-alpha-9 rounded-xl mx-auto pb-8 relative -top-2"
         :class=" item.submenu.length !== 5 ?  'h-[' + item.submenu.length * 40 + 'px]' : 'h-[230px]'"
    >
        <div v-for="(submenuItem, index) in item.submenu"
             :key="index"
             class="font-thin pl-10 relative -left-3 -top-3"
             :class="'-top-[' + (index * 20) + 'px]'"
        >
            <div class="flex justify-center items-center w-8 h-10 line"
            >
                <div class="h-full w-full pipe-line"></div>
                <Link class="hover:text-white"
                      :href="route(submenuItem.url)"
                >
                    <button class="absolute left-14 cursor-pointer flex top-8
                                   justify-between items-center mx-auto p-2 rounded-lg
                                   focus:bg-light focus:text-white hover:bg-light w-9/12 z-10"
                    >
                        {{ submenuItem.name }}
                    </button>
                </Link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.w-90 {
    width: 90%;
}

.pipe-line {
    clip-path: polygon(0 0, 0% 100%, 50% 100%);
    border: solid 1px rgb(156, 163, 162);
    border-bottom-left-radius: 12px;
    position: relative;
    left: -1px;
    top: 12px;
}

.line {
    border-left: solid 1px rgb(156, 163, 162);
}
</style>
