---
sidebar: auto
---

# 样式

## Vuetify 的 Elevation ( 海拔 ) 的减淡效果样式
 - 和 Vuetify 一样, 有 25 个高度
 - 可以通过 `elevation-{n}--fade` 使用, 其中 `n` 是 0~24 之间与所需海拔对应的整数
```js
  import '@moomfe/small-utils/styles/vuetify/elevations-fade.scss';

  // 在组件中使用
  <v-app-bar elevation="2--fade" />
  // 在 class 中使用
  <div class="elevation-2--fade" />
```