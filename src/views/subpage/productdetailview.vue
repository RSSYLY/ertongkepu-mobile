<!-- ProductDetail.vue -->
<template>
    <div style="background-color: #f7f8fa;">
        <a-carousel style="">
            <div class="fuck" v-for="item in product.imageSrcs">
                <div
                    :style="{ backgroundImage: 'url(' + item + ')', height: '390px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }">
                </div>
            </div>
        </a-carousel>
        <div class="detail-header-card">
            <div class="detail-header-card-title">{{ product.title }}</div>
            <div class="detail-header-card-text">{{ product.text }}</div>
            <div class="detail-header-card-bar">
                <div class="detail-header-card-bar-targets">
                    <a-space :size="1">
                        <template #split>
                            <a-divider type="vertical" style="background-color:  rgba(229, 230, 235, 1);;" />
                        </template>
                        <span v-for="item in product.targets">
                            {{ item }}
                        </span>
                    </a-space>
                    <span style="color: rgba(255, 165, 0, 1);">更多
                        <RightOutlined style="color: rgba(22, 93, 255, 0.8)" />
                    </span>
                </div>
                <div class="detail-header-card-bar-others">
                    <a-space>
                        <span style="color: rgba(255, 125, 0, 1); font-size: 14px;">
                            <HeartOutlined style="color: rgba(255, 125, 0, 1);" />{{ product.like }}
                        </span>
                        <span>“{{ product.comment.mostUseful }}”</span>
                    </a-space>
                    <span style="color: rgba(255, 165, 0, 1);">{{ product.comment.commentList.length }}条评价
                        <RightOutlined style="color: rgba(22, 93, 255, 0.8)" />
                    </span>
                </div>
            </div>
            <div class="detail-header-card-location" v-if="product.location.street">
                <div class="detail-header-card-location-text">
                    <div>
                        {{ product.location.street }}
                    </div>
                    <div>
                        距离您{{ product.location.length }}m
                    </div>
                    <div>
                        {{ product.location.city }}
                    </div>
                </div>
                <div class="detail-header-card-location-action">
                    <div class="detail-header-card-location-action-item">
                        <PhoneOutlined /><span>电话</span>
                    </div>
                    <div class="detail-header-card-location-action-item">
                        <EnvironmentOutlined /><span>位置</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-info">
            <div v-for="item in product.content">
                <img :src="item">
            </div>
        </div>
        <div class="item-header" style="margin-top:26px;padding: 0% 6% 0% 6%; ">
            <span>评论</span>
            <span>查看全部
                <RightOutlined />
            </span>
        </div>
        <div style="margin-top:26px;padding: 0% 6% 0% 6%; ">
            <Comment1 :product="product" />
        </div>

        <div class="item-header" style="margin-top:26px;padding: 0% 6% 0% 6%; ">
            <span>更多精彩游戏</span>
            <span>查看全部
                <RightOutlined />
            </span>
        </div>
        <div class="list-content-waterfull" style="padding: 0% 6% 60px 6%; ">
            <div style="margin: 0 -12px;">
                <WaterfullCard1 :listInfo="waterfull1Data" />
            </div>

        </div>
    </div>
</template>
  
<script>
import { HeartOutlined, PhoneOutlined, EnvironmentOutlined, RightOutlined, CommentOutlined } from '@ant-design/icons-vue';
import Comment1 from '@/components/comment1.vue';
import WaterfullCard1 from '@/components/waterfullcard1.vue';
import productInfoImgUrl from '@/assets/img/productinfo.png';
export default {
    computed: {
        product() {
            // 从路由参数中获取商品 id
            const productId = parseInt(this.$route.params.id);
            // 根据 productId 获取商品详细信息，这里可以使用你的数据源或 API 调用
            const productList = [{
                imageSrcs: ['https://picsum.photos/800/300?random=1', 'https://picsum.photos/400/300?random=2', 'https://picsum.photos/600/300?random=3'],
                title: '趣味乐园',
                text: '豪华型 | 2020年开业 | 人均消费￥100',
                like: 22,
                id: 1,
                targets: ['儿童游戏', '益智', '创意', '乐趣满满'],
                comment: {
                    mostUseful: '环境好，服务态度好',
                    commentList: [
                        {
                            user: '唐霞',
                            userAvater: 'https://picsum.photos/20/20?random=1',
                            comment: '这个游戏真好玩，我已经玩了好几遍了',
                            time: 1699046059,
                            isUseing: true,
                            subComment: [
                                {
                                    user: '齐焰',
                                    userAvater: 'https://picsum.photos/20/20?random=3',
                                    comment: '我也是，我也是',
                                    time: 1699046059,
                                },
                                {
                                    user: '小光',
                                    userAvater: 'https://picsum.photos/20/20?random=9',
                                    comment: '对，对，对',
                                    time: 1699046059,
                                },
                            ]
                        },
                        {
                            user: '任力',
                            userAvater: 'https://picsum.photos/20/20?random=2',
                            comment: '这个游戏很好玩，音效逼真，让人沉浸其中',
                            time: 1699046059,
                            isUseing: false,
                            subComment: [
                                {
                                    user: '朱芳',
                                    userAvater: 'https://picsum.photos/20/20?random=4',
                                    comment: '你说得对',
                                    time: 1699046059,
                                },
                                {
                                    user: '小理',
                                    userAvater: 'https://picsum.photos/20/20?random=8',
                                    comment: '对',
                                    time: 1699046059,
                                },
                            ]
                        },
                        {
                            user: '彭志霞',
                            userAvater: 'https://picsum.photos/20/20?random=12',
                            comment: '游戏玩法创新独特，给孩子带来了很多乐趣！',
                            time: 1699046059,
                            isUseing: false,
                            subComment: [
                                {
                                    user: '朱芳',
                                    userAvater: 'https://picsum.photos/20/20?random=14',
                                    comment: '你说得对',
                                    time: 1699046059,
                                },
                                {
                                    user: '碧江',
                                    userAvater: 'https://picsum.photos/20/20?random=18',
                                    comment: '对',
                                    time: 1699046059,
                                },
                            ]
                        },

                        {
                            user: '鲁港',
                            userAvater: 'https://picsum.photos/20/20?random=22',
                            comment: '这款游戏非常适合孩子，能够培养他们的思维能力和创造力！',
                            time: 1699046059,
                            isUseing: false,
                            subComment: [
                                {
                                    user: '于卅',
                                    userAvater: 'https://picsum.photos/20/20?random=24',
                                    comment: '你说得对',
                                    time: 1699046059,
                                },
                                {
                                    user: '珠嚄',
                                    userAvater: 'https://picsum.photos/20/20?random=28',
                                    comment: '对',
                                    time: 1699046059,
                                },
                            ]
                        },
                    ]
                },
                location: {
                    city: '陕西省西安市长安区',
                    street: '学府大街1号',
                    length: 802
                },
                content: [
                    productInfoImgUrl,
                ],

            }];
            // 从商品列表中找到对应的商品
            const productInfo = productList.find((item) => item.id === productId);
            // console.log(productInfo);
            return productInfo;
        },
    },
    components: {
        HeartOutlined, PhoneOutlined, EnvironmentOutlined, RightOutlined, WaterfullCard1, CommentOutlined, Comment1
    },
    setup() {
        const waterfull1Data = [
            {
                authorAvater: 'https://picsum.photos/20/20?random=1',
                src: 'https://picsum.photos/200/300?random=1',
                author: '该数据暂未录入',
                title: '趣味拼',
                text: '拼出你的世界',
                like: 30,
                id: 3
            },
            {
                authorAvater: 'https://picsum.photos/20/20?random=2',
                src: 'https://picsum.photos/300/200?random=2',
                author: '该数据咱未录入',
                title: '数字迷宫',
                text: '在数字中迷失自我',
                like: 25,
                id: 4
            },
            {
                authorAvater: 'https://picsum.photos/20/20?random=3',
                src: 'https://picsum.photos/200/200?random=3',
                author: '该数据暂未录入',
                title: '动物翻牌',
                text: '翻开动物的秘密',
                like: 20,
                id: 5
            },
            {
                authorAvater: 'https://picsum.photos/20/20?random=4',
                src: 'https://picsum.photos/200/300?random=4',
                author: '该数据暂未录入',
                title: '画画大师',
                text: '画出你的世界',
                like: 15,
                id: 6
            }

        ];
        return {
            waterfull1Data
        };
    },
    methods: {
        timeToString(timestamp) {
            const date = new Date(timestamp * 1000);
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);
            const hour = ("0" + date.getHours()).slice(-2);
            const minute = ("0" + date.getMinutes()).slice(-2);
            const second = ("0" + date.getSeconds()).slice(-2);
            return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        }
    }
};
</script>
<style>
.detail-header-card {
    position: relative;
    z-index: 2;
    margin: -40px 6% 0 6%;
    padding: 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 1);

}

.detail-header-card-title {
    margin-top: 4px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;
}

.detail-header-card-text {
    margin-top: 6px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;
}

.detail-header-card-bar {
    margin-top: 12px;
    padding: 10px;
    border-radius: 12px;
    background: rgba(247, 248, 250, 1);
}

.detail-header-card-bar-targets {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.detail-header-card-bar-targets span {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
}

.detail-header-card-bar-others {
    margin-top: 12px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.detail-header-card-bar-others span {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
}

.detail-header-card-location {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    /* row-gap: 4px; */
}

.detail-header-card-location-text {
    flex-direction: column;
    row-gap: 4px;
    display: flex;

}

.detail-header-card-location-text div {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(78, 89, 105, 1);
    text-align: left;
    vertical-align: top;
}

.detail-header-card-location-text div:first-child {
    /** 文本1 */
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;
}

.detail-header-card-location-action {
    display: flex;
    align-items: center;
    gap: 24px
}

.detail-header-card-location-action-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.detail-header-card-location-action-item span {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
}

.item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-header span:first-child {
    font-size: 16px;
}

.item-header span:last-child {
    font-size: 14px;
    color: #999;
}

.product-info {
    margin-top: 26px;
    padding: 0% 6% 0% 6%;
    display: flex;
    flex-direction: column;
}

.product-info img {
    width: 100%;
}</style>