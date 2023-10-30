<!-- main的入口 -->
<template>
    <div>
        <header>
            <h1>My App</h1>
        </header>
        <main>
            <!-- Your main content here -->
            <RouterView />
        </main>
        <footer>
            <nav>
                <ul>
                    <li><router-link to="/main/index">主页</router-link></li>
                    <li><router-link to="/main/productlist">产品列表</router-link></li>
                    <li><router-link to="/main/cart">购物车</router-link></li>
                    <li><router-link to="/main/personal">个人中心</router-link></li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

</script>

<style>
/* Your component styles here */
</style>
