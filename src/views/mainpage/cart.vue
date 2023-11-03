<!--  购物车页面 -->
<template>
    <header class="cart-header">
        <!-- <ul>
            <li v-for="product in products" :key="product.id">
                <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>
            </li>
        </ul> -->
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
                                <a-button type="primary" size="small">
                                    <PlusOutlined />
                                </a-button>
                                <span>{{ item.count }}</span>
                                <a-button type="default" size="small">
                                    <MinusOutlined />
                                </a-button>
                                </a-space>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-purchase">
                <div class="cart-purchase-left">
                    <div class="cart-purchase-left-text">合计：<span></span></div>
                    <div class="cart-purchase-left-discount">优惠：<span></span></div>
                </div>
                <div class="cart-purchase-right">
                    <a-button type="primary" size="large">结算</a-button>
                </div>
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
    background-color: #fff;
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

}
</style>

<script>
import { SearchOutlined, DownOutlined, RightOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        SearchOutlined, DownOutlined, RightOutlined, PlusOutlined, MinusOutlined
    },
    setup() {
        const cartInfo = [
            {
                id: 1,
                title: '商品标题1',
                text: '描述1',
                price: 10.99,
                count: 2,
                src: 'https://img.jsdesign2.com/assets/img/653c609174a2094d23b5807a.png#b63b9800a5c9fe8805bf89f76c7f0b98'
            },
            {
                id: 2,
                title: '商品标题2',
                text: '描述2',
                price: 39.99,
                count: 1,
                src: 'https://picsum.photos/200/300?random=2'
            },
        ];
        return {
            cartInfo
        };
    }
};
</script>

