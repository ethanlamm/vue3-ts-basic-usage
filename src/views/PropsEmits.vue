<template>
    <div>
        <div>defineProps defineEmits</div>
        <div>defineProps 和 defineEmits 都是只能在&lt;script setup&gt;中使用的编译器宏</div>
        <div>他们不需要导入, 它们将自动地在&lt;script setup&gt;中可用</div>
        <br />
        <PropsEmitsHelperVue :name="name" :count="count" @change="changeHandler" @update="updateHandler" />
    </div>
</template>

<script setup lang="ts">
import PropsEmitsHelperVue from '@/components/PropsEmitsHelper.vue';
import { ref } from 'vue'

const name = ref('ethan')
const count = ref(1)

const changeHandler = (num: number) => {
    count.value += num
}

const updateHandler = (suffix: string) => {
    name.value += suffix
}
</script>

<style scoped>

</style>