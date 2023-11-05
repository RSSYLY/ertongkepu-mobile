<!-- 个人中心 -->
<template>
    <div class="personal-img">
        <div class="personal-img-text">
            <div class="personal-img-title">
                {{ personalInfo.title }}
            </div>
            <div class="personal-img-describe">
                {{ personalInfo.discribe }}
            </div>
        </div>

    </div>
    <div class="users-list">
        <div class="users-list-item" v-for="item in usersList">
            <a-avatar class="users-list-item-avater" :src="item.avater" :size="40"/>
            <div class="users-list-item-title">{{ item.name }}</div>
            <div class="users-list-item-describe">{{ item.describe }}</div>
            <a-button type="primary" size="regular" :style="{ borderRadius: '30px' }">
                <span class="users-list-item-button" style="display: flex;">关注</span>
            </a-button>
        </div>
    </div>
    <div class="action-list">
        <div class="action-list-item">
            <div class="action-list-logo" style="background-color:rgba(129, 106, 242, 1);">
                <CommentOutlined />
            </div>
            <div class="action-list-title">评论</div>
        </div>
        <div class="action-list-item">
            <div class="action-list-logo" style="background-color:rgba(78, 150, 242, 1);">
                <BellOutlined />
            </div>
            <div class="action-list-title">@我的</div>
        </div>
        <div class="action-list-item">
            <div class="action-list-logo" style="background-color:rgba(255, 157, 20, 1)">
                <LikeOutlined />
            </div>
            <div class="action-list-title">点赞</div>
        </div>
        <div class="action-list-item">
            <div class="action-list-logo" style="background-color:rgba(45, 201, 161, 1)">
                <TeamOutlined />
            </div>
            <div class="action-list-title">粉丝</div>
        </div>
    </div>
    <div class="list-header" style="padding: 0% 6% 0% 6%; margin-top:20px;">
        <span>标题</span>
        <span>查看全部
            <RightOutlined />
        </span>
    </div>
    <div class="list-content-waterfull" style="padding: 0% 6% 60px 6%; ">
        <div style="margin: 0 -12px;">
            <WaterfullCard1 :listInfo="waterfull1Data" />
        </div>
    </div>
</template>
<style>
.personal-img {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 240px;
    opacity: 1;
    background: url(https://img.jsdesign2.com/assets/img/653c60b052003be94ab6b023.png#fe2d7ef16e03a02c48cd2cdd40876f8d);
    backdrop-filter: blur(72px);
    /* 居中自适应 */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.personal-img-text {
    /* 渐变遮罩 */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    bottom: 0;
    position: absolute;
    width: 100%;
    padding: 16px;
}

.personal-img-title {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
}

.personal-img-describe {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    opacity: 0.8;
}

.users-list {
    padding: 8px 14px 8px 14px;
    display: flex;
    gap: 50px;
    margin: 20px 6% 0 6%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    overflow-x: auto;
}

.users-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}

.users-list-item-title {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(29, 33, 41, 1);
    text-align: center;
    vertical-align: top;
}

.users-list-item-describe {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 18px;
    color: rgba(134, 144, 156, 1);
    text-align: center;
    vertical-align: top;
}

.users-list-item-button {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 18px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
    display: flex;
    align-items: center;
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
.action-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 6% 0 6%;
    padding: 16px 30px 16px 30px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    overflow-x: auto;
}
.action-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}
.action-list-logo {
    width:48px;
    height:48px;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(29, 33, 41, 1);
    text-align: center;
    vertical-align: top;
    border-radius:17px;
    /* 垂直居中 */
    display: flex;
    justify-content: center;
}
.action-list-title {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 18px;
    color: rgba(78,89,105,1);
    text-align: center;
    vertical-align: top;
}
</style>
<script>
import { RightOutlined,CommentOutlined,BellOutlined,LikeOutlined,TeamOutlined } from '@ant-design/icons-vue';
import WaterfullCard1 from '@/components/waterfullcard1.vue';
export default {
    setup() {
        const personalInfo = {
            title: '儿童趣味游戏',
            discribe: '欢迎来到儿童趣味游戏，这里有丰富多样的游戏等你来玩，快来加入我们的大家庭吧！'
        };
        const usersList = [
            {
                name: '小明',
                avater: 'https://picsum.photos/20/20?random=2',
                describe: '工程师'
            },
            {
                name: '小明',
                avater: 'https://picsum.photos/200/300?random=3',
                describe: '运动员'
            },
            {
                name: '小明',
                avater: 'https://picsum.photos/200/300?random=4',
                describe: '医生'
            },
            {
                name: '小明',
                avater: 'https://picsum.photos/200/300?random=5',
                describe: '快递员'
            }
        ];
        const waterfull1Data = [
            {
                authorAvater: 'https://picsum.photos/20/30?random=1',
                src: 'https://picsum.photos/200/300?random=1',
                author: '小虾',
                title: '首页',
                text: '拼出你的世界',
                like: 30,
                id: 3
            },
            {
                authorAvater: 'https://picsum.photos/20/20?random=2',
                src: 'https://picsum.photos/300/200?random=2',
                author: '小猫',
                title: '收藏',
                text: '和小猫一起玩耍',
                like: 25,
                id: 4
            },
            {
                authorAvater: 'https://picsum.photos/20/20?random=3',
                src: 'https://picsum.photos/200/300?random=3',
                author: '小狗',
                title: '游戏',
                text: '和小狗一起玩耍',
                like: 20,
                id: 5
            },
            {
                authorAvater: 'https://picsum.photos/20/20?random=4',
                src: 'https://picsum.photos/200/300?random=4',
                author: '小鸟',
                title: '个人中心',
                text: '和小鸟一起飞翔',
                like: 15,
                id: 6
            }

        ];
        return {
            personalInfo, usersList, waterfull1Data
        };
    },
    components: {
        RightOutlined, WaterfullCard1,CommentOutlined,BellOutlined,LikeOutlined,TeamOutlined
    }
};
</script>
