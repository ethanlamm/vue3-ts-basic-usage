<template>
    <div>
        <div>在模板中直接使用: Hello {{ name }}, {{ msg }}</div>
        <div>count: {{ count }}</div>
        <button @click="change">emit('change', 1)</button>&nbsp;
        <button @click="update">emit('update', '!')</button>
    </div>
</template>

<script setup lang="ts">
// ✨defineProps
// 注意❗：
// 1）运行时声明 和 基于类型的声明，两者不能同时使用！只能二选一
// 2）使用defineProps时，不能设置默认值，需要借助withDefaults

// 1️⃣运行时声明
// const props = defineProps({
//     name: { type: String, required: true },
//     msg: String
// })

// 2️⃣基于类型的声明
// 写法一
// const props = defineProps<{
//     name: string
//     msg?: string
// }>()
// 写法二
interface Props {
    name: string
    count: number
    msg?: string
}
// const props = defineProps<Props>()

// ✨withDefaults：定义默认值
// const props = withDefaults(defineProps<Props>(), {
//     name: 'ethan',
//     msg: 'chear up!'
// })

// ✨响应式语法糖：props结构——定义默认值
// 需要手动开启：https://cn.vuejs.org/guide/extras/reactivity-transform.html#explicit-opt-in
const { name = 'ethan', msg = 'chear up!!!', count } = defineProps<Props>()
// count没有在这里结构出来，但也可以直接在模板中使用
// 但在<script setup>中使用props(接收)时，需要解构出来，或者props.name、props.msg...
// --------------------------------------------------


// ✨defineEimts
// 1️⃣运行时声明(较简洁)
// const emit = defineEmits(['change','update'])

// 2️⃣基于类型的声明(更精确)
const emit = defineEmits<{
    (e: 'change', num: number): void
    (e: 'update', suffix: string): void
}>()

const change = () => {
    emit('change', 1)
}

const update = () => {
    emit('update', '!')
}
</script>

<style scoped>

</style>