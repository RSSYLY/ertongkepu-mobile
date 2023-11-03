<script>
import { HeartOutlined, PhoneOutlined, EnvironmentOutlined, RightOutlined, CommentOutlined } from '@ant-design/icons-vue';
export default{
    props: {
        product: Object
    },
    components: {
        HeartOutlined, PhoneOutlined, EnvironmentOutlined, RightOutlined, CommentOutlined
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
}
</script>
<template>
    <div class="comment-list">
        <div class="comment-list-item" v-for="item in product.comment.commentList">
            <div class="comment-item-main">
                <div class="comment-item-main-avater">
                    <a-avatar :size="36" :src="item.userAvater">
                    </a-avatar>
                </div>
                <div class="comment-item-main-content">
                    <div class="comment-item-main-left">
                        <div class="comment-item-main-left-username">{{ item.user }}</div>
                        <div class="comment-item-main-left-content">{{ item.comment }}</div>
                        <div class="comment-item-main-left-time">{{ timeToString(item.time) }}</div>
                    </div>
                    <div class="comment-item-main-right">
                        <div class="comment-item-main-right-usertarge" :class="{ isVisible: !item.isUseing }">在玩</div>
                        <div class="comment-item-main-right-action">
                            <CommentOutlined />
                            <HeartOutlined />
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-item-sub" v-if="item.subComment.length">
                <div v-for="subItem in item.subComment" class="comment-item-sub-item">
                    <div class="comment-item-sub-avater">
                        <a-avatar :size="14" :src="subItem.userAvater">
                        </a-avatar>
                    </div>
                    <div class="comment-item-sub-content">
                        <div class="comment-item-sub-left">
                            <div class="comment-item-sub-left-username">{{ subItem.user }}</div>
                            <div class="comment-item-sub-left-content">{{ subItem.comment }}</div>
                            <div class="comment-item-sub-left-time">{{ timeToString(subItem.time) }}</div>
                        </div>
                        <div class="comment-item-sub-right">
                            <div class="comment-item-sub-right-usertarge" :class="{ isVisible: !subItem.isUseing }">在玩</div>
                            <div class="comment-item-sub-right-action">
                                <CommentOutlined />
                                <HeartOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.comment-list {
    padding: 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.comment-list-item {}

.comment-item-main {
    display: flex;
    justify-content: space-between;
}

.comment-item-main-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.comment-item-main-avater {
    margin-right: 12px;
}

.comment-item-main-left-username {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(134, 144, 156, 1);
    text-align: left;
    vertical-align: top;
}

.comment-item-main-left-content {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;
}

.comment-item-main-left-time {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(134, 144, 156, 1);
    text-align: left;
    vertical-align: top;
}

.comment-item-main-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
}

.comment-item-main-right-usertarge {
    border-radius: 4px;
    background: rgba(255, 247, 232, 1);

    border: 1px solid rgba(255, 125, 0, 1);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(255, 125, 0, 1);
    text-align: center;
    vertical-align: top;
}

.isVisible {
    visibility: hidden;
}

.comment-item-main-right-action {
    bottom: 0px;
    display: flex;
    gap: 8px;
    color: rgba(134, 144, 156, 1);
}

.comment-item-sub {
    margin: 16px 20px 0 48px;
    padding: 12px;
    background-color: rgba(247, 248, 250, 1);
    border-radius: 6px;
}

.comment-item-sub-item {
    display: flex;
    margin-bottom: 6px;
}

.comment-item-sub-avater {}

.comment-item-sub-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.comment-item-sub-left {
    margin-left: 6px;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
}

.comment-item-sub-left-username {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(134, 144, 156, 1);
    text-align: left;
    vertical-align: top;
}

.comment-item-sub-left-content {
    margin-top: 2px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;
}

.comment-item-sub-left-time {
    margin-top: 2px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(134, 144, 156, 1);
    text-align: left;
    vertical-align: top;
}

.comment-item-sub-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}

.comment-item-sub-right-usertarge {
    border-radius: 4px;
    background: rgba(255, 247, 232, 1);
    border: 1px solid rgba(255, 125, 0, 1);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 16px;
    color: rgba(255, 125, 0, 1);
    text-align: center;
    vertical-align: top;
}

.comment-item-sub-right-action {
    bottom: 0px;
    display: flex;
    gap: 8px;
    color: rgba(134, 144, 156, 1);
}</style>