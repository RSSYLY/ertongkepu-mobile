<!--  购物车页面 -->
<template>
    <header class="cart-header">
        <a-row :gutter="16" justify="center" align="middle">
            <a-col :xs="6" :sm="4" :md="3">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click.prevent style="text-align: center;">
                        分类
                        <DownOutlined />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="0" disabled>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.chiyu.moe/">
                                    分类1
                                </a>
                            </a-menu-item>
                            <a-menu-item key="1" disabled>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.chiyu.moe/">
                                    分类2
                                </a>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3" disabled>分类3</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-col>
            <a-col :xs="18" :sm="20" :md="21">
                <a-input placeholder="输入搜索内容" type="text">
                    <template #prefix>
                        <SearchOutlined />
                    </template>
                </a-input>
            </a-col>
        </a-row>


    </header>
    <main class="cart-main" style="padding:80px 6% 0 6%">
        <div class="list-header">
            <span>购物车</span>
            <span>查看全部
                <RightOutlined />
            </span>
        </div>
        <div class="cart-data">
            <div class="cart-list" v-for="item in cartInfo">
                <div class="cart-item">
                    <div class="cart-item-left">
                        <div class="cart-item-img"
                            :style="{ background: 'url(' + item.src + ')', backgroundSize: 'cover', backgroundPosition: 'center' }">
                        </div>
                    </div>
                    <div class="cart-item-right">
                        <div class="cart-item-header">
                            <div class="cart-item-title">{{ item.title }}</div>
                            <div class="cart-item-text">{{ item.text }}</div>
                        </div>
                        <div class="cart-item-others">
                            <div class="cart-item-price">¥ {{ item.price }}</div>
                            <div class="cart-item-count">
                                <a-space :size="20">
                                    <a-button type="default" size="small" @click="item.count--;"
                                        :disabled="item.count == 0">
                                        <MinusOutlined :style="{ color: '#ffb200' }" />
                                    </a-button>
                                    <span>{{ item.count }}</span>
                                    <a-button type="primary" size="small" @click="item.count++;">
                                        <PlusOutlined :style="{ color: 'rgba(0, 0, 0, 1)' }" />
                                    </a-button>
                                </a-space>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-purchase">
                <div class="cart-purchase-left">
                    <a-checkbox :style="{ borderRadius: '100px' }">全选</a-checkbox>
                </div>
                <div class="cart-purchase-right">
                    <div class="cart-purchase-right-price">
                        <div class="cart-purchase-right-text">合计：<span>¥ {{ totalPrice }}</span></div>
                        <div class="cart-purchase-right-discount">优惠：<span>¥ {{ totalPrice }}</span></div>
                    </div>
                    <a-button type="primary" size="large" :style="{ borderRadius: '30px' }"><span
                            class="cart-purchase-button-text">结算</span></a-button>
                </div>
            </div>
        </div>
        <div class="list-header" style="margin-top:28px">
            <span>更多精彩</span>
            <span>查看全部
                <RightOutlined />
            </span>
        </div>
        <div class="list-content-waterfull" style="padding: 0% 0 60px 0; ">
            <div style="margin: 0 -12px;">
                <WaterfullCard2 :listInfo="waterfull1Data" />
            </div>

        </div>
    </main>
</template>
<style>
.cart-header {
    padding: 20px 6% 20px 6%;
    z-index: 2;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #f7f8fa;
    z-index: 100;
}

.list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.list-header span:first-child {
    font-size: 16px;
}

.list-header span:last-child {
    font-size: 14px;
    color: #999;
}

.cart-data {}

.cart-list {
    margin-top: 14px;
    margin-bottom: 7px;
    /* 竖行摆列 */
    display: flex;
    flex-direction: column;
}

.cart-item {
    display: flex;

}

.cart-item-left {
    margin-right: 12px;
}

.cart-item-img {
    background: url(https://img.jsdesign2.com/assets/img/653c609….png#b63b980…);
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 12px;
    width: 88px;
    height: 88px;
    border: 1px solid rgba(229, 230, 235, 1);
}

.cart-item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
}

.cart-item-header {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.cart-item-title {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 18px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;
}

.cart-item-text {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
    color: rgba(134, 144, 156, 1);
    text-align: left;
    vertical-align: top;
}

.cart-item-others {
    display: flex;
    /* 分列到两端 */
    justify-content: space-between;
    align-items: center;

}

.cart-item-price {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(255, 165, 0, 1);
    text-align: left;
}

.cart-item-count {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 18px;
    color: rgba(29, 33, 41, 1);
    text-align: center;
    vertical-align: top;
}

.cart-purchase {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    padding: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 1);
}

.cart-purchase-left {
    display: flex;
}

.cart-purchase-right {
    display: flex;
    /* 分居两边 */
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

.cart-purchase-right-text {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
}

.cart-purchase-right-text span {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(255, 165, 0, 1);
    text-align: left;

}

.cart-purchase-right-discount {
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 14px;
    color: rgba(134, 144, 156, 1);
    text-align: left;
}

.cart-purchase-right-discount span {
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 14px;
    color: rgba(134, 144, 156, 1);
    text-align: left;

}

.cart-purchase-button-text {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
}
</style>

<script>
import WaterfullCard2 from '@/components/waterfullcard2.vue';
import { SearchOutlined, DownOutlined, RightOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        SearchOutlined, DownOutlined, RightOutlined, PlusOutlined, MinusOutlined, WaterfullCard2
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
    data() {
        return {
            cartInfo: [
                {
                    id: 1,
                    title: '益智积木',
                    text: '让孩子动手拼搭，锻炼思维能力',
                    price: 21.39,
                    count: 2,
                    src: 'https://img.jsdesign2.com/assets/img/653c609174a2094d23b5807a.png#b63b9800a5c9fe8805bf89f76c7f0b98'
                },
                {
                    id: 2,
                    title: '娃娃玩具',
                    text: '陪伴孩子快乐成长',
                    price: 660.99,
                    count: 1,
                    src: 'https://picsum.photos/100/100?random=2'
                },
                {
                    id: 3,
                    title: '绘本故事',
                    text: '开启孩子的阅读之旅',
                    price: 407.79,
                    count: 1,
                    src: 'https://picsum.photos/100/100?random=3'
                }
            ]
        };

    },
    computed: {
        totalPrice() {
            let total = 0;
            for (let i = 0; i < this.cartInfo.length; i++) {
                total += this.cartInfo[i].price * 100 * this.cartInfo[i].count;
            }
            total /= 100;
            return total;
        }
    }
};
</script>

