<template>
    <div>
        <div>Refs</div>
        <div>普通元素refs: <input type="text" ref="inputRef">&nbsp;
            <button @click="inputFocus">focus</button>
        </div>
        <div>
            <div>组件refs(获取组件的属性或调用组件的方法):</div>
            <button @click="getValue">获取属性</button>&nbsp;
            <button @click="callback">调用方法</button>
            <RefsHelper ref="comRef" />
        </div>
    </div>
</template>

<script setup lang="ts">
import RefsHelper from '@/components/RefsHelper.vue';
import { onMounted, ref } from 'vue'

// 1️⃣普通元素模板引用：需要通过一个显式指定的泛型参数和一个初始值 null 来创建
const inputRef = ref<HTMLInputElement | null>(null)

const inputFocus = () => {
    // 可选链(排除null)
    inputRef.value?.focus()
}

// 2️⃣组件模板引用：首先需要通过 typeof 得到其类型，再使用TypeScript内置的 InstanceType 工具类型来获取其实例类型
// ❗❗❗前提条件：被引用的组件需要暴露属性和方法 defineExpose
const comRef = ref<InstanceType<typeof RefsHelper> | null>(null)

onMounted(() => {
    console.log('onMounted', comRef.value);
})

const getValue = () => {
    // 可选链(排除null)
    console.log('count', comRef.value?.count);
}

const callback = () => {
    // 可选链(排除null)
    comRef.value?.add()
}
</script>

<style scoped>

</style>