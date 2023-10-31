<template>
    <div class="min-h-screen bg-auth bg-cover">
        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-wrapper-alpha-9">
            <div>
                <slot name="logo" />
            </div>

            <div class="w-full sm:max-w-md px-6 py-4 bg-card_bg shadow-md overflow-hidden sm:rounded-lg">
                <slot />
            </div>
        </div>
    </div>
</template>
