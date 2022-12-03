<template>
    <div>
        <div>layout</div>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">ref reactive computed</RouterLink>
                </li>
                <li>
                    <RouterLink to="/event">event</RouterLink>
                </li>
                <li>
                    <RouterLink to="/props&emits">defineProps defineEmits</RouterLink>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>