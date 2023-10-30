<!--  购物车页面 -->
<template>
    <div>
        <h1>购物车</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: '商品1', price: 100 },
                { id: 2, name: '商品2', price: 200 },
                { id: 3, name: '商品3', price: 300 },
            ],
        };
    },
};
</script>
