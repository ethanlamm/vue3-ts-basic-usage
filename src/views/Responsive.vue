<template>
    <div>
        <div>ref reactive computed</div>
        <br />
        <div>在&lt;script setup&gt;中引入的组件可直接使用：
            <Hello />
        </div>
        <br />
        <b>ref</b>
        <div>msg1: {{ msg1 }} <button @click="change1">click</button></div>
        <div>msg2: {{ msg2 }} <button @click="change2">click</button></div>
        <div>foo: {{ foo }}</div>
        <br />
        <b>reactive</b>
        <div>book1: {{ book1 }}</div>
        <div>book2: {{ book2 }}</div>
        <div>bar: {{ bar }}</div>
        <br />
        <b>computed</b>
        <div>double1: {{ double1 }}</div>
        <div>double2: {{ double2 }}</div>
    </div>
</template>

<script setup lang="ts">
// ✨在此处定义的变量、方法、或引入的组件，可直接在模板中使用
import { reactive, ref, computed } from 'vue'
// import type { Ref } from 'vue'
import Hello from './Hello.vue';
// ---------------------------------

// ✨ref
// 1️⃣ref 会根据初始值推导其类型
const msg1 = ref(1)
const change1 = () => {
    msg1.value += 1
}

// 2️⃣更复杂的ref变量(两种写法)
// const msg2: Ref<number | string> = ref('初始为字符串')
const msg2 = ref<number | string>('初始为字符串')
const change2 = () => {
    if (typeof msg2.value === 'string') {
        msg2.value = 1111
    } else {
        msg2.value = '字符串'
    }
}

// 3️⃣如果指定了一个泛型参数，但没有给出初始值，那么最后得到的就将是一个包含 undefined 的联合类型
const foo = ref<number>()
// ---------------------------------

// ✨reactive
// 1️⃣reactive 会根据初始值推导其类型
const book1 = reactive({ title: 'Vue3 TypeScript' })

// 2️⃣使用接口显式地标注一个 reactive 变量的类型
interface Book {
    title: string
    year?: number
}
const book2: Book = reactive({ title: 'Vue3 TypeScript', year: 2022 })

// 3️⃣空对象
const bar = reactive({})
// ----------------------------------

// ✨computed
// 1️⃣computed 会自动从其计算函数的返回值上推导出类型
const double1 = computed(() => msg1.value * 2)

// 2️⃣通过泛型参数显式指定类型
const double2 = computed<number>(() => msg1.value * 3)

</script>

<style scoped>

</style>