import type { InjectionKey, Ref } from 'vue'
// Vue 提供了一个 InjectionKey 接口，它是一个继承自 Symbol 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型

// 可从types.d.ts类型声明文件中引入
interface Book {
    name: string
    price: number
}

interface Car {
    brand: string
    price: number
}

// 1️⃣非响应式数据
export const BookKey: InjectionKey<Book> = Symbol('Book')

// 2️⃣响应式数据 Ref
export const CarKey: InjectionKey<Ref<Car>> = Symbol('Car')