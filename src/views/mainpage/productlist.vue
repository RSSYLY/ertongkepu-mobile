<!-- 产品列表 -->
<template>
    <header class="productlist-header" style="padding: 6% 6%;">
        <!-- <ul>
            <li v-for="product in products" :key="product.id">
                <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>
            </li>
        </ul> -->
        <a-row :gutter="16" align="middle">
            <a-col :xs="6" :sm="4" :md="3" >
                <a-dropdown>
                    <a class="ant-dropdown-link" @click.prevent>
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
            <a-col :xs="18" :sm="20" :md="21" >
                <a-input placeholder="输入搜索内容" type="text">
                    <template #prefix>
                        <SearchOutlined />
                    </template>
                </a-input>
            </a-col>
        </a-row>


    </header>
</template>

<script>
import { DownOutlined, SearchOutlined } from '@ant-design/icons-vue';
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Product 1' }
            ]
        };
    },
    components: {
        DownOutlined, SearchOutlined
    }
};
</script>
