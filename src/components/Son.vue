<template>
    <div>
        <div>Son组件</div>
        <div>book(非响应式数据): {{ book }}</div>
        <div>car(响应式数据): {{ car }}</div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { BookKey, CarKey } from '@/utils/providekeys';
// as 强制转换
import type { Ref } from 'vue'
// 放在外面处理undefined
import injectStrict from '@/utils/injectStrict';

// inject
// 1️⃣非响应式数据
// ❗book可能为 undefined，需要处理：给一个默认值
// const book = inject(BookKey)
const book = inject(BookKey, { name: '', price: 0 })
console.log('book', book)

// 2️⃣相应式数据
// ❗car可能为 undefined
// 处理：
// 1）链操作符 ?
const car = inject(CarKey)
// Ref类型：.value
console.log('car', car?.value)

// 2）as 强制转换
const car1 = inject(CarKey) as Ref
console.log('car1', car1.value)

// 3）injectStrict(放在外面处理undefined)
// 此时car1的值则不包含undefined
const car2 = injectStrict(CarKey)
console.log('car2', car2.value);

</script>

<style scoped>

</style>