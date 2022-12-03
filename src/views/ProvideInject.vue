<template>
    <div>
        <div>provide inject: 祖孙组件间传递数据</div>
        <Father />
    </div>
</template>

<script setup lang="ts">
import Father from '@/components/Father.vue';
import { provide, ref } from 'vue'
import { BookKey, CarKey } from '@/utils/providekeys'

const book = { name: '百年孤独', price: 20 }
const car = ref({ brand: 'Audi', price: 300000 })

// provide
// 1️⃣非响应式数据
provide(BookKey, book)

// 2️⃣响应式数据
provide(CarKey, car)

</script>

<style scoped>

</style>