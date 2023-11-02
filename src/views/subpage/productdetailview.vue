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
                            <a-divider type="vertical" />
                        </template>
                        <span v-for="item in product.targets">
                            {{ item }}
                        </span>
                    </a-space>
                </div>
                <div class="detail-header-card-bar-others">
                    <a-space>
                        <span>
                            <HeartOutlined />{{ product.like }}
                        </span>
                        <span>“{{ product.comment.mostUseful }}”</span>
                    </a-space>
                </div>
            </div>
            <div class="detail-header-card-location">
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
        <div class="comment-header" style="margin-top:26px;padding: 0% 6% 0% 6%; ">
            <span>更多游戏推荐</span>
            <span>查看全部
                <RightOutlined />
            </span>
        </div>
        <div class="comment-content">
            
        </div>
        <div>
            <h2>{{ product.name }}</h2>
            <p>商品描述：{{ product.description }}</p>
        </div>
    </div>
</template>
  
<script>
import { HeartOutlined, PhoneOutlined, EnvironmentOutlined, RightOutlined } from '@ant-design/icons-vue';
export default {
    computed: {
        product() {
            const productId = parseInt(this.$route.params.id);
            // 根据 productId 获取商品详细信息，这里可以使用你的数据源或 API 调用
            const productList = [{
                imageSrcs: ['https://picsum.photos/800/300?random=1', 'https://picsum.photos/400/300?random=2', 'https://picsum.photos/600/300?random=3'],
                title: '趣味拼',
                text: '拼出你的世界',
                like: 22,
                itemIndex: 1,
                targets: ['儿童游戏', '益智', '创意', '乐趣满满'],
                comment: {
                    mostUseful: '这个游戏很好玩',
                    commentList: [
                        {
                            user: '小明',
                            userAvater: 'https://picsum.photos/200/300?random=1',
                            comment: '这个游戏很好玩',
                            time: 1698908810,
                            subComment: [
                                {
                                    user: '小华',
                                    userAvater: 'https://picsum.photos/200/300?random=1',
                                    comment: '你说得对',
                                    time: 1698908810,
                                },
                                {
                                    user: '小光',
                                    userAvater: 'https://picsum.photos/200/300?random=1',
                                    comment: '对',
                                    time: 1698908810,
                                },
                            ]
                        },
                        {
                            user: '小红',
                            userAvater: 'https://picsum.photos/200/300?random=1',
                            comment: '这个游戏很好玩',
                            time: 1698908810,
                            subComment: [
                                {
                                    user: '小华',
                                    userAvater: 'https://picsum.photos/200/300?random=1',
                                    comment: '你说得对',
                                    time: 1698908810,
                                },
                                {
                                    user: '小光',
                                    userAvater: 'https://picsum.photos/200/300?random=1',
                                    comment: '对',
                                    time: 1698908810,
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
                content: '',

            }];
            // 从商品列表中找到对应的商品
            const productInfo = productList.find((item) => item.itemIndex === productId);
            // console.log(productInfo);
            return productInfo;
        },
    },
    components: {
        HeartOutlined, PhoneOutlined, EnvironmentOutlined, RightOutlined
    }
};
</script>
<style>
.detail-header-card {
    position: relative;
    z-index: 2;
    margin: -20px 6% 0 6%;
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

.comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.comment-header span:first-child {
    font-size: 16px;
}

.comment-header span:last-child {
    font-size: 14px;
    color: #999;
}
</style>