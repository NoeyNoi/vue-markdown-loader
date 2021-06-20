<template>
  <div :class="{ 'demo-playground': !inline, transform }">
    <slot v-if="inline" />
    <template v-else>
      <div class="demo-playground--previewer" :class="{ compact }">
        <slot />
      </div>
      <div class="demo-playground--code">
        <div class="demo-playground--code--actions">
          <span></span>
          <button
            title="Copy source code"
            class="iconfont noey-copy"
            role="copy"
            :data-status="copyStatus"
            @click="copySourceCode"
          />
          <button
            title="Toggle source code panel"
            class="iconfont noey-code1"
            role="source"
            @click="toogleSource"
          />
        </div>
        <div
          v-show="showSource"
          v-html="unescape(codeSnippet)"
          class="demo-playground--code--content"
        ></div>
      </div>
    </template>
  </div>
</template>

<script>
import copy from 'copy-text-to-clipboard'
// import 'highlight.js/styles/base16/dracula.css'

export default {
  name: 'DemoPlayground',
  props: {
    originCode: String, // 源文件内容
    codeSnippet: String, //  源文件转 html 后的内容
    transform: Boolean, // 防止 position fixed 内容飞出预览区域
    compact: Boolean, // 紧凑模式
    inline: Boolean // 不需要容器
  },
  data () {
    return {
      showSource: false,
      copyStatus: 'ready'
    }
  },
  methods: {
    unescape,
    toogleSource () {
      this.showSource = !this.showSource
    },
    copySourceCode () {
      copy(unescape(this.originCode))
      this.copyStatus = 'copied'
      setTimeout(() => {
        this.copyStatus = 'ready'
      }, 2000)
    }
  }
}
</script>

<style lang="less" src="../../assets/style/highlight.less" />

<style scoped src="../../assets/icon-font/iconfont.css" />

<style lang="less" scoped>
.demo-playground {
  background-color: #fff;
  border: 1px solid #ebedf1;
  border-radius: 1px;
  margin: 24px 0;
  &.transform {
    transform: translate(0, 0);
  }
  &--previewer {
    padding: 40px 24px;
    border-bottom: 1px solid #ebedf1;
    &.compact {
      padding: 0;
    }
  }
  &--code {
    &--actions {
      display: flex;
      height: 40px;
      padding: 0 1em;
      align-items: center;
      > a:not(:last-child),
      > button:not(:last-child) {
        margin-right: 8px;
      }
      > a {
        display: flex;
      }
      button {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0.4;
        outline: none;
        transition: opacity 0.2s, background 0.2s;
        background: none;
        &:hover {
          opacity: 0.8;
        }
        &:active {
          opacity: 0.9;
        }
        &:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
      }
      // split action buttons by a blank node
      > span {
        flex: 1;
        display: inline-block;
      }
    }
    &--content {
      border-top: 1px dashed #ebedf1;
      :deep(pre) {
        border-radius: 0;
        margin: 0;
        // padding: 16px;
        // background: #282936;
        // color: white;
      }
      :deep(.language-html) {
        border-radius: 0;
      }
    }
  }
}
</style>
