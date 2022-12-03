<template>
    <div>
        <div>event</div>
        <div>双向绑定(v-model): <input type="text" v-model="value1" @input="inputHandler1"></div>
        <div>双向绑定(v-bind:value、@input):
            <input type="text" :value="value2" @input="inputHandler2">
        </div>
        <br />
        <div>vue3中, 对<b>组件</b>进行双向绑定、也是vue3中v-model语法糖:</div>
        <div>:modelValue="msg"、@update:modelValue="msg=$event"</div>
        <br />
        <div>vue2中, v-model语法糖:</div>
        <div>:value="msg"、@input="msg=$event"</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref()
const value2 = ref()

const inputHandler1 = () => {
    console.log(value1.value);
}

// `e` 隐式地标注为 `any` 类型，需要显式地为事件处理函数的参数标注类型
const inputHandler2 = (e: Event) => {
    // 注意❗：e.target 可能为null，需要显示强制转换为 HTMLElement
    console.log((e.target as HTMLInputElement).value)
    value2.value = (e.target as HTMLInputElement).value
}
</script>

<style scoped>

</style>