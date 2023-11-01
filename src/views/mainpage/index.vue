<!-- 首页 -->
<template>
    <div style="padding: 6% 6%;">
    <a-row :gutter="[16, 24]" style="">
        <a-col class="gutter-row" :span="24">
            <a-card :tab-list="tabListNoTitle" :active-tab-key="noTitleKey" :bodyStyle="{ height: '98px' }"
                @tabChange="key => onTabChange(key)">
                <p v-if="noTitleKey === '1'">
                <div style="font-size: 16px;font-weight: 800;">
                    儿童趣味游戏
                </div>
                <div style="font-size: 14px;color: rgba(134, 144, 156, 1);font-weight: 500;margin-top: 8px;">
                    王小明 11451419198
                </div>
                </p>
                <p v-else-if="noTitleKey === '2'">没做呢</p>
                <p v-else>project content</p>
            </a-card>
        </a-col>
        <a-col class="gutter-row" :span="24">
            <a-row :gutter="[10, 10]">
                <!-- 需要按照indexInfo数组循环渲染的组件，注意其中的123、456、sb-logo的背景颜色，以及img src的链接 -->
                <a-col :span="12" v-for="(item, index) in indexInfo" :key="index">
                    <a-card style="border-radius: 12px;background-color: rgba(255, 255, 255, 1);">
                        <a-row>
                            <a-col :span="18">
                                <div
                                    style="font-size: 10pt;font-weight: 500;letter-spacing: 0pt;line-height: 18pt;color: rgba(29, 33, 41, 1);overflow: hidden;">
                                    {{ item.title }}
                                </div>
                                <div
                                    style="font-size: 8pt;font-weight: 400;letter-spacing: 0pt;line-height: 16pt;color: rgba(134, 144, 156, 1);overflow: hidden;white-space: nowrap; text-overflow: ellipsis;overflow: hidden;">
                                    {{ item.content }}
                                </div>
                            </a-col>
                            <a-col :span="6" style="float: right;">
                                <div class="sb-logo" :style="{ backgroundColor: item.logoColor }">
                                    <img :src="item.logo">
                                </div>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
                <!-- 结束 -->
            </a-row>
        </a-col>
    </a-row>
    </div>
</template>
<script>
import { ref } from 'vue';
import imgUrl1 from '@/assets/icon/plug.png';
import imgUrl2 from '@/assets/icon/pen.png';
import imgUrl3 from '@/assets/icon/caculator.png';
import imgUrl4 from '@/assets/icon/ask.png';  
export default {
    setup() {
        const tabListNoTitle = [
            {
                key: '1',
                tab: '送货上门',
            },
            {
                key: '2',
                tab: '到店自提',
            },
        ];
        const noTitleKey = ref('1');
        //  当前激活 tab 面板改变，变更展示相应的内容
        const onTabChange = (value) => {
            noTitleKey.value = value;

        };
        // 用于渲染的数组
        const indexInfo = [
            {
                title: '拼图游戏',
                content: '拼出你喜欢',
                logo: imgUrl1,
                logoColor: 'rgba(3, 133, 255, 1)',
            },
            {
                title: '涂鸦乐园',
                content: '画出你的奇妙',
                logo: imgUrl2,
                logoColor: 'rgba(255, 54, 94, 1)',
            },
            {
                title: '数字猜猜猜',
                content: '猜猜我想的是',
                logo: imgUrl3,
                logoColor: 'rgba(242, 130, 31, 1)',
            },
            {
                title: '猜谜语',
                content: '猜猜我是什么',
                logo: imgUrl4,
                logoColor: 'rgba(146, 92, 255, 1)',
            },
        ];
        return {
            tabListNoTitle,
            noTitleKey,
            onTabChange,
            indexInfo
        };
    },
    data() {
        return {
            imgUrl1,imgUrl2,imgUrl3,imgUrl4
        };
    }


};
</script>
<style>
.ant-card {
    top: 8px;
}

.ant-tabs-nav-wrap {
    display: flex;
    justify-content: space-evenly;
    /* gap: 10px; */

}

.ant-card {
    border-radius: 20px 20px 0 0;
}

.sb-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
}

.sb-logo img {
    width: 18px;
    height: 18px;
}
</style>
