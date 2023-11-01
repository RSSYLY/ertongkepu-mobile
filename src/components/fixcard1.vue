<script>
import { HeartOutlined, CommentOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        HeartOutlined, CommentOutlined
    },
    props: {
        avaPath: String,
        picPath: String,
        userName: String,
        topic: String,
        text: String
    }
};
</script>
<!-- 这是模板 -->
<template>
    <div class="fixcard-1-div">
    <div class="fixcard-1"  :style="{backgroundImage: 'url('+ picPath+')'}">
        <div class="fixcard-1-content">
            <div class="fixcard-1-content-header">
                <a-space>
                    <a-avatar :size="24" :src="avaPath">
                    </a-avatar>
                    <span class="fixcard-1-content-header-text">{{ userName }}</span>
                </a-space>
            </div>
            <div class="fixcard-1-content-content">
                <div class="fixcard-1-content-content-text">
                    <span>{{ topic }}</span>
                    <span>{{ text }}</span>
                </div>
                <div class="fixcard-1-content-content-action">
                    <a-space>
                        <HeartOutlined />
                        <CommentOutlined />
                    </a-space>
                </div>
            </div>
        </div>
    </div></div>
</template>

<style>
.fixcard-1-div{
    display: inline-block;
    width: 200px;
    height: 240px;
    margin-right: 8px;
}
.fixcard-1 {
    position: relative;
    border-radius: 12px;
    width: 200px;
    height: 240px;
    display: flex;
    opacity: 1;
    overflow: hidden;
    box-sizing: border-box;
    border: 0.5px solid rgba(229, 230, 235, 1);
    /* 背景图片自适应 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
}

/* .fixcard-1::before {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: 1;

    border-radius: 12px;
} */

.fixcard-1-content {
    border-radius: 8px;
    margin: auto 6px 6px;
    z-index: 1;
    width: 100%;
    backdrop-filter: blur(10px);
    padding: 8px;
    background: rgba(0, 0, 0, 0.2);
}

.fixcard-1-content-header-text {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 18px;
    color: rgba(255, 255, 255, 1);

}

.fixcard-1-content-content {
    position: relative;
    /* 确保父元素有相对定位 */
}

.fixcard-1-content-content-text {
    /* 文字溢出隐藏 */
    overflow: hidden;
    /* 文字换行 */
    white-space: nowrap;
    /* 文字超出显示省略号 */
    text-overflow: ellipsis;
}

.fixcard-1-content-content-text span:nth-child(1) {
    margin-top: 8px;
    display: block;
    font-size: 10px;
    color: rgba(255, 255, 255, 1);
    width: 125px;
    /* 超出文字省略 */
    overflow: hidden;
    text-overflow: ellipsis;
}

.fixcard-1-content-content-text span:nth-child(2) {
    margin-top: 2px;
    display: block;
    font-size: 8px;
    color: rgb(213, 212, 209);
    width: 125px;
    /* 超出文字省略 */
    overflow: hidden;
    text-overflow: ellipsis;
}

.fixcard-1-content-content-action {
    /* 浮动右 */
    position: absolute;
    /* 使用绝对定位 */
    right: 0;
    bottom: 0;
    color: rgba(255, 255, 255, 1);
    ;
}
</style>