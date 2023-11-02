<template>
    <Waterfall :list="listInfo" :gutter="12" :breakpoints="{
        1200: { rowPerView: 5 },
        1000: { rowPerView: 4 },
        750: { rowPerView: 3 },
        450: { rowPerView: 2 }
    }">
        <template #item="{ item, url, index }">
            <div class="card" @click="this.$router.push('/product/'+this.listInfo[index].itemIndex)">
                <div class="sb-card-like">
                    <HeartOutlined />
                    <span>{{ this.listInfo[index].like }}</span>
                </div>
                <LazyImg :url="url" style="border-radius: 12px;" />

                <p class="sb-card-text">
                    <span>{{ this.listInfo[index].title }}</span>
                    <a-space>
                        <a-avatar :size="16" :src="this.listInfo[index].authorAvater">
                        </a-avatar>
                        <span>{{ this.listInfo[index].author }}</span>

                    </a-space>

                </p>
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
    props:{
        listInfo:Array
    }
};
</script>
<style>
.sb-card-text {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
}

.sb-card-text span:first-child {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 18px;
    color: rgba(29, 33, 41, 1);

}
.sb-card-text span:last-child {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(134, 144, 156, 1);
    text-align: left;
}
.sb-card-like{
    top:8px;
    right: 8px;
    border-radius: 999px;
    backdrop-filter: blur(10px);
    padding: 8px;
    z-index: 2;
    position:absolute;
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