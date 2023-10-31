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
            <!-- <nav>
                <ul>
                    <li><router-link to="/main/index">主页</router-link></li>
                    <li><router-link to="/main/productlist">产品列表</router-link></li>
                    <li><router-link to="/main/cart">购物车</router-link></li>
                    <li><router-link to="/main/personal">个人中心</router-link></li>
                </ul>
            </nav> -->
            <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" click="handleClick()"/>
        </footer>

    </div>
</template>

<script>
import { useRouter, RouterView } from 'vue-router';
import { ref,watch } from 'vue';

export default {
    setup() {
        const current = ref(['index']);
        const router = useRouter();
        const items = ref([
            {
                key: 'index',
                label: '首页',
                title: '首页'
            },
            {
                key: 'productlist',
                label: '产品列表',
                title: '产品列表'
            },
            {
                key: 'cart',
                label: '购物车',
                title: '购物车'
            },
            {
                key: 'personal',
                label: '个人中心',
                title: '个人中心'
            }
        ]);
        watch(current, (newValue) => {
            router.push('/main/' + newValue);
            
        });
        return {
            current,
            items
        };
    }
};
</script>

<style>
/* Your component styles here */
</style>
