<!-- main的入口 -->
<template>
    <div>

        <main class="container">
            <RouterView />
        </main>
        <footer>
            <a-tabs class="buttom-nav" v-model:activeKey="activeKey" size="large" :tabBarGutter="tabBarGutter" centered>
                <a-tab-pane key="index" tab="首页"></a-tab-pane>
                <a-tab-pane key="productlist" tab="分类"></a-tab-pane>
                <a-tab-pane key="cart" tab="购物车"></a-tab-pane>
                <a-tab-pane key="personal" tab="个人中心"></a-tab-pane>
            </a-tabs>
        </footer>

    </div>
</template>

<script>
import { useRouter, RouterView } from 'vue-router';
import { ref, watch } from 'vue';

export default {
    setup() {
        const router = useRouter();
        // 确保底部导航栏默认为当前激活的标签页
        const activeKey = ref(router.currentRoute.value.path.split('/')[2]);
        watch(activeKey, (newValue) => {
            router.push('/main/' + newValue);

        });
        // 标签间隙
        const tabBarGutter = ref(40)
        return{
            activeKey,tabBarGutter
        }
    }
};
</script>

<style>
/* Your component styles here */
.buttom-nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
    z-index: 100;
}

.container {
        width: 100%;
        height: 100%;
        background-color: rgba(247, 248, 250, 1);

    }
</style>
<!-- rgba(255, 165, 0, 1) -->