---
sidebar: auto
---

# 组件

## s-scrollbars 滚动条
- 类库 [overlayscrollbars](https://github.com/KingSora/OverlayScrollbars) 的上层封装, 相关代码来自 [overlayscrollbars-vue](https://github.com/KingSora/OverlayScrollbars/tree/master/packages/overlayscrollbars-vue)
- 目前没有做任何处理

## s-form 表单
- `Vuetify` 的 `v-form` 组件的上层封装
- W3C 标准中有此[规定](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2): 当一个 form 元素中只有一个输入框时, 在该输入框中按下回车应提交该表单
- 该组件的目的是阻止该默认行为

## s-input 输入框
- `Vuetify` 的 `v-text-field` 组件的上层封装
- 提供了更多可选属性参数

## s-select 输入框
- `Vuetify` 的 `v-select`, `v-autocomplete`, `v-combobox` 组件的上层封装
- 提供了更多可选属性参数
- `item-text` 默认值由 `text` 改为 `label`

## s-textarea 文本域
- `Vuetify` 的 `v-textarea` 组件的上层封装
- 提供了更多可选属性参数
- 优化了滚动条表现