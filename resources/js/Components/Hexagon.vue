<script setup>

const props = defineProps({
    logo_src: String
});
</script>

<template>
    <div class="container">
        <div class="card">
            <div id="technology-logo-box" class="bg-card_bg flex justify-center items-center">
                <img class="logo" :src="logo_src" alt="logo">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100px;
    height: 85px;
    justify-content: center;
    align-items: center;
}

.container .card {
    position: relative;
    width: 60%;
    height: 60%;
    cursor: pointer;
    overflow: hidden;
    background-color: #2563eb;
    clip-path: polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

.container .card #technology-logo-box{
    position: absolute;
    top: 2%;
    left: 2%;
    width: 96%;
    height: 96%;
    clip-path: polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

.logo {
    width: 50%;
}
</style>
