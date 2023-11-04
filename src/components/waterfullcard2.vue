<template>
    <Waterfall :list="listInfo" :gutter="12" :breakpoints="{
        1200: { rowPerView: 5 },
        1000: { rowPerView: 4 },
        750: { rowPerView: 3 },
        450: { rowPerView: 2 }
    }" backgroundColor="transparent">
        <template #item="{ item, url, index }">
            <div class="card" @click="this.$router.push('/product/' + this.listInfo[index].id)">
                <div class="sb-card-2-like">
                    <HeartOutlined />
                    <span>{{ this.listInfo[index].like }}</span>
                </div>
                
                <p class="sb-card-2-text">
                    <span>{{ this.listInfo[index].title }}</span>
                    <span>{{ this.listInfo[index].text }}</span>
                </p>
                <LazyImg :url="url" style="border-radius: 12px;" />

            </div>
        </template>
    </Waterfall>
</template>
<script>
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next';
import { HeartOutlined } from '@ant-design/icons-vue';
import 'vue-waterfall-plugin-next/dist/style.css';
export default {
    components: {
        LazyImg,
        Waterfall,
        HeartOutlined
    },
    // [{src:'./pic.png',like:30,title:'趣味拼图',author:'小明',authorAvater:'./avater.png'}]
    props: {
        listInfo: Array
    }
};
</script>
<style>
.sb-card-2-text {
    z-index:2;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 12px 12px 12px 12px;
    bottom:0;
    width:100%;
    margin-bottom: 0px;
}

.sb-card-2-text span:first-child {
    font-size: 14px;
font-weight: 500;
letter-spacing: 0px;
line-height: 18px;
color: rgba(255, 255, 255, 1);
text-align: left;
}

.sb-card-2-text span:last-child {
    font-size: 12px;
font-weight: 400;
letter-spacing: 0px;
line-height: 16px;
color: rgba(255, 255, 255, 1);
text-align: left;
opacity: 0.7;
}

.sb-card-2-like {
    top: 8px;
    right: 8px;
    border-radius: 999px;
    backdrop-filter: blur(10px);
    padding: 8px;
    z-index: 2;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    /* 字体 */
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
}
</style>