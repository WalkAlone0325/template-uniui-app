<template>
  <view class="container">
    <view class="intro">
      本项目已包含uni
      ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。
    </view>
    <text class="intro">详见：</text>
    <uni-link :href="href" :text="href"></uni-link>

    <uni-icons custom-prefix="iconfont" type="youxi" size="30"></uni-icons>
    <uni-icons custom-prefix="iconfont" type="wenjian" size="30"></uni-icons>

    <button>按钮</button>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { useUserStore } from '@/store/index.js'

const href = 'https://uniapp.dcloud.io/component/README?id=uniui'

const userStore = useUserStore()
onLoad(() => {
  console.log(uni.$u)
  // userStore.getData()
})
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>
