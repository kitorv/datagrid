## Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 基础用法

:::snippet 默认每一级都会使用`/`进行分隔。

```vue
<template>
  <v-breadcrumb>
    <v-breadcrumb-item to="/">Home</v-breadcrumb-item>
    <v-breadcrumb-item to="/">View</v-breadcrumb-item>
    <v-breadcrumb-item>Component</v-breadcrumb-item>
  </v-breadcrumb>
</template>
```

:::

## 分隔符

:::snippet 通过`separator`属性设置分隔符。

```vue
<template>
  <v-breadcrumb separator=">">
    <v-breadcrumb-item to="/">Home</v-breadcrumb-item>
    <v-breadcrumb-item to="/">view</v-breadcrumb-item>
    <v-breadcrumb-item>Component</v-breadcrumb-item>
  </v-breadcrumb>
</template>
```

:::

## Breadcrumb Props

| 参数      | 说明   | 类型     | 默认值 |
| --------- | ------ | -------- | ------ |
| separator | 分隔符 | _String_ | `/`    |

## Breadcrumb Slots

| 名称 | 说明         |
| ---- | ------------ |
| —    | 面包屑层级项 |

## BreadcrumbItem Props

| 参数 | 说明     | 类型               | 默认值 |
| ---- | -------- | ------------------ | ------ |
| to   | 目标路由 | _RouteLocationRaw_ | —      |

## BreadcrumbItem Events

| 事件名称 | 说明     | 回调参数      |
| -------- | -------- | ------------- |
| click    | 点击触发 | _event:Event_ |

## BreadcrumbItem Slots

| 名称 | 说明         |
| ---- | ------------ |
| —    | 具体项的内容 |
