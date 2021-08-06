---
sidebar: auto
---

# 指引

## 总览

**Small Utils** ( 当前文档对应类库版本 *v2* ) 目前是由以下几部分组成: [组件](/components/), [工具方法](/utils/), [验证器](/validator/), [样式](/styles)

如果你只使用 [工具方法](/utils/), [验证器](/validator/), [样式](/styles), 那么无需其他依赖, 可以直接使用

如果你需要使用 [组件](/components/), 那么需要在以下环境下运行, 当然, 也并不是所有组件都需要以下依赖类库才能运行, 这里只是假设你需要使用所有组件时所需的依赖类库合集

1. [Vue *v2*](https://cn.vuejs.org/)
2. [Vuetify *v2*](https://vuetifyjs.com/zh-Hans/)
3. [lodash](https://lodash.com/)
4. [@vue/composition-api](https://github.com/vuejs/composition-api)
5. [VueUse](https://vueuse.org/)

## 安装

```bash
# 如果你只使用 '工具方法', '验证器', '样式'
# 那么直接安装类库即可
yarn add @moomfe/small-utils
# 或者
npm install @moomfe/small-utils

# 如果你需要使用 '组件'
# 还需要安装以下依赖类库, 具体如何安装, 可以看上面各个类库的文档说明
yarn add vite vue vuetify lodash @vue/composition-api @vueuse/core
# 或者
npm install vite vue vuetify lodash @vue/composition-api @vueuse/core
```