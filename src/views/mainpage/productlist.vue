<!-- 产品列表 -->
<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Product 1' }
            ]
        }
    }
}
</script>
