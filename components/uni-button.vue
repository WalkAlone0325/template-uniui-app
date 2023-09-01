<template>
  <button
    size="default"
    type="default"
    style="
      color: #ffffff;
      background-color: #1aad19;
      border-color: #1aad19;
      height: 70rpx;
      text-align: center;
      width: 50%;
    "
    hover-class="is-hover"
    @tap="clickHandler"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'uni-button',
  data() {
    return {}
  },
  methods: {
    clickHandler() {
      // // 非禁止并且非加载中，才能点击
      // if (!this.disabled && !this.loading) {
      //   // 进行节流控制，每this.throttle毫秒内，只在开始处执行
      //   uni.$u.throttle(() => {
      //     this.$emit('click')
      //   }, this.throttleTime)
      // }
    }
  }
}
</script>

<style lang="scss">
.is-hover {
  color: rgba(255, 255, 255, 0.6);
  background-color: #179b16;
  border-color: #179b16;
}
</style>
