<!-- ProductDetail.vue -->
<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>商品描述：{{ product.description }}</p>
    </div>
</template>
  
<script>
export default {
    computed: {
        product() {
            const productId = parseInt(this.$route.params.id);
            // 根据 productId 获取商品详细信息，这里可以使用你的数据源或 API 调用
            return {
                id: productId,
                name: '商品1',
                description: '这是商品1的详细描述。',
                // Add more details
            };
        },
    },
};
</script>
  