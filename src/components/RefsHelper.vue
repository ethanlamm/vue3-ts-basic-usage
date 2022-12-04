<template>
    <div>
        <div>RefsHelper</div>
        <div>count: {{ count }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(1)

const add = () => {
    count.value += 1
}

// ✨defineExpose
// https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose
// 注意❗：使用 <script setup> 的组件是默认关闭的——即通过 模板引用 或者 $parent 链获取到的组件的公开实例，不会暴露任何在 <script setup> 中声明的绑定
// 可以通过 defineExpose 编译器宏来显式指定在 <script setup > 组件中要暴露出去的属性
defineExpose({ count, add })

</script>

<style scoped>

</style>