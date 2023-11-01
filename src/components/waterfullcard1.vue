<template>
    <Waterfall :list="list" :gutter="12" :breakpoints="{
        1200: { rowPerView: 5 },
        1000: { rowPerView: 4 },
        750: { rowPerView: 3 },
        450: { rowPerView: 2 }
    }">
        <template #item="{ item, url, index }">
            <div class="card">
                <LazyImg :url="url" style="border-radius: 12px;" />
                <p class="sb-card-text">
                    <span>趣味拼图</span>
                    <a-space>
                        <a-avatar :size="16" :src="avaPath">
                        </a-avatar>
                        <span>小明</span>

                    </a-space>

                </p>
            </div>
        </template>
    </Waterfall>
</template>
<script>
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next';
import 'vue-waterfall-plugin-next/dist/style.css';
export default {
    components: {
        LazyImg,
        Waterfall,
    },
    data() {
        return {
            list: [
                {
                    src: 'https://picsum.photos/200/300?random=1',
                },
                {
                    src: 'https://picsum.photos/200/300?random=2',
                },
                {
                    src: 'https://picsum.photos/200/300?random=3',
                },
                {
                    src: 'https://picsum.photos/200/300?random=4',
                },
                {
                    src: 'https://picsum.photos/200/300?random=5',
                },
                {
                    src: 'https://picsum.photos/200/300?random=6',
                },
                {
                    src: 'https://picsum.photos/200/300?random=7',
                },
                {
                    src: 'https://picsum.photos/200/300?random=8',
                },
                {
                    src: 'https://picsum.photos/200/300?random=9',
                },
                {
                    src: 'https://picsum.photos/200/300?random=10',
                },
                {
                    src: 'https://picsum.photos/200/300?random=11',
                },
                {
                    src: 'https://picsum.photos/200/300?random=12',
                },
                {
                    src: 'https://picsum.photos/200/300?random=13',
                },
                {
                    src: 'https://picsum.photos/200/300?random=14',
                },
                {
                    src: 'https://picsum.photos/200/300?random=15',
                },
                {
                    src: 'https://picsum.photos/200/300?random=16',
                },
                {
                    src: 'https://picsum.photos/200/300?random=17',
                },
                {
                    src: 'https://picsum.photos/200/300?random=18',
                }]
        };
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
</style>