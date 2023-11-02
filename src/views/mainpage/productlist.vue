<!-- 产品列表 -->
<template>
    <header class="productlist-header">
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

    <main class="productlist-main" style="padding-top:80px">
        <div class="list-header" style="padding: 0% 6% 0% 6%; ">
            <span>游戏列表</span>
            <span>查看全部
                <RightOutlined />
            </span>
        </div>
        <!-- 循环渲染card1Data -->
        <div class="list-content-line" style="padding: 0% 0% 0% 6%; ">
            <FixCard1 v-for="item in card1Data" :key="item.id" :authorAvater="item.authorAvater" :src="item.src"
                :author="item.author" :title="item.title" :text="item.text" :itemIndex="item.itemIndex" />
        </div>
        <div class="list-header" style="margin-top:26px;padding: 0% 6% 0% 6%; ">
            <span>更多游戏推荐</span>
            <span>查看全部
                <RightOutlined />
            </span>
        </div>
        <div class="list-content-waterfull" style="padding: 0% 6% 60px 6%; ">
            <div style="margin: 0 -12px;">
                <WaterfullCard1 :listInfo="waterfull1Data" />
            </div>

        </div>
    </main>
</template>

<script>
// 图片资源
import imgUrl1 from '@/assets/img/sea.png';
import avaUrl1 from '@/assets/icon/avater/1.png';
import imgUrl2 from '@/assets/img/cars.png';
import avaUrl2 from '@/assets/icon/avater/2.png';
// 其他
import { DownOutlined, SearchOutlined, RightOutlined } from '@ant-design/icons-vue';
import FixCard1 from '@/components/fixcard1.vue';
import WaterfullCard1 from '@/components/waterfullcard1.vue';
export default {
    components: {
        DownOutlined, SearchOutlined, RightOutlined, FixCard1, WaterfullCard1
    },
    setup() {
        const card1Data = [
            {
                authorAvater: avaUrl1,
                src: imgUrl1,
                author: "小明",
                title: "野外冒险",
                text: "在野外的森林冒险",
                like: 16,
                itemIndex: 1
            },
            {
                authorAvater: avaUrl2,
                src: imgUrl2,
                author: "小红",
                title: "玩具工厂",
                text: "亲手制作属于你的玩具",
                like: 29,
                itemIndex: 2
            }];
        const waterfull1Data = [
            {
                authorAvater: 'https://picsum.photos/200/300?random=1',
                src: 'https://picsum.photos/200/300?random=1',
                author: '小虾',
                title: '趣味拼',
                text: '拼出你的世界',
                like: 30,
                itemIndex: 3
            },
            {
                authorAvater: 'https://picsum.photos/200/300?random=2',
                src: 'https://picsum.photos/200/300?random=2',
                author: '小猫',
                title: '猫咪乐园',
                text: '和小猫一起玩耍',
                like: 25,
                itemIndex: 4
            },
            {
                authorAvater: 'https://picsum.photos/200/300?random=3',
                src: 'https://picsum.photos/200/300?random=3',
                author: '小狗',
                title: '狗狗乐园',
                text: '和小狗一起玩耍',
                like: 20,
                itemIndex: 5
            },
            {
                authorAvater: 'https://picsum.photos/200/300?random=4',
                src: 'https://picsum.photos/200/300?random=4',
                author: '小鸟',
                title: '飞翔天空',
                text: '和小鸟一起飞翔',
                like: 15,
                itemIndex: 6
            }

        ];
        return {
            card1Data, waterfull1Data
        };
    }
};
</script>



<style scoped>
.productlist-header {
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

.list-content-line {
    margin-top: 14px;
    /* display: flex; */
    /* gap: 8px; */
    overflow-x: auto;
    /* 允许水平滚动 */
    white-space: nowrap;
    /* 防止子元素自动换行 */
}

.list-content-waterfull {
    margin-top: 14px;

}

::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}
</style>