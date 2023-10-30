<!-- 个人中心 -->
<template>
    <div>
        <h1>{{ name }}</h1>
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '555-555-5555'
        }
    }
}
</script>
